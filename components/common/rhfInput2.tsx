import { ErrorMessage } from '@hookform/error-message';
import { useFormContext, RegisterOptions } from 'react-hook-form';

export type InputProps = {
    id: string;
    label?: string;
    placeholder?: string;
    helperText?: string;
    type?: string;
    readOnly?: boolean;
    validation?: RegisterOptions;
    helperClassName?: string;
    errorClassName?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export default function Input({
    id,
    label,
    placeholder = '',
    helperText,
    type = 'text',
    readOnly = false,
    validation,
    helperClassName,
    errorClassName,
    ...rest
}: InputProps) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    function getClassName(): string {
        let result = 'mb-[10px] w-full px-[12px] h-[50px] min-h-[50px] rounded-[5px] outline-none text-[16px]';

        if (readOnly) result += ' ' + 'bg-[#f2f4f7] cursor-not-allowed ';
        else result += ' ' + 'text-[#333] border border-[#e1e2e3] focus:border-blue1';

        return result;
    }

    return (
        <div>
            {label ? (
                <div className="mb-[7px] mt-[17px] ">
                    <label className="font-semi-bold text-[#888] text-[14px]" htmlFor={id}>
                        {label}
                    </label>
                </div>
            ) : null}
            <input
                {...register(id, validation)}
                {...rest}
                type={type}
                name={id}
                id={id}
                readOnly={readOnly}
                className={getClassName()}
                placeholder={placeholder}
            />
            <ErrorMessage errors={errors} name={id} render={({ message }) => <p className={`text-warn text-[13px] ${errorClassName}`}>{message}</p>} />
            <div>{helperText && <p className={`text-[#888] text-[13px] ${helperClassName}`}>{helperText}</p>}</div>
        </div>
    );
}
