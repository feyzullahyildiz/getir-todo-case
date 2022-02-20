import React from 'react';
import styles from './index.module.css';
import cn from 'classnames';
import { CircleIcon, RadioCheckedIcon } from '../../common';
type Props = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;
export const Checkbox: React.FC<Props> = ({
    checked = false,
    className,
    ...props
}) => {
    return (
        <label className={cn(styles.label, className)}>
            <input className={styles.checkbox} type="checkbox" {...props} />
            {checked ? (
                <RadioCheckedIcon className={styles.active} />
            ) : (
                <CircleIcon
                    circleClassName={styles.circleIcon}
                    className={styles.passive}
                />
            )}
        </label>
    );
};
