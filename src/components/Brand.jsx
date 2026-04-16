import { Accenture, Microsoft, Apple } from "../utils/svg/svg";
const Brand = () => {
  return (
    <div className="flex justify-between items-center border-t-2 border-b-2 border-gray-200 px-20 py-10 text-zinc-600">
      <p className="flex flex-col items-center text-4xl font-bold">
        {Accenture}
        accenture
      </p>
      {Apple}
      <p className="flex items-center gap-2 text-4xl font-bold">
        {" "}
        {Microsoft}
        Microsoft
      </p>
      <p className="text-4xl font-bold">Google</p>
      <p className="text-4xl font-bold">BearingPoint</p>
    </div>
  );
};
export default Brand;
