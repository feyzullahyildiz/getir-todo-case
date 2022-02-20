import React from 'react';
import { Card, Todo, TodoList, TodoAdd } from '../features';
import styles from './App.module.css';

export const App: React.FC = () => {
    const onSave = (id: string, text: string) => {
        console.log('onSave', id, text);
    };
    const onDelete = (id: string) => {
        console.log('onDelete', id);
    };
    return (
        <div className={styles.app}>
            <h4>Todo Application</h4>
            <Card className={styles.todolist}>
                Todo List
                <TodoList>
                    <Todo
                        id="1"
                        text="Test Item"
                        status="completed"
                        onDelete={onDelete}
                        onSave={onSave}
                    />
                    <Todo
                        id="2"
                        text="Test Item"
                        status="completed"
                        onDelete={onDelete}
                        onSave={onSave}
                    />
                    <Todo
                        id="3"
                        status="incomplete"
                        text="Test 2"
                        onDelete={onDelete}
                        onSave={onSave}
                    />
                </TodoList>
            </Card>
            <div className={styles.spacer}></div>
            <div className={styles.newtodo}>
                <Card className={styles.newtodocard}>
                    <TodoAdd />
                </Card>
            </div>
        </div>
    );
};
