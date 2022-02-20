import React from 'react';
import { Card, Todo, TodoList, TodoAdd } from '../features';
import {
    useAddTodoMutation,
    useDeleteTodoMutation,
    useFetchTodosQuery,
    useUpdateCompleteTodoMutation,
    useUpdateTextTodoMutation,
} from '../features/todolist/todolist-api-slice';
import styles from './App.module.css';

export const App: React.FC = () => {
    const { isFetching, data = [] } = useFetchTodosQuery();
    const [addTodo] = useAddTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();
    const [updateCompleteTodo] = useUpdateCompleteTodoMutation();
    const [updateNameTodo] = useUpdateTextTodoMutation();

    const onUpdateName = (id: string, name: string) => {
        updateNameTodo({ id, name });
    };
    const onUpdateComplete = (id: string, completed: boolean) => {
        updateCompleteTodo({ id, completed });
    };
    const onDelete = (id: string) => {
        deleteTodo(id);
    };
    const onAddTodo = (name: string) => {
        addTodo(name);
    };
    const completedList = data.filter((t) => t.completed);
    const inCompletedList = data.filter((t) => !t.completed);

    return (
        <div className={styles.app}>
            <h4>Todo Application{isFetching && '...'}</h4>
            <Card className={styles.todolist}>
                <TodoList>
                    {completedList.map((todo) => (
                        <Todo
                            id={todo._id}
                            key={todo._id}
                            name={todo.name}
                            completed={todo.completed}
                            onDelete={onDelete}
                            onUpdateName={onUpdateName}
                            onUpdateComplete={onUpdateComplete}
                        />
                    ))}
                    {inCompletedList.map((todo) => (
                        <Todo
                            id={todo._id}
                            key={todo._id}
                            name={todo.name}
                            completed={todo.completed}
                            onDelete={onDelete}
                            onUpdateName={onUpdateName}
                            onUpdateComplete={onUpdateComplete}
                        />
                    ))}
                </TodoList>
            </Card>
            <div className={styles.spacer}></div>
            <div className={styles.newtodo}>
                <Card className={styles.newtodocard}>
                    <TodoAdd onSubmit={onAddTodo} />
                </Card>
            </div>
        </div>
    );
};
