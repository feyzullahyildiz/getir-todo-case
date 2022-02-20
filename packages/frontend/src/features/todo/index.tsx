import React, { useEffect, useState, ChangeEventHandler } from 'react';
import { DeleteIcon, CheckIcon } from '../../common';
import { FabButton } from '../fabbutton';
import styles from './index.module.css';
interface Props {
    id: string;
    text: string;
    onSave: (id: string, text: string) => void;
    onDelete: (id: string) => void;
}
export const Todo: React.FC<Props> = ({ id, text, onDelete, onSave }) => {
    const [textValue, setTextValue] = useState(text);
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const val = e.target.value;
        setTextValue(val);
    };
    useEffect(() => {
        setTextValue(text);
    }, [text]);
    const isTextDirty = text !== textValue;
    return (
        <div className={styles.todo}>
            <input className={styles.checkbox} type="checkbox" />
            <input
                onChange={onChange}
                className={styles.text}
                type="text"
                value={textValue}
            />
            {isTextDirty && (
                <FabButton onClick={() => onSave(id, textValue)}>
                    <CheckIcon
                        data-testid="svg-icon-check"
                        className={styles.icon}
                    />
                </FabButton>
            )}
            <FabButton onClick={() => onDelete(id)}>
                <DeleteIcon
                    data-testid="svg-icon-delete"
                    className={styles.icon}
                />
            </FabButton>
        </div>
    );
};
