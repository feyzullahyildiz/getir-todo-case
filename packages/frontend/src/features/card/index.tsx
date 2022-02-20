import React from 'react';
import cn from 'classnames';
import styles from './index.module.css';

type DivProps = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;
export const Card: React.FC<DivProps> = ({ children, className, ...props }) => {
    return (
        <div className={cn(styles.card, className)} {...props}>
            {children}
        </div>
    );
};
