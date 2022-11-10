import { NextPage } from 'next';
import Head from 'next/head';
import Layout from 'components/common/layout';
import JobGroup from 'components/index/JobGroup';
import JobCategory from 'components/index/JobCategory';

const IndexPage: NextPage = () => {
    return (
        <>
            <Head>채용 정보 | 원티드</Head>
            <Layout activeMenu="jobsfeeds">
                <section className="max-w-[1060px] mx-auto pt-[40px] md:mx-auto md:w-[90%] lg:mx-auto lg:w-[90%] xl:mx-auto xl:w-[87.72%] sm:pt-[17px]">
                    <div className="relative flex gap-6 items-center">
                        <h1>
                            <JobGroup />
                        </h1>
                        <p className="text-[28px] text-[#ececec] pb-1 leading-none font-thin">|</p>
                        <h2>
                            <JobCategory />
                        </h2>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default IndexPage;
