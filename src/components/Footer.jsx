const Footer = () => {
  return (
    <div className="w-full flex flex-col items-start justify-center border-t border-gray-500 py-15">
      <h1 className="text-2xl font-bold text-gray-200">Wallet</h1>
      <div className="w-full flex items-center justify-between">
        <ul className="flex gap-10 text-gray-200 font-bold text-lg w-full">
          <li>Wallet 2022</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Terms of Use</li>
        </ul>
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-gray-200 text-lg">Updates right to your Inbox</h1>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-zinc-700 placeholder:text-gray-400 border border-gray-600 px-4 py-2 w-[90%] rounded-lg"
            />
            <button className="bg-violet-300 px-12 rounded-lg">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
