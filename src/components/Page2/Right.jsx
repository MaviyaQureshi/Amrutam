import { FaCircleCheck } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

const Right = () => {
    return (
        <div className='w-[39rem] flex flex-col py-10 px-8 border-2 border-[#E8E8E8] rounded-xl'>
            <span className='flex justify-between w-full py-3 mb-14 border-2 border-[#E8E8E8] rounded-xl'>
                <span className='font-medium ml-8 text-lg'>Appointment Fee</span>
                <span className='font-medium text-[#3A643B] mr-8 text-lg'>₹699.00</span>
            </span>
            <span className='flex items-center justify-start w-full'>
                <span className='font-semibold text'>Select your mode of session</span>
                <hr className="h-1 ml-5 w-[55%]" />
            </span>
            <span className='flex space-x-10 my-12 ml-3'>
                <span className='flex flex-col space-y-1 items-center border-2 border-[#E8E8E8] py-3 w-44 rounded-lg'>
                    <p className='text-lg font-semibold'>In-Clinic</p>
                    <p className='text-[#606060] text-sm'>45 Mins</p>
                </span>
                <span className='flex flex-col space-y-1 items-center border-2 border-[#3A643B] bg-[#F2FBF2] border-opacity-30 py-3 w-44 rounded-lg'>
                    <p className='flex items-center space-x-3 text-lg font-semibold'>
                        <span>
                            Video
                        </span>
                        <span>
                            <FaCircleCheck className="text-[#3A643B]" />
                        </span>
                    </p>
                    <p className='text-[#606060] text-sm'>45 Mins</p>
                </span>
                <span className='flex flex-col space-y-1 items-center border-2 border-[#E8E8E8] py-3 w-44 rounded-lg'>
                    <p className='text-lg font-semibold'>Chat</p>
                    <p className='text-[#606060] text-sm'>10 Mins</p>
                </span>
            </span>
            <span className='flex items-center justify-start w-full ml-6'>
                <span className='font-semibold'>Pick a time slot</span>
                <hr className="h-1 ml-5 w-[60   %]" />
                <span className="border-2 rounded-full ml-5 p-2">
                    <CiCalendar className="text-2xl" />
                </span>
            </span>
            <span className='flex items-center space-x-5 my-8 border-2 py-6 px-5 w-full rounded-2xl'>
                <BiChevronLeftCircle className="text-[#808080] h-6 w-6" />
                <span className='flex flex-col space-y-1 items-center border-[1.5px] border-[#3A643B] bg-[#F2FBF2] py-4 w-40 rounded-lg'>
                    <p className='text-lg font-semibold text-[#3A643B]'>Mon, 10 Oct</p>
                    <p className='text-[#606060] text-sm'>10 slots</p>
                </span>
                <span className='flex flex-col space-y-1 items-center border-2 border-[#E2E2E2] py-4 w-40 rounded-lg'>
                    <p className='flex items-center space-x-3 text-lg font-semibold'>
                        Tue, 11 Oct
                    </p>
                    <p className='text-sm text-[#D5512E]'>02 slots</p>
                </span>
                <span className='flex flex-col space-y-1 items-center border-2 border-[#E2E2E2] py-4 w-40 rounded-lg'>
                    <p className='text-lg font-semibold'>Wed, 12 Oct</p>
                    <p className='text-[#F1B93A] text-sm'>10 Mins</p>
                </span>
                <BiChevronRightCircle className="text-[#808080] h-6 w-6" />
            </span>
            <span className="font-semibold mb-2">Morning</span>
            <span className="flex mt-4 space-x-6">
                <span className="flex justify-center border-2 border-[#EBEBEB] py-[20px] w-32 rounded-3xl">09:00 AM</span>
                <span className="flex justify-center border-2 border-[#EBEBEB] py-[20px] w-32 rounded-3xl">09:30 AM</span>
                <span className="flex justify-center border-2 border-[#EBEBEB] py-[20px] w-32 rounded-3xl">10:00 AM</span>
                <span className="flex justify-center border-2 border-[#EBEBEB] py-[20px] w-32 rounded-3xl">10:15 AM</span>
            </span>
            <span className="flex space-x-6 mt-4">
                <span className="flex justify-center border-2 border-[#EBEBEB] py-[20px] w-32 rounded-3xl">10:45 AM</span>
                <span className="flex justify-center bg-[#3A643B] text-white border-2 border-[#EBEBEB] py-[20px] w-32 rounded-3xl">11:00 AM</span>
            </span>
            <span className="font-semibold mb-2 mt-10">Evening</span>
            <span className="flex mt-4 space-x-6">
                <span className="flex justify-center border-2 border-[#EBEBEB] py-[20px] w-32 rounded-3xl">04:00 PM</span>
                <span className="flex justify-center border-2 border-[#EBEBEB] py-[20px] w-32 rounded-3xl">04:15 PM</span>
                <span className="flex justify-center border-2 border-[#EBEBEB] py-[20px] w-32 rounded-3xl">04:30 PM</span>
                <span className="flex justify-center border-2 border-[#EBEBEB] py-[20px] w-32 rounded-3xl">04:45 PM</span>
            </span>
            <span className="flex space-x-6 mt-4">
                <span className="flex justify-center border-2 border-[#EBEBEB] py-[20px] w-32 rounded-3xl">05:15 PM</span>
            </span>
            <span className="flex justify-center mt-12">
                <button className="bg-[#3A643B] text-white font-medium w-full py-5 rounded-xl">Make An Appointment</button>
            </span>
        </div>
    )
}

export default Right