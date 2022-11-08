import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const LIST = [
    { link: '/1', title: '전체' },
    { link: '/2', title: '개발' },
    { link: '/3', title: '경영・비즈니스' },
    { link: '/4', title: '마케팅・광고' },
    { link: '/5', title: '디자인' },
    { link: '/6', title: '영업' },
    { link: '/7', title: '고객서비스・리테일' },
    { link: '/8', title: '게임 제작' },
    { link: '/9', title: 'HR' },
    { link: '/10', title: '미디어' },
    { link: '/11', title: '엔지니어링・설계' },
    { link: '/12', title: '금융' },
    { link: '/13', title: '제조・생산' },
    { link: '/14', title: '물류・무역' },
    { link: '/15', title: '의료・제약・바이오' },
    { link: '/16', title: '교육' },
    { link: '/17', title: '법률・법집행기관' },
    { link: '/18', title: '식・음료' },
    { link: '/19', title: '건설・시설' },
    { link: '/20', title: '공공・복지' },
];

export default function Selector() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                className="flex items-center gap-2"
                onClick={() => {
                    setIsOpen(isOpen => !isOpen);
                }}
            >
                <span className="text-2xl font-bold text-[#333] sm:text-[16px] sm:max-w-[160px] sm:w-full sm:truncate">전체</span>
                <span
                    className={
                        'relative border rounded-full bg-[#fff] w-[26px] h-[26px] sm:min-w-[20px] sm:h-[20px] transition-all delay-0 duration-300 hover:border-[#767676]' +
                        ' ' +
                        (isOpen ? 'border-[#767676]' : 'border-[#e1e2e3]')
                    }
                >
                    <Image
                        src="/assets/selector-down-arrow.svg"
                        alt=""
                        width={12}
                        height={12}
                        className={
                            'absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] sm:w-[9px] sm:h-[9px] transition-all delay-0 duration-300' +
                            ' ' +
                            (isOpen ? 'rotate-180' : 'rotate-0')
                        }
                    />
                </span>
            </button>
            <section
                className={
                    isOpen
                        ? 'absolute max-w-[190px] top-[40px] left-0 right-0 bottom-0 overflow-auto h-[70vh] bg-[#fff] border border-[#e1e2e3] shadow-md rounded-[5px] z-50 py-[15px] sm:max-w-[160px] sm:top-[30px] sm:py-[12px] box-border'
                        : 'hidden'
                }
            >
                <ul>
                    {LIST.map(item => {
                        const { link, title } = item;
                        return (
                            <li key={link}>
                                <Link href={link} className="block text-[16px] py-[10px] px-[25px]">
                                    <span>{title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
}
