import { NextPage } from 'next';
import Head from 'next/head';
import Layout from 'components/common/layout';
import Link from 'next/link';

const IndexPage: NextPage = () => {
    return (
        <>
            <Head>채용 정보 | 원티드</Head>
            <Layout activeMenu="jobsfeeds">
                <section className="max-w-[1060px] sm:pb-[20px] md:w-[90%] md:my-0 md:mx-auto md:px-0 md:pt-[20px] md:pb-[80px] lg:w-[90%] lg:my-0 lg:mx-auto lg:px-0 lg:pt-[20px] lg:pb-[80px] xl:w-[87.72%] xl:mx-auto xl:px-0 xl:pt-[20px] xl:pb-[80px] xl:relative">
                    <div>
                        <div></div>
                        <hr />
                        <div>
                            <button type="button">북마크 모아보기</button>
                        </div>
                        <div>
                            <ul className="m-[-10px] p-0">
                                <li className="w-[25%] p-[10px] inline-block align-top">
                                    <div>
                                        <Link href="/">
                                            <header className="pb-[75%] relative bg-[50%] bg-cover bg-[url('https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F16020%2Ft890tv1itspgxuon__400_400.jpg&w=400&q=75')]"></header>
                                            <div className="py-[14px]">
                                                <div className="relative text-[#333] text-[18px] font-semibold leading-[1.2] max-h-[2.4em] overflow-hidden text-left break-all">
                                                    모바일 앱 서비스 기획자
                                                </div>
                                                <div className="text-[14px] text-[#333] text-left font-semibold break-words w-full text-ellipsis whitespace-nowrap overflow-hidden mt-[10px]">
                                                    와포
                                                </div>
                                                <div className="relative">
                                                    <button type="button" className="relative">
                                                        <div className="border border-[#00aead] text-[#00aead] rounded-[2px] bg-[#fff] inline-block text-[10px] font-semibold h-[19px] leading-none mt-[4px] px-[5px]">
                                                            <span className="relative leading-[19px] top-[-1px]">응답률 매우 높음</span>
                                                        </div>
                                                        <div className="text-[#333] font-normal min-h-[40px] h-auto absolute py-[11px] px-[12px] bg-[#fff] border border-[#999] z-[1] hidden whitespace-nowrap top-[calc(100%+4px)] left-[50%]">
                                                            지원 후 응답받을 확률 95% 이상입니다.
                                                        </div>
                                                    </button>
                                                </div>
                                                <div className="font-normal text-[#999] text-[14px] text-left break-all w-full text-ellipsis whitespace-nowrap overflow-hidden mt-[10px]">
                                                    서울
                                                    <span className="mx-[3px] top-[-4px] relative">.</span>
                                                    <span>한국</span>
                                                </div>
                                                <div className="mt-[10px] text-[#333] text-[14px] font-medium text-left break-all w-full text-ellipsis whitespace-nowrap overflow-hidden">
                                                    채용보상금 1,000,000원
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default IndexPage;
