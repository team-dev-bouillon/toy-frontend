import Layout from 'components/common/layout';
import Head from 'next/head';
import JobCategory from 'components/index/JobCategory';
import JobGroup from 'components/index/JobGroup';
import { GetServerSideProps, NextPage } from 'next';
import { JOB_GROUP_LIST } from 'utils/constants';

interface Props {
    jobGroup: string;
    category: string;
}

const JobGroupPage: NextPage<Props> = ({ jobGroup, category }) => {
    return (
        <>
            <Head>채용 정보 | 원티드</Head>
            <Layout activeMenu="jobsfeeds">
                <section className="max-w-[1060px] mx-auto pt-[40px] md:mx-auto md:w-[90%] lg:mx-auto lg:w-[90%] xl:mx-auto xl:w-[87.72%] sm:pt-[17px]">
                    <div className="relative flex gap-6 items-center">
                        <JobGroup link={`/${jobGroup}`} />
                        <p className="text-[28px] text-[#ececec] pb-1 leading-none font-thin">|</p>
                        <JobCategory link={`/${jobGroup}`} category={category} />
                    </div>
                </section>
            </Layout>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
    return {
        props: {
            jobGroup: params?.jobGroup as string,
            category: JOB_GROUP_LIST.find(item => `/${params?.jobGroup}` === item.link)?.title + ' 전체',
        },
    };
};

export default JobGroupPage;
