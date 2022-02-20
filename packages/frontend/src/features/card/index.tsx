import React from 'react';
import cn from 'classnames';
import styles from './index.module.css';

interface Props {
    className?: string;
}
export const Card: React.FC<Props> = ({
    children,
    className = '',
    ...props
}) => {
    return (
        <div className={cn(styles.card, className)} {...props}>
            {children}
        </div>
    );
};
