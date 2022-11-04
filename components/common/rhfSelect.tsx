import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

interface PropsTypes<TFieldValues> extends React.SelectHTMLAttributes<HTMLSelectElement> {
    register: UseFormRegister<TFieldValues>;
    name: Path<TFieldValues>;
    helperClassName?: string; //helperText의 className
}

//children에 option들을 넣어주어야 합니다.
export default function RHFSelect<TFieldValues>({ register, name, children, ...props }: PropsTypes<TFieldValues>) {
    return (
        <select {...register(name)} {...props}>
            {children}
        </select>
    );
}
