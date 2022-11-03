import Image from 'next/image';
import Link from 'next/link';

interface Props {}

const Header = ({}: Props) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-800 h-50px shadow-[0_1px_0_0_rgba(0,0,0,0.1)]">
            <nav className="flex justify-between items-center max-w-screen-lg min-w-[400px] h-[50px] my-0 mx-auto">
                <div className="flex gap-[15px]">
                    <Image src="/assets/header-hamburger.png" alt="Wanted" width={17} height={14} className="object-contain"></Image>
                    <Link href="/" title="홈" className="flex items-center pb-[4px]">
                        <Image src="/assets/header-logo.png" alt="Wanted" width={74} height={24} className="flex-1"></Image>
                    </Link>
                    <ul className="text-center h-full">
                        <li>
                            <Link href="#" className="text-sm mx-[20px] h-[30px] leading-[30px] font-semibold text-[14px] inline-block">
                                채용
                            </Link>
                        </li>
                    </ul>
                </div>
                <aside>
                    <ul className="flex">
                        <li>
                            <button type="button" className="h-full text-[14px] text-[#333] font-semibold">
                                회원가입/로그인
                            </button>
                        </li>
                        <li className="inline-flex before:content-[''] before:block before:w-px before:h-[10px] before:bg-[#e1e2e3] before:my-auto before:mx-[10px]">
                            <Link
                                href="/dashboard"
                                title="기업 서비스"
                                className="text-[13px] text-[#666] border-[1px] border-[#e1e2e3] border-solid px-[10px]  rounded-[15px] h-[30px] leading-[30px]"
                            >
                                기업 서비스
                            </Link>
                        </li>
                    </ul>
                </aside>
            </nav>
        </header>
    );
};

export default Header;
