import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './index';

test('renders children', () => {
    render(<Card>Foo Bar</Card>);
    const linkElement = screen.getByText('Foo Bar');
    expect(linkElement).toBeInTheDocument();
});

test('it should have extra classname', () => {
    render(<Card className="foobar">content</Card>);
    const container = screen.getByText('content');
    expect(container).toHaveClass('foobar');
});
