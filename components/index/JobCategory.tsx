import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import { IoIosRefresh } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';
import useOutsideClick from 'hooks/useOutsideClick';

const LIST = [
    { id: '1', title: '개발 전체' },
    { id: '2', title: '웹 개발자' },
    { id: '3', title: '서버 개발자' },
    { id: '4', title: '소프트웨어 엔지니어' },
    { id: '5', title: '프론트엔드 개발자' },
    { id: '6', title: '자바 개발자' },
    { id: '7', title: '안드로이드 개발자' },
    { id: '8', title: 'C,C++ 개발자' },
    { id: '9', title: '데이터 엔지니어' },
    { id: '10', title: 'Node.js 개발자' },
    { id: '11', title: 'iOS 개발자' },
    { id: '12', title: '파이썬 개발자' },
    { id: '13', title: 'DevOps / 시스템 관리자' },
    { id: '14', title: '시스템,네트워크 관리자' },
    { id: '15', title: '머신러닝 엔지니어' },
    { id: '16', title: '개발 매니저' },
    { id: '17', title: '기술지원' },
    { id: '18', title: '빅테이터 엔지니어' },
    { id: '19', title: 'QA,테스트 엔지니어' },
    { id: '20', title: '데이터 사이언티스트' },
    { id: '21', title: '보안 엔지니어' },
    { id: '22', title: '프로덕트 매니저' },
    { id: '23', title: '블록체인 플랫폼 엔지니어' },
    { id: '24', title: '임베디드 개발자' },
    { id: '25', title: 'PHP 개발자' },
    { id: '26', title: '하드웨어 엔지니어' },
    { id: '27', title: '.NET 개발자' },
    { id: '28', title: '웹 퍼블리셔' },
    { id: '29', title: 'DBA' },
    { id: '30', title: '크로스플랫폼 앱 개발자' },
    { id: '31', title: '영상,음성 엔지니어' },
    { id: '32', title: '그래픽스 엔지니어' },
    { id: '33', title: 'ERP전문가' },
    { id: '34', title: 'CTO,Chief Technolohhy Officer' },
    { id: '35', title: 'VR 엔지니어' },
    { id: '36', title: 'BI 엔지니어' },
    { id: '37', title: '루비온레일즈 개발자' },
    { id: '38', title: 'CIO,Chief Information Officer' },
];

export default function JobCategory() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = useState(false);

    useOutsideClick(sectionRef, () => {
        setIsOpen(false);
    });

    return (
        <>
            <button
                type="button"
                className="flex items-center gap-2"
                onMouseDown={e => {
                    e.stopPropagation();
                    setIsOpen(isOpen => !isOpen);
                }}
            >
                <span className="truncate text-2xl font-normal text-[#333] sm:text-[13px] sm:font-bold sm:max-w-[160px] sm:w-full sm:truncate">
                    서버 개발자
                </span>
                <span
                    className={clsx(
                        'relative border rounded-full bg-[#fff] w-[26px] h-[26px] sm:min-w-[20px] sm:h-[20px] transition-all delay-0 duration-300 hover:border-[#767676]',
                        { 'border-[#767676]': isOpen, 'border-[#e1e2e3]': !isOpen }
                    )}
                >
                    <Image
                        src="/assets/selector-down-arrow.svg"
                        alt=""
                        width={12}
                        height={12}
                        className={clsx(
                            'absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] sm:w-[9px] sm:h-[9px] transition-all delay-0 duration-300',
                            { 'rotate-180': isOpen, 'rotate-0': !isOpen }
                        )}
                    />
                </span>
            </button>
            <section
                ref={sectionRef}
                className={clsx('absolute shadow-md z-50', {
                    'max-w-[910px] w-[calc(100%-140px)] top-[40px] left-0 right-0 bottom-0 overflow-auto h-fit bg-[#fff] border border-[#e1e2e3] rounded-[5px] box-border sm:fixed sm:top-0 sm:left-0 sm:w-screen sm:h-screen sm:z-[100] sm:rounded-none':
                        isOpen,
                    hidden: !isOpen,
                })}
            >
                <header className="hidden sm:relative sm:flex justify-between items-center border-b border-[#ececec] p-[20px]">
                    <button type="button" className="flex items-center gap-1 text-[14px] text-[#999] font-normal">
                        <IoIosRefresh />
                        <span>초기화</span>
                    </button>
                    <button type="button" className="text-[#999]">
                        <IoMdClose className="scale-125" />
                    </button>
                </header>
                <div className="hidden absolute top-[20px] left-[calc(50%-25px)] mx-auto sm:flex sm:items-center sm:gap-[2px]">
                    <p className="text-[15px] font-bold leading">직무</p>
                    <span className="text-center bg-[#36f] rounded-[10px] text-[#fff] inline-block text-[12px] font-bold w-[20px] h-[20px] leading-[20px]">
                        1
                    </span>
                </div>
                <div className="max-w-[910px] pt-[25px] px-[25px] pb-[8px] sm:h-[calc(100vh-152px)] sm:overflow-x-auto">
                    <p className="font-normal text-[12px] text-[#666] mb-[10px]">직무를 선택해주세요.(최대 5개 선택 가능)</p>
                    <div className="flex flex-wrap">
                        {LIST.map(item => {
                            const { id, title } = item;
                            return (
                                <button
                                    key={id}
                                    type="button"
                                    className="h-8 mr-[10px] mb-[12px] border border-[#f2f4f7] bg-[#f2f4f7] rounded-[20px] py-2 px-[14px] text-[13px] font-normal text-[#333] leading-none hover:border-[#3366ff] hover:border-opacity-30"
                                >
                                    <span>{title}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className="p-4 text-right border-t border-[#ececec] sm:fixed sm:left-0 sm:right-0 sm:bottom-0 sm:w-full sm:h-[90px] sm:p-[20px] sm:text-center">
                    <button
                        type="button"
                        className="w-[160px] h-[40px] text-[15px] text-[#fff] bg-[#36f] border-none rounded-[25px] sm:w-full sm:h-[50px] sm:text-[16px] sm:font-bold"
                    >
                        선택 완료하기
                    </button>
                </div>
            </section>
        </>
    );
}
