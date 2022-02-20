import React from 'react';
import styles from './index.module.css';

interface Props {
    text: string;
}
export const Todo: React.FC<Props> = ({ text }) => {
    return (
        <div className={styles.todo}>
            <input className={styles.checkbox} type="checkbox" />
            <input className={styles.text} type="text" defaultValue={text} />
        </div>
    );
};
