import React from 'react';
import cn from 'classnames';
import styles from './index.module.css';

interface Props {
    mini?: boolean;
}
type ButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;
export const FabButton: React.FC<ButtonProps & Props> = ({
    children,
    className,
    mini = false,
    ...props
}) => {
    const miniClassName = mini ? styles.mini : null;
    return (
        <button className={cn(styles.fab, miniClassName, className)} {...props}>
            {children}
        </button>
    );
};
