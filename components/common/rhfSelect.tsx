import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

interface PropsTypes<FormFields> extends React.SelectHTMLAttributes<HTMLSelectElement> {
    register: UseFormRegister<FormFields>;
    name: Path<FormFields>;
    helperClassName?: string; //helperText의 className
}

//children에 option들을 넣어주어야 합니다.
export default function RHFSelect<FormFields>({ register, name, children, ...props }: PropsTypes<FormFields>) {
    return (
        <select {...register(name)} {...props}>
            {children}
        </select>
    );
}
