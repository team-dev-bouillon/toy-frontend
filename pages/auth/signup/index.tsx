import AuthLayout from 'components/common/authLayout';
import RHFInput, { RHFInputTypes } from 'components/common/rhfInput';
import Image from 'next/image';

import authHeaderLogo from 'public/assets/auth-header-logo.svg';
import { Path, RegisterOptions, useForm, UseFormRegister } from 'react-hook-form';

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

type TFieldValues = {
    email: string;
    username: string;
    password: string;
    passwordConfirm: string;
    phone: string;
    phoneConfirm: string;
    isAgree: false;
};

const fieldOptions = {
    email: {
        placeholder: '이메일을 입력해주세요.',
        options: {
            required: { value: true, message: '이메일을 입력해주세요' },
        },
    },
    username: {
        placeholder: '이름을 입력해주세요.',
        options: {
            required: { value: true, message: '이름을 입력해주세요' },
        },
    },
    password: {
        placeholder: '비밀번호를 입력해주세요.',
        options: {
            required: { value: true, message: '비밀번호를 입력해주세요' },
        },
    },
    passwordConfirm: {
        placeholder: '비밀번호를 다시 한번 입력해주세요.',
        options: {
            required: { value: true, message: '비밀번호를 다시 입력해주세요' },
        },
    },
    phone: {
        placeholder: '(예시)01013245768',
        options: {
            required: { value: true, message: '번호를 입력해주세요' },
        },
    },
    phoneConfirm: {
        placeholder: '인증번호를 입력해주세요',
        options: {
            required: { value: true, message: '인증번호를 입력해주세요' },
        },
    },
    isAgree: {
        placeholder: '',
        options: {
            required: true,
        },
    },
};

function SignupForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFieldValues>();

    function onSubmit(data: TFieldValues) {
        console.log(data);
    }

    return (
        <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
            <Label name="이메일" />
            <SignupInput register={register} name="email" errors={errors} />
            <Label name="이름" />
            <SignupInput register={register} name="username" errors={errors} />
            <Label name="휴대폰 번호" />
            <div className="flex items-center gap-[10px] w-full">
                <SignupInput register={register} name="phone" className="w-full" errors={errors} />
                <button
                    type="button"
                    onClick={() => {
                        console.log('인증');
                    }}
                    className="mb-[8px] px-[15px] h-[50px] bg-blue1 text-white rounded w-[190px] text-[16px]"
                >
                    인증번호 받기
                </button>
            </div>
            <SignupInput register={register} name="phoneConfirm" className="mt-[10px]" disabled={true} errors={errors} />
            <Label name="비밀번호" />
            <SignupInput register={register} name="password" errors={errors} />
            <SignupInput register={register} name="passwordConfirm" className="mt-[10px]" errors={errors} />
            <p className="text-[#888] text-[13px] mt-[5px]">영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자 이하로 입력해주세요.</p>
            <div className="flex gap-[10px] mt-[20px]">
                <input {...register('isAgree')} type="checkbox" id="check" />
                <label htmlFor="check" className="cursor-pointer">
                    개인정보 수집 동의
                </label>
            </div>
            <button type="submit" onSubmit={handleSubmit(onSubmit)} className="bg-blue1 w-full h-[50px] rounded-full text-white mt-[30px] mb-[10px]">
                가입하기
            </button>
        </form>
    );
}

function SignupInput({ register, name, className, errors, ...props }: RHFInputTypes<TFieldValues>) {
    return (
        <div className={className}>
            <RHFInput
                register={register}
                name={name}
                className="mb-[8px] w-full h-[50px] px-[12px] text-[#333] border border-[#e1e2e3] rounded placeholder:text-[#e1e2e3]"
                helperClassName="mb-[8px]"
                placeholder={fieldOptions[name].placeholder}
                options={fieldOptions[name].options}
                errors={errors}
                {...props}
            />
        </div>
    );
}

function Label({ name }: { name: string }) {
    return <span className=" inline-block text-[#888] mt-[17px] mb-[7px]">{name}</span>;
}
