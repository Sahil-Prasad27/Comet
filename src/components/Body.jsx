import React from 'react'

const Body = () => {
    return (
        <>
            <div className="border-dashed border-2 border-[#9646FE] text-center mt-20 ml-[15%] p-12 w-[70%] h-[35%] bg-black/30 text-[#FFF5D9] relative">
                <h1 className="text-6xl font-bold">Made for Creatives</h1>
                <p className="mt-4 text-xl">A discovery engine for <span className="italic border-t-0 border-l-0 border-r-0 border-b-2 border-b-[#E2C49A] border-[#FFF5D9] rounded-l-full rounded-r-full shadow-lg">
                    creatives
                </span>
                </p>
                <button className="mt-8 px-8 py-4 bg-[#FFF5D9] text-black rounded-2xl hover:bg-[#FFF] absolute  transform -translate-x-1/2 -translate-y-1/8 font-bold shadow-lg shadow-[#FFF5D9] border-2 border-purple-300">
                    Get Inspired
                </button>
            </div>



        </>

    )
}

export default Body