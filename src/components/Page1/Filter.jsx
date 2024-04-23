import { RxCross2 } from "react-icons/rx";

const Filter = () => {
    return (
        <>
            <div className='flex justify-end space-x-5 mr-56 pt-10'>
                <div className="flex justify-between text-center w-36 bg-[#EAF2EA] font-medium rounded-3xl py-3 px-5">Hair care
                    <span className="text-gray-500 text-2xl hover:cursor-pointer">
                        <RxCross2 />
                    </span>
                </div>
                <div className="flex justify-between text-center w-36 bg-[#EAF2EA] font-medium rounded-3xl py-3 px-6 ">Female
                    <span className="text-gray-500 text-2xl hover:cursor-pointer">
                        <RxCross2 />
                    </span>
                </div>
                <div className="flex justify-between text-center w-40 bg-[#EAF2EA] font-medium rounded-3xl py-3 px-4">Rs.0-Rs.500
                    <span className="text-gray-500 text-2xl hover:cursor-pointer">
                        <RxCross2 />
                    </span>
                </div>
                <div className="flex justify-between text-center w-28 bg-[#EAF2EA] font-medium rounded-3xl py-3 px-5">Hindi
                    <span className="text-gray-500 text-2xl hover:cursor-pointer">
                        <RxCross2 />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Filter