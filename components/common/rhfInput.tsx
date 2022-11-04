import React from 'react';
import { DeepMap, FieldError, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface PropsTypes<TFieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<TFieldValues>;
    options?: RegisterOptions;
    name: Path<TFieldValues>;
    errors?: Partial<DeepMap<TFieldValues, FieldError>>;
    helperClassName?: string; //helperText의 className
}

//기본적으로 input의 모든 속성들을 사용할 수 있습니다.
//외부로부터 TFieldValues에 들어갈 타입을 정의해야합니다.
//ex) type TFieldValues = { foo : string };
export default function RHFInput<TFieldValues>({ register, options, name, errors = {}, helperClassName = '', ...props }: PropsTypes<TFieldValues>) {
    return (
        <div>
            <input {...(register && register(name, options))} name={name} {...props} />
            <ErrorMessage errors={errors} name={name as any} render={({ message }) => <p className={`text-red-600 ${helperClassName}`}>{message}</p>} />
        </div>
    );
}
