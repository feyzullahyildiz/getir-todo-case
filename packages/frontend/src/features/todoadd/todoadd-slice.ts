import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodoAddState {
    name: string;
}

const initialState: TodoAddState = {
    name: '',
};
const todoAddSlice = createSlice({
    name: 'todoadd',
    initialState,
    reducers: {
        nameChanged(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
    },
});

export const { nameChanged } = todoAddSlice.actions;
export default todoAddSlice.reducer;
