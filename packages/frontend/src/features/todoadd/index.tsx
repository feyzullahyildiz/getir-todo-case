import React, { ChangeEventHandler } from 'react';
import { FabButton } from '..';
import { useAppDispatch, useAppSelector } from '../../app';
import { AddIcon } from '../../common';
import styles from './index.module.css';
import { nameChanged } from './todoadd-slice';

interface Props {
    onSubmit: (name: string) => void;
}
export const TodoAdd: React.FC<Props> = ({ onSubmit }) => {
    const name = useAppSelector((state) => state.todoAdd.name);
    const dispatch = useAppDispatch();
    const onClick = () => {
        if (name.trim().length < 2) {
            return;
        }
        onSubmit(name);
        nameChanged('');
    };
    const onTextChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatch(nameChanged(e.target.value));
    };
    return (
        <div className={styles.todoadd}>
            <input
                className={styles.input}
                value={name}
                onChange={onTextChange}
                placeholder="Type new Todo"
                type="text"
            />
            <FabButton onClick={onClick}>
                <AddIcon />
            </FabButton>
        </div>
    );
};
