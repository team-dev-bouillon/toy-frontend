import { pages, useMoveToPage } from 'common/pages';

import Image from 'next/image';
import Link from 'next/link';

export type MenuType = 'jobsfeeds' | 'events' | 'salary' | 'resume' | 'community' | 'freelancer' | 'aiscore';

interface Props {
    active?: MenuType;
}

const menus: { title: string; link: string; menuType: MenuType }[] = [
    { title: '채용', link: '/', menuType: 'jobsfeeds' },
    { title: '이벤트', link: '/', menuType: 'events' },
    { title: '직군별 연봉', link: '/', menuType: 'salary' },
    { title: '이력서', link: '/', menuType: 'resume' },
    { title: '커뮤니티', link: '/', menuType: 'community' },
    { title: '프리랜서', link: '/', menuType: 'freelancer' },
    { title: 'AI 합격예측', link: '/', menuType: 'aiscore' },
];

const Header = ({ active }: Props) => {
    const goAuth = useMoveToPage(pages.auth);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-800 h-50px shadow-[0_1px_0_0_rgba(0,0,0,0.1)]">
                <div className="xl:mx-auto xl:h-[50px] xl:w-[87.72%] lg:mx-auto lg:h-[50px] lg:w-[90%] md:h-[110px] md:mx-auto md:w-[90%] sm:h-[110px] sm:w-full max-w-[1060px] min-w-[275px]">
                    <nav className="flex flex-wrap justify-between items-center max-w-screen-lg h-full md:items-start md:h-[110px] sm:items-start sm:h-[110px]">
                        <div className="flex md:justify-between md:w-full md:h-[60px] sm:justify-between sm:w-full sm:h-[60px] sm:px-[20px] py-[15px]">
                            <div className="flex gap-[15px]">
                                <Image src="/assets/header-hamburger.png" alt="Wanted" width={17} height={14} className="object-contain cursor-pointer"></Image>
                                <Link href="/" title="홈" className="flex items-center pb-[4px]">
                                    <Image src="/assets/header-logo.png" alt="Wanted" width={74} height={24} className="flex-1"></Image>
                                </Link>
                            </div>
                            <button
                                type="button"
                                className="hidden md:inline-block sm:inline-block text-blue-500 text-sm leading-8 h-[34px] border border-solid border-blue-500 px-[14px] rounded-[17px]"
                            >
                                회원가입하기
                            </button>
                        </div>
                        <ul className="flex items-center lg:justify-evenly text-center xl:h-[50px] lg:h-[50px] md:h-[50px] sm:h-[50px]">
                            {menus.map((menu, index) => {
                                const { title, link, menuType } = menu;
                                return (
                                    <li
                                        key={title}
                                        className={
                                            'flex h-full hover:border-b-gray-300 hover:border-b-2 first:sm:pl-[10px]' +
                                            ' ' +
                                            (active === menuType ? 'border-b-blue-500 border-b-2' : '')
                                        }
                                    >
                                        <Link
                                            href={link}
                                            className={
                                                (index <= 2 ? '' : 'sm:hidden') +
                                                ' ' +
                                                'leading-5 p-[15px] lg:py-[15px] font-semibold text-[14px] md:pt-[11px] md:px-[10px] md:pb-[15px] sm:pt-[16px] sm:pl-[10px] sm:pr-[10px] sm:pb-[15px]'
                                            }
                                        >
                                            {title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <aside>
                            <ul className="flex items-center md:h-[50px] sm:h-[50px] sm:pr-[20px]">
                                <li className="md:hidden sm:hidden">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            goAuth();
                                        }}
                                        className="h-full text-[14px] text-[#333] font-semibold sm:hidden"
                                    >
                                        회원가입/로그인
                                    </button>
                                </li>
                                <li className="inline-flex before:block before:w-px before:h-[10px] before:bg-[#e1e2e3] before:my-auto before:mx-[10px] md:hidden sm:hidden">
                                    <Link
                                        href="/dashboard"
                                        title="기업 서비스"
                                        className="text-[13px] text-[#666] border-[1px] border-[#e1e2e3] border-solid px-[10px]  rounded-[15px] h-[30px] leading-[30px] sm:hidden"
                                    >
                                        기업 서비스
                                    </Link>
                                </li>
                                <li className="hidden md:inline-flex sm:inline-flex">
                                    <button type="button">
                                        <Image src="/assets/width-three-dot.svg" alt="" width={18} height={18} />
                                    </button>
                                </li>
                            </ul>
                        </aside>
                    </nav>
                </div>
            </header>
            <div className="h-[50px] md:h-[110px] sm:h-[110px] w-full"></div>
        </>
    );
};

export default Header;
