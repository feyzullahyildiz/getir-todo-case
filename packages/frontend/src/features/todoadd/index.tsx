import React, { ChangeEventHandler } from 'react';
import { FabButton } from '..';
import { useAppDispatch, useAppSelector } from '../../app';
import { AddIcon } from '../../common';
import styles from './index.module.css';
import { nameChanged } from './todoadd-slice';

interface Props {
    onTodoAdd: (name: string) => void;
}
export const TodoAdd: React.FC<Props> = ({ onTodoAdd }) => {
    const name = useAppSelector((state) => state.todoAdd.name);
    const dispatch = useAppDispatch();
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (name.trim().length < 2) {
            return;
        }
        onTodoAdd(name);
        dispatch(nameChanged(''));
    };
    const onTextChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatch(nameChanged(e.target.value));
    };
    return (
        <form onSubmit={onSubmit} className={styles.todoadd}>
            <input
                className={styles.input}
                value={name}
                onChange={onTextChange}
                placeholder="Type new Todo"
                type="text"
            />
            <FabButton type="submit">
                <AddIcon />
            </FabButton>
        </form>
    );
};
