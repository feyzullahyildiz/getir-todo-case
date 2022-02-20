import type { TodoItem } from 'shared';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = process.env.REACT_APP_API;
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${url}/api`,
    }),
    tagTypes: ['Todos'],

    endpoints(builder) {
        return {
            fetchTodos: builder.query<TodoItem[], void>({
                query: () => '/',
                providesTags: (result) => {
                    if (!result) {
                        return [{ type: 'Todos', id: 'LIST' }];
                    }
                    return [
                        ...result.map(
                            ({ _id }) => ({ type: 'Todos', id: _id } as const),
                        ),
                        { type: 'Todos', id: 'LIST' },
                    ];
                },
            }),
            addTodo: builder.mutation<TodoItem, string>({
                query: (name) => ({
                    url: '/',
                    method: 'POST',
                    body: { name },
                }),
                invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
            }),
            deleteTodo: builder.mutation<TodoItem, string>({
                query: (id) => ({
                    url: `/${id}`,
                    method: 'DELETE',
                }),
                invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
            }),
            updateCompleteTodo: builder.mutation<
                TodoItem,
                { id: string; completed: boolean }
            >({
                query: ({ id, completed }) => ({
                    url: `/${id}`,
                    method: 'PUT',
                    body: { completed },
                }),
                invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
            }),
            updateTextTodo: builder.mutation<
                TodoItem,
                { id: string; name: string }
            >({
                query: ({ id, name }) => ({
                    url: `/${id}`,
                    method: 'PUT',
                    body: { name },
                }),
                invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
            }),
        };
    },
});
export const {
    useFetchTodosQuery,
    useAddTodoMutation,
    useDeleteTodoMutation,
    useUpdateCompleteTodoMutation,
    useUpdateTextTodoMutation,
} = apiSlice;
