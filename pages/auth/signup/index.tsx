import AuthLayout from 'components/common/authLayout';
import RHFInput from 'components/common/rhfInput';
import Image from 'next/image';

import authHeaderLogo from 'public/assets/auth-header-logo.svg';
import { Path, useForm, UseFormRegister } from 'react-hook-form';

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

type SignupInputTypes = {
    register: UseFormRegister<TFieldValues>;
    name: Path<TFieldValues>;
    className?: string;
};

type TFieldValues = {
    email: string;
    username: string;
    password: string;
    passwordConfirm: string;
    phone: string;
    phoneConfirm: string;
    isAgree: false;
};

const SignupPlaceHolder = {
    email: '이메일을 입력해주세요.',
    username: '이름을 입력해주세요.',
    password: '비밀번호를 입력해주세요.',
    passwordConfirm: '비밀번호를 다시 한번 입력해주세요.',
    phone: '(예시)01013245768',
    phoneConfirm: '인증번호를 입력해주세요',
    isAgree: '',
};

function SignupForm() {
    const { register } = useForm<TFieldValues>();

    return (
        <form className="flex flex-col w-full">
            <Label name="이메일" />
            <SignupInput register={register} name="email" />
            <Label name="이름" />
            <SignupInput register={register} name="username" />
            <Label name="휴대폰 번호" />
            <div className="flex items-center gap-[10px] w-full">
                <SignupInput register={register} name="phone" className="w-full" />
                <button className="px-[15px] h-[50px] bg-blue1 text-white rounded w-[190px] text-[16px]">인증번호 받기</button>
            </div>
            <SignupInput register={register} name="phoneConfirm" className="mt-[10px]" />
            <Label name="비밀번호" />
            <SignupInput register={register} name="password" />
            <SignupInput register={register} name="passwordConfirm" className="mt-[10px]" />
            <p className="text-[#888] text-[13px] mt-[5px]">영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자 이하로 입력해주세요.</p>
            <div className="flex gap-[10px] mt-[20px]">
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="cursor-pointer">
                    개인정보 수집 동의
                </label>
            </div>
            <button className="bg-blue1 w-full h-[50px] rounded-full text-white mt-[30px] mb-[10px]">가입하기</button>
        </form>
    );
}

function SignupInput({ register, name, className }: SignupInputTypes) {
    return (
        <div className={className}>
            <RHFInput
                register={register}
                name={name}
                className="w-full h-[50px] px-[12px] text-[#333] border border-[#e1e2e3] rounded placeholder:text-[#e1e2e3]"
                placeholder={SignupPlaceHolder[name]}
            />
        </div>
    );
}

function Label({ name }: { name: string }) {
    return <span className=" inline-block text-[#888] mt-[17px] mb-[7px]">{name}</span>;
}
