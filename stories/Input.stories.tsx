import React from 'react';
import * as yup from 'yup';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input, { InputProps } from '../components/common/rhfInput2';
import { withRHF } from './withRTF';

const schema = yup
    .object({
        email: yup.string().email('이메일 형식으로 적어주세요!').required('입력해주세요!'),
    })
    .required();

export default {
    title: 'Input',
    component: Input,
    decorators: [withRHF(schema)], //Input을 감싸서 사용하는 부분은 withRHF를 확인해야합니다.
} as ComponentMeta<typeof Input>;

enum FieldNames {
    //form에서 사용할 column들을 등록합니다.
    email = 'email',
}

const fieldOptions: { [key in FieldNames]: InputProps } = {
    //각 input에 들어갈 props들을 정의합니다.
    email: {
        id: 'email',
        label: '이메일',
        validation: {
            required: '입력하세요!',
        },
        className: '',
        placeholder: '',
        type: 'input',
        readOnly: false,
        disabled: false,
        helperText: '안내 문구입니다.',
        helperClassName: '',
        errorClassName: '',
    },
};

const Template: ComponentStory<typeof Input> = args => {
    return <Input {...args} />;
};

export const Default = Template.bind({});

Default.args = {
    ...fieldOptions.email,
};
