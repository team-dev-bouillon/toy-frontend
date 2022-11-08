import Selector from 'components/common/selector';

export default function Home() {
    return (
        <>
            <main className="relative max-x-[1060px] mx-auto md:mx-auto md:w-[90%] lg:mx-auto lg:w-[90%] xl:mx-auto xl:w-[87.72%]">
                <div className="flex gap-6 items-center">
                    <h1>
                        <Selector />
                    </h1>
                    <p className="text-[28px] text-[#ececec] pb-1 leading-none">|</p>
                    <h2>
                        <Selector />
                    </h2>
                </div>
            </main>
        </>
    );
}
