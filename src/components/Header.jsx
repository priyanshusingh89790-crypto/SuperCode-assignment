const Header = () => {
    return (
        <div className="flex justify-between items-center w-[90%] py-8">
            <h1 className="text-3xl font-bold text-white">Wallet</h1>
            <div className="flex gap-5">
                <button className="text-white text-lg cursor-pointer">Sign Up</button>
                <button className="bg-violet-400 px-12 py-2 text-lg rounded-xl cursor-pointer">Login</button>
            </div>
        </div>
    )
}

export default Header
