import React, { useEffect, useState, ChangeEventHandler } from 'react';
import { DeleteIcon, CheckIcon } from '../../common';
import { FabButton } from '../fabbutton';
import cn from 'classnames';
import styles from './index.module.css';
interface Props {
    id: string;
    name: string;
    onUpdateName: (id: string, text: string) => void;
    onDelete: (id: string) => void;
    onUpdateComplete: (id: string, completed: boolean) => void;
    completed: boolean;
}
export const Todo: React.FC<Props> = ({
    id,
    name: text,
    onDelete,
    onUpdateName: onSave,
    onUpdateComplete,
    completed,
}) => {
    const [textValue, setTextValue] = useState(text);
    const onTextChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const val = e.target.value;
        setTextValue(val);
    };
    useEffect(() => {
        setTextValue(text);
    }, [text]);
    const isTextDirty = text !== textValue;
    const className = cn(styles.todo, completed ? styles.completed : null);
    return (
        <div className={className}>
            <input
                className={styles.checkbox}
                checked={completed}
                onChange={(e) => onUpdateComplete(id, e.target.checked)}
                type="checkbox"
            />
            {completed ? (
                <span className={styles.spantext}>{textValue}</span>
            ) : (
                <input
                    onChange={onTextChange}
                    className={styles.inputtext}
                    type="text"
                    value={textValue}
                    disabled={completed}
                />
            )}
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
