import Wallet from "../utils/svg/Wallet";
const ContactQues = () => {
  return (
    <div className="w-full h-full flex justify-between items-center ">
      <div className="flex flex-col gap-10 w-full">
        <h1 className="text-6xl font-bold text-gray-200 gap-5 flex flex-col">
          Questions?<p> Let’s talk </p>
        </h1>
        <p className="text-gray-400 text-xl w-[50%]">
          Contact us through our 24/7 live chat. We’re always happy to help!
        </p>
        <button className="bg-amber-200 cursor-pointer text-black px-12 py-2 rounded-xl w-fit">
          Get Started{" "}
        </button>
      </div>
      <Wallet />
    </div>
  );
};
export default ContactQues;
