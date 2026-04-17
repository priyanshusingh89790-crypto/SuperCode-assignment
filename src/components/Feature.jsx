import { Folder_SVG, Card_SVG, Payment_SVG } from "../utils/svg/svg";
const Feature = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex flex-col items-center text-center gap-5">
        <p className="mb-5">{Card_SVG}</p>
        <p className="text-lg font-bold text-gray-200">Customizable card</p>

        <p className="text-lg text-gray-400 w-[50%]">
          Custom your own card for your exact incomes and expenses needs.
        </p>
      </div>
      <div className="flex flex-col items-center text-center gap-5">
        <p className="mb-5">{Payment_SVG}</p>
        <p className="text-lg font-bold text-gray-200">No payment fee</p>

        <p className="text-lg text-gray-400 w-[50%]">
          Transfer your payment all over the world with no payment fee.
        </p>
      </div>
      <div className="flex flex-col items-center text-center gap-5">
        <p className="mb-5">{Folder_SVG}</p>
        <p className="text-lg font-bold text-gray-200">All in one place</p>

        <p className="text-lg text-gray-400 w-[50%]">
          The right place to keep your credit and debit cards, boarding passes &
          more.{" "}
        </p>
      </div>
    </div>
  );
};
export default Feature;
