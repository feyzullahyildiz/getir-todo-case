import React from 'react';
import { render, screen } from '@testing-library/react';
import { Todo } from './index';

test('renders text', () => {
    const onDelete = jest.fn();
    const onSave = jest.fn();
    const onUpdateComplete = jest.fn();
    render(
        <Todo
            id="1"
            name="Foo"
            onDelete={onDelete}
            onUpdateName={onSave}
            onUpdateComplete={onUpdateComplete}
            completed={false}
        />,
    );
    const item = screen.getByDisplayValue('Foo');
    expect(item).toBeInTheDocument();
});

test('icon check should not be rendered', () => {
    const onDelete = jest.fn();
    const onSave = jest.fn();
    const onUpdateComplete = jest.fn();
    render(
        <Todo
            id="1"
            name="Foo"
            onDelete={onDelete}
            onUpdateName={onSave}
            onUpdateComplete={onUpdateComplete}
            completed={false}
        />,
    );
    expect(() => screen.getByTestId('svg-icon-check')).toThrow();
    expect(() => screen.getByTestId('svg-icon-delete')).not.toThrow();
});
