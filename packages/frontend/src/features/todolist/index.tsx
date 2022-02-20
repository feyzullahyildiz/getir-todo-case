import React from 'react';
import styles from './index.module.css';

export const TodoList: React.FC = ({ children }) => {
    return <div className={styles.todolist}>{children}</div>;
};
