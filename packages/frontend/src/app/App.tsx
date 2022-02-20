import React from 'react';
import { Card, Todo, TodoList } from '../features';
import style from './App.module.css';

export const App: React.FC = () => {
    const onSave = (id: string, text: string) => {
        console.log('onSave', id, text);
    };
    const onDelete = (id: string) => {
        console.log('onDelete', id);
    };
    return (
        <div className={style.app}>
            <h4>Todo Application</h4>
            <Card className={style.card}>
                Todo List
                <TodoList>
                    <Todo
                        id="1"
                        text="Test Item"
                        onDelete={onDelete}
                        onSave={onSave}
                    />
                    <Todo
                        id="2"
                        text="Test 2"
                        onDelete={onDelete}
                        onSave={onSave}
                    />
                </TodoList>
            </Card>
        </div>
    );
};
