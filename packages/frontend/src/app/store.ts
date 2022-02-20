import { configureStore } from '@reduxjs/toolkit';
import todoaddSlice from '../features/todoadd/todoadd-slice';
import { apiSlice } from '../features/todolist/todolist-api-slice';

export const store = configureStore({
    reducer: {
        todoAdd: todoaddSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
