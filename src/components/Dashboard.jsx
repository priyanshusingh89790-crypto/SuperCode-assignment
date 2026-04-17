import { Settings, Bell, MessageSquare, User } from "lucide-react";
import RingChart from "../utils/RingChart";
import Wavecalenderchart from "../utils/Wavecalenderchart";
const Dashboard = () => {
  return (
    <div className="w-full bg-amber-100 rounded-2xl flex items-center justify-center pt-10">
      <div className="flex w-[70%] bg-zinc-700 rounded-t-3xl p-4 relative">
        <div className="absolute top-20 left-0 w-3 h-7 bg-red-400"></div>
        <div className="w-[20%] border-r-2 border-gray-600 items-center justify-start gap-5 flex flex-col p-4">
          <h1 className="text-gray-300 text-2xl font-semibold">Wallet</h1>
          <ul className="text-gray-300 flex flex-col gap-2 font-semibold">
            <li className="text-white font-semibold">Dashboard</li>
            <li>My goals</li>
            <li>Transactions</li>
            <li>Budget</li>
          </ul>
        </div>
        <div className="w-full">
          <div className="w-full border-gray-600 items-center justify-between flex p-4">
            <h1 className="bg-[#222121] text-gray-400 px-4 py-2 rounded-2xl w-sm">
              search activity
            </h1>
            <ul className="flex gap-2">
              <li className="bg-[#222121] text-zinc-400 p-3 rounded-full">
                <Settings />
              </li>
              <li className="bg-[#222121] text-zinc-400 p-3 rounded-full">
                <Bell />
              </li>
              <li className="bg-[#222121] text-zinc-400 p-3 rounded-full">
                <MessageSquare />
              </li>
              <li className="bg-[#222121] text-zinc-400 p-3 rounded-full">
                <User />
              </li>
            </ul>
          </div>
          <div className=" w-full flex flex-col gap-10 px-8">
            <h1 className="text-gray-300 text-2xl font-semibold">
              Hello Johnny
              <p className="text-gray-400 text-lg">
                Here's is your report overview
              </p>
            </h1>
            <div className="flex gap-5 w-full justify-between">
              <div className="bg-[#222121] text-gray-400 p-4 rounded-2xl w-full">
                <h1>My Balance</h1>
                <p className="text-gray-200 text-4xl font-semibold">$121,00</p>
              </div>
              <div className="bg-[#222121] text-gray-400 p-4 rounded-2xl w-full">
                <h1>Income</h1>
                <p className="text-gray-400 text-2xl">$64,00</p>
              </div>
              <div className="bg-[#222121] text-gray-400 p-4 rounded-2xl w-full">
                <h1>Expenses</h1>
                <p className="text-gray-400 text-2xl">-$33,00</p>
              </div>
            </div>
            <div className="flex gap-5 w-full">
              <RingChart />
              <Wavecalenderchart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
