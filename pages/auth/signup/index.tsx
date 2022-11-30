import AuthLayout from 'components/common/authLayout';
import Input, { InputProps } from 'components/common/Input';
import Image from 'next/image';

import authHeaderLogo from 'public/assets/auth-header-logo.svg';
import { FormProvider, useForm } from 'react-hook-form';

export default function SignupPage() {
    return (
        <AuthLayout>
            <header className="px-[20px] h-[64px] flex items-center">
                <Image src={authHeaderLogo} alt="signup logo" width={120} height={17} />
            </header>
            <main className="p-[20px] overflow-auto h-full w-full flex flex-col items-center">
                <h1 className="text-[28px] font-bold my-[20px]">나다운 일의 시작, 원티드</h1>
                <h2 className="text-[15px] text-center font-regular text-[#888] my-[12px]">
                    취업, 이직, 커리어 콘텐츠까지 <br /> 커리어 성장의 모든 것
                </h2>
                <SignupForm />
            </main>
        </AuthLayout>
    );
}

enum FieldNames {
    //form에서 사용할 column들을 등록합니다.
    email = 'email',
    username = 'username',
    password = 'password',
    passwordConfirm = 'passwordConfirm',
    phone = 'phone',
    phoneConfirm = 'phoneConfirm',
    isAgree = 'isAgree',
}

const fieldOptions: { [key in FieldNames]: InputProps } = {
    //각 input에 들어갈 props들을 정의합니다.
    email: {
        id: 'email',
        label: '이메일',
        placeholder: '이메일을 입력해주세요',
        validation: {
            required: '이메일을 입력해주세요',
        },
    },
    username: {
        id: 'username',
        label: '이름',
        placeholder: '이름을 입력해주세요',

        validation: {
            required: '이름을 입력해주세요',
        },
    },
    password: {
        id: 'password',
        label: '비밀번호',
        placeholder: '비밀번호를 입력해주세요',

        validation: {
            required: '비밀번호를 입력해주세요',
        },
    },
    passwordConfirm: {
        id: 'passwordConfirm',
        label: '',
        placeholder: '비밀번호를 다시 한번 입력해주세요',
        validation: {
            required: '비밀번호를 다시 한번 입력해주세요',
        },
    },
    phone: {
        id: 'phone',
        label: '휴대폰 번호',
        placeholder: '(예시)01013245768',

        validation: {
            required: '번호를 입력해주세요',
        },
    },
    phoneConfirm: {
        id: 'phoneConfirm',
        label: '',
        placeholder: '인증번호를 입력해주세요',
        disabled: true,
        validation: {
            required: '인증번호를 입력해주세요',
        },
    },
    isAgree: {
        type: 'checkbox',
        id: 'isAgree',
        label: '',
        validation: {
            required: '개인정보 수집에 동의해주세요',
        },
    },
};

function SignupForm() {
    const form = useForm();

    function onSubmit(data: any) {
        console.log(data);
    }

    console.log(form.formState.errors[fieldOptions.phone.id]);

    return (
        <FormProvider {...form}>
            <form className="flex flex-col w-full" onSubmit={form.handleSubmit(onSubmit)}>
                <Input {...fieldOptions.email} />
                <Input {...fieldOptions.username} />
                <div className="flex items-center gap-[10px] w-full">
                    <Input
                        {...fieldOptions.phone}
                        className="w-full"
                        inputRightComponent={
                            <button
                                type="button"
                                onClick={() => {
                                    console.log('인증');
                                }}
                                className="ml-[10px] px-[15px] h-[50px] bg-blue1 text-white rounded w-[190px] text-[16px]"
                            >
                                인증번호 받기
                            </button>
                        }
                    />
                </div>
                <Input {...fieldOptions.phoneConfirm} />
                <Input {...fieldOptions.password} />
                <Input {...fieldOptions.passwordConfirm} />

                <p className="text-[#888] text-[13px] mt-[5px]">영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자 이하로 입력해주세요.</p>
                <div className="mt-[28px]">
                    <Input
                        {...fieldOptions.isAgree}
                        className="w-min max-h-[10px]"
                        inputRightComponent={
                            <label htmlFor={fieldOptions.isAgree.id} className="ml-[10px] cursor-pointer w-full">
                                개인정보 수집 동의
                            </label>
                        }
                    />
                </div>
                <button type="submit" onSubmit={form.handleSubmit(onSubmit)} className="bg-blue1 w-full h-[50px] rounded-full text-white mt-[30px] mb-[10px]">
                    가입하기
                </button>
            </form>
        </FormProvider>
    );
}
