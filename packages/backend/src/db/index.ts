import { Schema, model } from 'mongoose';
interface ITodo {
    name: string;
    completed: boolean;
}
const todoSchema = new Schema<ITodo>({
    name: String,
    completed: Boolean,
});

export const Todo = model<ITodo>('Todo', todoSchema);
