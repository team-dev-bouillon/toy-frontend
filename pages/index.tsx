import JobCategory from 'components/index/JobCategory';
import JobGroup from 'components/index/JobGroup';
import { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <>
            <main className="max-x-[1060px] mx-auto md:mx-auto md:w-[90%] lg:mx-auto lg:w-[90%] xl:mx-auto xl:w-[87.72%]">
                <div className="relative flex gap-6 items-center">
                    <h1>
                        <JobGroup />
                    </h1>
                    <p className="text-[28px] text-[#ececec] pb-1 leading-none font-thin">|</p>
                    <h2>
                        <JobCategory />
                    </h2>
                </div>
            </main>
        </>
    );
};

export default Home;
