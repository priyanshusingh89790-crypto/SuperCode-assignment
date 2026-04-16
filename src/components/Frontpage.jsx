import RingChart from "../utils/circlechart";
import WaveCalenderChart from "../utils/Wavecalenderchart";
import AreaChart from "../utils/Areachart";
const Frontpage = () => {
    return (
        <div className="w-full flex gap-10">
            <div className="flex flex-col gap-15 w-full py-20">
                <h1 className="text-white text-6xl font-bold">SaaS Landing Page Template</h1>
                <p className="text-zinc-400 text-xl ">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                <button className="bg-amber-200 px-12 py-2 text-lg mt-20 rounded-xl cursor-pointer w-fit">Get Started</button>
            </div>
            <div className="w-full bg-zinc-900 p-10 rounded-xl flex flex-col gap-10">
                <div className="flex gap-10 w-full">
                    <RingChart />
                    <WaveCalenderChart />
                </div>
            
                <AreaChart />
            </div>
        </div>
    )
}

export default Frontpage
