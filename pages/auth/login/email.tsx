import pages from 'common/pages';
import AuthLayout from 'components/common/authLayout';
import RHFInput from 'components/common/rhfInput';
import Image from 'next/image';
import Link from 'next/link';

import authHeaderLogo from 'public/assets/auth-header-logo.svg';
import { Path, useForm, UseFormRegister } from 'react-hook-form';

type TFieldValues = {
    email: string;
    password: string;
};

export default function EmailLoginPage() {
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
                <LoginForm />
                <Link href={pages.signup} className="inline-block mt-[5px] mb-[15px] text-[12px] text-[#939393] border-b">
                    회원가입하기
                </Link>
            </main>
        </AuthLayout>
    );
}

type LoginInputTypes = {
    register: UseFormRegister<TFieldValues>;
    name: Path<TFieldValues>;
};

enum LoginLabel {
    email = '이메일',
    password = '비밀번호',
}

enum LoginPlaceHolder {
    email = '이메일을 입력해주세요.',
    password = '패스워드를 입력해주세요.',
}

function LoginForm() {
    const { register } = useForm<TFieldValues>();

    return (
        <form className="flex flex-col w-full">
            <LoginInput register={register} name="email" />
            <LoginInput register={register} name="password" />
            <button className="bg-blue1 w-full h-[50px] rounded-full text-white mt-[30px] mb-[10px]">이메일로 로그인하기</button>
        </form>
    );
}

function LoginInput({ register, name }: LoginInputTypes) {
    return (
        <div>
            <span className=" inline-block text-[#888] mt-[17px] mb-[7px]">{LoginLabel[name]}</span>
            <RHFInput
                register={register}
                name={name}
                className="w-full h-[50px] px-[12px] text-[#333] border border-[#e1e2e3] rounded placeholder:text-[#e1e2e3]"
                placeholder={LoginPlaceHolder[name]}
            />
        </div>
    );
}
