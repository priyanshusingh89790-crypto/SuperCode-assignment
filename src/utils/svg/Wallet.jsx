const Wallet = () => {
  return (
    <div className="w-full h-full bg-green-200 rounded-lg flex flex-col items-center justify-center py-20 relative">
      <div className="bg-violet-200 w-[64%] h-20 absolute flex items-center justify-between top-15 rounded-t-lg z-10">
        <h1 className="text-2xl font-bold">W.</h1>
        <p className="absolute top-0 right-1/2">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--twemoji"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fill="#DD2E44"
              d="M19.281 6.392c0 .405-2.37.405-2.37 0c0-.9-14.911-9.899-14.911-2.7v13.499c0 2.487 3.476 1.947 7.193.361c-1.429 3.525-4.498 9.68-7.05 13.934a1 1 0 0 0 1.305 1.409l5.258-2.629c.441.726.931 1.868 1.376 2.906c.333.778.678 1.582 1.024 2.275A1.003 1.003 0 0 0 12 36a1 1 0 0 0 .707-.293c1.42-1.419 3.429-8.395 4.793-14.093c1.364 5.698 3.373 12.674 4.793 14.093a.998.998 0 0 0 1.601-.26c.347-.693.691-1.497 1.024-2.275c.445-1.038.935-2.181 1.376-2.906l5.258 2.629a1.002 1.002 0 0 0 1.305-1.409c-2.735-4.558-6.061-11.296-7.328-14.643C29.652 18.933 34 20.02 34 17.19V3.691c0-7.198-14.719 1.801-14.719 2.701z"
            ></path>
            <path
              fill="#A0041E"
              d="M2.114 17.869c1.177 3.199 11.468-1.787 14.86-5.179c.31-.31.549-.602.758-.885c-10.446.252-14.542 3.857-15.618 6.064zm16.482-6.068c.212.285.453.578.765.89c3.6 3.6 14.639 8.999 14.639 4.5v-.209c-1.671-2.199-6.037-5.022-15.404-5.181z"
            ></path>
            <path
              fill="#EA596E"
              d="M22 11.4a3.6 3.6 0 0 1-3.599 3.6h-1.802A3.6 3.6 0 0 1 13 11.4V7.6A3.6 3.6 0 0 1 16.599 4h1.802A3.6 3.6 0 0 1 22 7.6v3.8z"
            ></path>
          </svg>
        </p>
        <p className="bg-gray-400 rounded-full absolute bottom-0 right-5">
          <svg
            viewBox="0 0 100 100"
            className="w-15 h-15 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="50" y1="10" x2="50" y2="90" />
            <line x1="10" y1="50" x2="90" y2="50" />
            <line x1="20" y1="20" x2="80" y2="80" />
            <line x1="80" y1="20" x2="20" y2="80" />
          </svg>
        </p>
      </div>
      <div className="w-[80%] h-[150px] bg-black rounded-t-xl relative flex items-center justify-center">
        <div className="flex items-center w-[80%] rounded-t-xl h-30 bottom-0 justify-between absolute z-20 bg-amber-50">
          <h1 className="text-2xl font-bold flex flex-col gap-5">
            W.<p className="">Primary Card</p>
          </h1>
          <div className="w-20 h-12 bg-purple-300 rounded-b-full overflow-hidden absolute top-0 right-1/2">
            <div className="w-full h-full translate-y-[-30%] bg-purple-300"></div>
          </div>
          <p className="bg-amber-300/30 rounded-full">
            <svg
              viewBox="0 0 100 100"
              className="w-15 h-15 text-blue-500"
              fill="currentColor"
            >
              <path d="M50 10 L65 35 L90 50 L65 65 L50 90 L35 65 L10 50 L35 35 Z" />
            </svg>
          </p>
        </div>
      </div>
      <div className="w-[80%] h-[200px] bg-[#222121] rounded-b-xl"></div>
    </div>
  );
};
export default Wallet;
