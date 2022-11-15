import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import useOutsideClick from 'utils/hooks/useOutsideClick';
import { JOB_GROUP_LIST } from 'utils/constants';

interface Props {
    link: string;
}

export default function JobGroup({ link }: Props) {
    const sectionRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    useOutsideClick(sectionRef, () => setIsOpen(false));

    return (
        <>
            <button
                type="button"
                className="flex items-center gap-2"
                onClick={e => {
                    e.stopPropagation();
                    setIsOpen(isOpen => !isOpen);
                }}
            >
                <span className="text-2xl font-bold text-[#333] sm:text-[16px] sm:max-w-[160px] sm:w-full sm:pl-[17px] sm:truncate">
                    {JOB_GROUP_LIST.find(item => item.link === link)?.title}
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
                    'max-w-[190px] top-[40px] left-0 right-0 bottom-0 overflow-auto h-[70vh] bg-[#fff] border border-[#e1e2e3] rounded-[5px] py-[15px] sm:max-w-[160px] sm:top-[30px] sm:py-[12px] box-border':
                        isOpen,
                    hidden: !isOpen,
                })}
            >
                <ul>
                    {JOB_GROUP_LIST.map(item => {
                        return (
                            <li key={item.link}>
                                <Link href={item.link} className="block text-[16px] py-[10px] px-[25px] hover:bg-[#f8f8f8]">
                                    <span className={clsx({ 'text-blue-500': link === item.link })}>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
}
