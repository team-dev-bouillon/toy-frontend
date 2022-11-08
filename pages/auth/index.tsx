import AuthLayout from 'components/common/authLayout';
import Image from 'next/image';
import Link from 'next/link';

//svg
import authHeaderLogo from 'public/assets/auth-header-logo.svg';
import kakaoLogin from 'public/assets/login-kakao.svg';
import googleLogin from 'public/assets/login-google.svg';

export default function AuthPage() {
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
                <Link href="auth/login/email" className="w-full mt-[30px] mb-[10px]">
                    <button className="bg-blue1 w-full h-[50px] rounded-full text-white ">이메일로 로그인하기</button>
                </Link>
                <span className="inline-block mt-[5px] mb-[15px] text-[12px] text-[#939393]">또는</span>
                <div className="flex w-full justify-between">
                    <SocialLogin name={socialLogins.kakao} />
                    <SocialLogin name={socialLogins.google} />
                    <SocialLogin name={socialLogins.google} />
                    <SocialLogin name={socialLogins.google} />
                </div>
                <hr className="w-full border-t border-[#e1e2e3] my-[40px]" />
                <div className="flex justify-center gap-[10px]">
                    <button className="text-[13px] text-[#767676] font-regular">이용약관</button>
                    <button className="text-[13px] text-[#767676] font-regular">이용약관</button>
                </div>
                <span className="mb-[30px] mt-[12px] text-[#888] text-[12px]">© Wantedlab, Inc.</span>
                <div className="relative w-[140px] h-[34px]">
                    <Image
                        src={require('public/assets/flag-kr.svg')}
                        alt="한국어"
                        width={23}
                        height={16}
                        className="absolute left-[15px] top-[50%] translate-y-[-50%]"
                    />
                    <select className="border rounded w-full h-[34px] pl-[40px] text-[13px] appearance-none">
                        <option>한국어</option>
                    </select>
                    <button className="absolute top-[50%] translate-y-[-50%] right-[20px]">
                        <Image src={require('public/assets/arrow-bottom.svg')} alt="언어설정" />
                    </button>
                </div>
            </main>
        </AuthLayout>
    );
}

enum socialLogins {
    kakao = 'kakao',
    google = 'google',
}

function SocialLogin({ name }: { name: socialLogins }) {
    return (
        <button className="flex flex-col w-full justify-center items-center">
            <Image src={getSocialSrc(name)} alt={getSocialAlt(name)} />
            <span className="text-[11px] text-[#888] mt-[8px]">{name}</span>
        </button>
    );
}

function getSocialSrc(name: socialLogins) {
    switch (name) {
        case socialLogins.kakao:
            return kakaoLogin;
        case socialLogins.google:
            return googleLogin;
        default:
            return kakaoLogin;
    }
}

function getSocialAlt(name: socialLogins) {
    switch (name) {
        case socialLogins.kakao:
            return '카카오로그인';
        case socialLogins.google:
            return '구글로그인';
        default:
            return '카카오로그인';
    }
}
