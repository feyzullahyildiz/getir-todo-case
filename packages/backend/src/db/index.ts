import type { TodoItem } from 'shared';
import { Schema, model } from 'mongoose';

const todoSchema = new Schema<TodoItem>({
    name: String,
    completed: Boolean,
});

export const Todo = model<TodoItem>('Todo', todoSchema);
