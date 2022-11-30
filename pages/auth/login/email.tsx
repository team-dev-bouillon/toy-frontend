import { pages } from 'common/pages';
import AuthLayout from 'components/common/authLayout';

import Input, { InputProps } from 'components/common/Input';
import Image from 'next/image';
import Link from 'next/link';

import authHeaderLogo from 'public/assets/auth-header-logo.svg';
import { FormProvider, useForm } from 'react-hook-form';

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

enum FieldNames {
    //form에서 사용할 column들을 등록합니다.
    email = 'email',
    password = 'password',
}

const fieldOptions: { [key in FieldNames]: InputProps } = {
    //각 input에 들어갈 props들을 정의합니다.
    email: {
        id: 'email',
        label: '이메일',
        validation: {
            required: '입력하세요!',
        },
    },
    password: {
        id: 'password',
        label: '패스워드',
        validation: {
            required: '입력하세요!',
        },
    },
};

function LoginForm() {
    const form = useForm();

    function onSubmit(foo: any) {
        console.log(foo);
    }

    return (
        <FormProvider {...form}>
            <form className="flex flex-col w-full" onSubmit={form.handleSubmit(onSubmit)}>
                <Input {...fieldOptions.email} />
                <Input {...fieldOptions.password} />
                <button className="bg-blue1 w-full h-[50px] rounded-full text-white mt-[30px] mb-[10px]">이메일로 로그인하기</button>
            </form>
        </FormProvider>
    );
}
