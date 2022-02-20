import React from 'react';
import { Card, Todo, TodoList } from '../features';
import style from './App.module.css';

export const App: React.FC = () => {
    return (
        <div className={style.app}>
            <h4>Todo Application</h4>
            <Card className={style.card}>
                Todo List
                <TodoList>
                    <Todo text="Test Item" />
                    <Todo text="test Item" />
                </TodoList>
            </Card>
        </div>
    );
};
