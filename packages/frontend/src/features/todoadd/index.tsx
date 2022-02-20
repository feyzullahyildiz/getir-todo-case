import React from 'react';
import { FabButton } from '..';
import { AddIcon } from '../../common';
import styles from './index.module.css';

export const TodoAdd = () => {
    return (
        <div className={styles.todoadd}>
            <input
                className={styles.input}
                placeholder="Type new Todo"
                type="text"
            />
            <FabButton>
                <AddIcon />
            </FabButton>
        </div>
    );
};
