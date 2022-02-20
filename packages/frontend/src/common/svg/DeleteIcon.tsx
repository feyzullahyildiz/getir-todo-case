import * as React from 'react';
import { SVGProps } from 'react';

export const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        {...props}
    >
        <path d="M10 2 9 3H4v2h16V3h-5l-1-1h-4zM5 7v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7H5z" />
    </svg>
);
