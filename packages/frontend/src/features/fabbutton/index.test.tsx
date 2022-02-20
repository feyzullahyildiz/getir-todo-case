import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FabButton } from './index';

test('renders children', () => {
    render(<FabButton>Foo Bar</FabButton>);
    const buttonElement = screen.getByText('Foo Bar');
    expect(buttonElement).toBeInTheDocument();
});
test('fire event on click', () => {
    const onClick = jest.fn();
    render(<FabButton onClick={onClick}>Foo Bar</FabButton>);
    const buttonElement = screen.getByText('Foo Bar');

    expect(onClick).toBeCalledTimes(0);
    fireEvent.click(buttonElement);
    expect(onClick).toBeCalledTimes(1);
});
test('it should not fire event while it is disabled', () => {
    const onClick = jest.fn();
    render(
        <FabButton disabled onClick={onClick}>
            btn
        </FabButton>,
    );
    const buttonElement = screen.getByText('btn');

    expect(onClick).toBeCalledTimes(0);
    fireEvent.click(buttonElement);
    expect(onClick).toBeCalledTimes(0);
});
