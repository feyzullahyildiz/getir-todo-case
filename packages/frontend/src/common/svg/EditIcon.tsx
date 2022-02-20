import * as React from 'react';
import { SVGProps } from 'react';

export const EditIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        {...props}
    >
        <path d="M18.414 2a.995.995 0 0 0-.707.293L16 4l4 4 1.707-1.707a.999.999 0 0 0 0-1.414l-2.586-2.586A.996.996 0 0 0 18.414 2zM14.5 5.5 3 17v4h4L18.5 9.5l-4-4z" />
    </svg>
);
