import dr from "../../images/dr.png"
import star from "../../images/star.png"
import Frame from "../../images/Frame.png"
import scholar from "../../images/scholar.png"
import msg from "../../images/msg.png"
import { Link } from 'react-router-dom'


const Cards = () => {
    return (
        <>
            <div className="flex justify-center items-center py-20 space-x-6">
                <div className='bg-[#FFF7E2] w-[24rem] flex flex-col justify-center items-center py-10 rounded-xl shadow-lg border-2 border-gray-100'>
                    <span className="flex justify-center items-center z-1 h-2/4 w-2/4">
                        <img src={dr} className="h-full w-full" />
                    </span>
                    <div className='flex justify-center items-center space-x-1 bg-black rounded-full w-20 z-5 -mt-4 text-white'>
                        <span>
                            4.5
                        </span>
                        <span>
                            <img src={star} />
                        </span>
                    </div>
                    <p className="text-3xl font-medium tracking-wide my-3">Dr.Prerna Narang</p>
                    <div className="flex flex-col items-start space-y-2">
                        <p className="flex justify-center items-center space-x-4">
                            <span>
                                <img src={Frame} />
                            </span>
                            <span>
                                Male-Female Infertility
                            </span>
                        </p>
                        <p className="flex justify-center items-center space-x-2">
                            <span>
                                <img src={scholar} />
                            </span>
                            <span>
                                7 years of Experience
                            </span>
                        </p>
                        <p className="flex justify-center items-center space-x-3">
                            <span>
                                <img src={msg} />
                            </span>
                            <span>
                                Speaks: English, Hindi, Marathi
                            </span>
                        </p>
                    </div>
                    <div className='flex space-x-3 mt-3'>
                        <div className="flex flex-col items-center my-2 border-2 border-[#3A643B] border-opacity-35 p-2 rounded-lg">
                            <span>
                                Video Consultation
                            </span>
                            <span className="text-[#3A643B] font-medium">
                                ₹800
                            </span>
                        </div>
                        <div className="flex flex-col items-center my-2 border-2 border-[#3A643B] border-opacity-35 p-2 rounded-lg">
                            <span>
                                Chat Consultation
                            </span>
                            <span className="text-[#3A643B] font-medium">
                                Free
                            </span>
                        </div>
                    </div>
                    <Link to="/profile"> <button className="mt-3 bg-white border-2 border-[#3A643B] py-3 w-[22rem] text-[#3A643B] font-medium rounded-lg">View Profile</button> </Link>
                    <button className="mt-3 border-2 bg-[#3A643B] py-3 w-[22rem] text-white font-medium rounded-lg">Book a consultation</button>
                </div>
                <div className='bg-[#FFF7E2] w-[24rem] flex flex-col justify-center items-center py-10 rounded-xl shadow-lg border-2 border-gray-100'>
                    <span className="flex justify-center items-center z-1 h-2/4 w-2/4">
                        <img src={dr} className="h-full w-full" />
                    </span>
                    <div className='flex justify-center items-center space-x-1 bg-black rounded-full w-20 z-5 -mt-4 text-white'>
                        <span>
                            4.5
                        </span>
                        <span>
                            <img src={star} />
                        </span>
                    </div>
                    <p className="text-3xl font-medium tracking-wide my-3">Dr.Prerna Narang</p>
                    <div className="flex flex-col items-start space-y-2">
                        <p className="flex justify-center items-center space-x-4">
                            <span>
                                <img src={Frame} />
                            </span>
                            <span>
                                Male-Female Infertility
                            </span>
                        </p>
                        <p className="flex justify-center items-center space-x-2">
                            <span>
                                <img src={scholar} />
                            </span>
                            <span>
                                7 years of Experience
                            </span>
                        </p>
                        <p className="flex justify-center items-center space-x-3">
                            <span>
                                <img src={msg} />
                            </span>
                            <span>
                                Speaks: English, Hindi, Marathi
                            </span>
                        </p>
                    </div>
                    <div className='flex space-x-3 mt-3'>
                        <div className="flex flex-col items-center my-2 border-2 border-[#3A643B] border-opacity-35 p-2 rounded-lg">
                            <span>
                                Video Consultation
                            </span>
                            <span className="text-[#3A643B] font-medium">
                                ₹800
                            </span>
                        </div>
                        <div className="flex flex-col items-center my-2 border-2 border-[#3A643B] border-opacity-35 p-2 rounded-lg">
                            <span>
                                Chat Consultation
                            </span>
                            <span className="text-[#3A643B] font-medium">
                                Free
                            </span>
                        </div>
                    </div>
                    <Link to="/profile"> <button className="mt-3 bg-white border-2 border-[#3A643B] py-3 w-[22rem] text-[#3A643B] font-medium rounded-lg">View Profile</button> </Link>
                    <button className="mt-3 border-2 bg-[#3A643B] py-3 w-[22rem] text-white font-medium rounded-lg">Book a consultation</button>
                </div>
                <div className='bg-[#FFF7E2] w-[24rem] flex flex-col justify-center items-center py-10 rounded-xl shadow-lg border-2 border-gray-100'>
                    <span className="flex justify-center items-center z-1 h-2/4 w-2/4">
                        <img src={dr} className="h-full w-full" />
                    </span>
                    <div className='flex justify-center items-center space-x-1 bg-black rounded-full w-20 z-5 -mt-4 text-white'>
                        <span>
                            4.5
                        </span>
                        <span>
                            <img src={star} />
                        </span>
                    </div>
                    <p className="text-3xl font-medium tracking-wide my-3">Dr.Prerna Narang</p>
                    <div className="flex flex-col items-start space-y-2">
                        <p className="flex justify-center items-center space-x-4">
                            <span>
                                <img src={Frame} />
                            </span>
                            <span>
                                Male-Female Infertility
                            </span>
                        </p>
                        <p className="flex justify-center items-center space-x-2">
                            <span>
                                <img src={scholar} />
                            </span>
                            <span>
                                7 years of Experience
                            </span>
                        </p>
                        <p className="flex justify-center items-center space-x-3">
                            <span>
                                <img src={msg} />
                            </span>
                            <span>
                                Speaks: English, Hindi, Marathi
                            </span>
                        </p>
                    </div>
                    <div className='flex space-x-3 mt-3'>
                        <div className="flex flex-col items-center my-2 border-2 border-[#3A643B] border-opacity-35 p-2 rounded-lg">
                            <span>
                                Video Consultation
                            </span>
                            <span className="text-[#3A643B] font-medium">
                                ₹800
                            </span>
                        </div>
                        <div className="flex flex-col items-center my-2 border-2 border-[#3A643B] border-opacity-35 p-2 rounded-lg">
                            <span>
                                Chat Consultation
                            </span>
                            <span className="text-[#3A643B] font-medium">
                                Free
                            </span>
                        </div>
                    </div>
                    <Link to="/profile"> <button className="mt-3 bg-white border-2 border-[#3A643B] py-3 w-[22rem] text-[#3A643B] font-medium rounded-lg">View Profile</button> </Link>
                    <button className="mt-3 border-2 bg-[#3A643B] py-3 w-[22rem] text-white font-medium rounded-lg">Book a consultation</button>
                </div>
            </div>
        </>
    )
}

export default Cards