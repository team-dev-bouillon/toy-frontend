import React from 'react';

interface PropsTypes extends React.FormHTMLAttributes<HTMLFormElement> {
    onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export default function RHFForm({ onSubmit, children, ...props }: PropsTypes) {
    return (
        <form onSubmit={onSubmit} {...props}>
            {children}
        </form>
    );
}
