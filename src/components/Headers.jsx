import React from 'react'

const Headers = () => {
    return (
        <>
            <nav className="mt-10">
                <div className="flex flex-col bg-[#2B2B2B] sm:flex-row items-center justify-center py-4 border border-gray-500 rounded-full mx-auto w-[90%] sm:w-[600px] text-[#A8A292] gap-4">
                    <h1 className="font-bold text-[#FFF5D9] pr-8 flex items-center">
                        <img src="/icon.png" className="w-10 h-10 mr-2" alt="icon" />
                        Comet
                    </h1>

                    <h1 className="font-semibold hidden sm:block">Manifasto</h1>
                    <h1 className="font-semibold hidden sm:block">Discover</h1>

                    <button className="ml-12 sm:ml-0 mt-4 sm:mt-0 border-r-0 border-t-0 border-l-0 border border-[#FFF5D9] rounded-l-full rounded-r-full shadow-lg shadow-[#FFF5D9] px-6 py-2 rounded-2xl text-[#FFF5D9] hover:text-black hover:bg-white">
                        LogIn
                    </button>
                    <button className="gap-4 mt-4 sm:mt-0 border border-[#FFF5D9] px-4 py-2 rounded-2xl text-[#000] bg-[#FFF5D9] font-bold">
                        SignUp
                    </button>
                </div>
            </nav>



        </>
    )
}

export default Headers