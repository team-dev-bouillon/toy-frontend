import React from 'react';
import { DeepMap, FieldError, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface PropsTypes<FormFields> extends React.InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<FormFields>;
    options?: RegisterOptions;
    name: Path<FormFields>;
    errors?: Partial<DeepMap<FormFields, FieldError>>;
    helperClassName?: string; //helperText의 className
}

//기본적으로 input의 모든 속성들을 사용할 수 있습니다.
//외부로부터 FormFields에 들어갈 타입을 정의해야합니다.
//ex) type FormFields = { foo : string };
export default function RHFInput<FormFields>({ register, options, name, errors = {}, helperClassName = '', ...props }: PropsTypes<FormFields>) {
    return (
        <div>
            <input {...(register && register(name, options))} name={name} {...props} />
            <ErrorMessage errors={errors} name={name as any} render={({ message }) => <p className={`text-red-600 ${helperClassName}`}>{message}</p>} />
        </div>
    );
}
