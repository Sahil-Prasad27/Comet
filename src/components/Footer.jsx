import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <div className="flex items-start justify-start bg-transparent border border-gray-500 w-[13%] rounded-2xl p-2 ml-6 mt-[120px]">
                    <div className="text-[#FFF5D9] text-md font-bold mx-4">Dark</div>
                    <div className="text-[#FFF5D9] text-md font-bold mx-4 border-r-0 border-t-0 border-l-0 border border-[#FFF5D9] rounded-l-full rounded-r-full shadow-lg pb-1 ">Light</div>
                </div>
                <div className="flex mt-[110px]">
                    <div className="text-[#FFF5D9] text-md font-bold mx-4">Marketplace</div>
                    <div className="text-[#FFF5D9] text-md font-bold mx-4  ">Create your site</div>
                </div>

            </div>
        </>
    )
}

export default Footer