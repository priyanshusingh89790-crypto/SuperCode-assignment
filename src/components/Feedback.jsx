import { User } from "lucide-react";
import { STAR_SVG } from "../utils/svg/svg";
const Feedback = () => {
  return (
    <div className="w-full bg-violet-400 rounded-lg px-40 gap-10 py-20 items-start justify-center flex flex-col">
      <h1 className="text-[#222121] text-2xl font-bold">
        “Wallet is a great product! All of my most important information is
        there - credit cards, transit cards, boarding passes, tickets, and more.
        And I don't need to worry because it's all in one place! thanks!”
      </h1>
      <div className="flex items-center justify-center gap-2">
        <h1 className="text-white rounded-full bg-[#222121] p-4">
          <User size={50} />
        </h1>
        <div className=" text-2xl text-gray-600 gap-2">
          Jhonny Owens
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="">
                {STAR_SVG}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
