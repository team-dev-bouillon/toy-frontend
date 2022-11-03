import React from 'react';

//children에 option들을 넣어주어야 합니다.
export default function RHFSelect({ register, name, rules = {}, onChange, children, ...props }) {
    return (
        <select {...register(name, rules)} onChange={onChange} {...props}>
            {children}
        </select>
    );
}
