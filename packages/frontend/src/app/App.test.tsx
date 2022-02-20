import React from 'react';
import fetchMock from 'jest-fetch-mock';

import { render, screen } from '@testing-library/react';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from '.';

beforeEach(() => {
    fetchMock.resetMocks();
});
describe('App test', () => {
    test('renders learn react link', () => {
        fetchMock.mockResponse(JSON.stringify([]));
        render(
            <Provider store={store}>
                <App />
            </Provider>,
        );
        const linkElement = screen.getByText(/Todo Application/i);
        expect(linkElement).toBeInTheDocument();
    });
});
