import { FaPlus } from "react-icons/fa6";
import facebook from "../../images/facebook.png"
import insta from "../../images/insta.png"
import twitter from "../../images/twitter.png"
import yt from "../../images/yt.png"
import women from "../../images/women.png"
import hair from "../../images/hair.png"
import Immunity from "../../images/Immunity.png"
import skin from "../../images/Skincare.png"
import house from "../../images/house.png"
import review from "../../images/review.png"
import icon from "../../images/icon.png"


const Left = () => {
    return (
        <>
            <div className="flex flex-col justify-center w-[43rem]">
                <div className="border-2 border-[#DCDCDC] rounded-xl">
                    <span className="flex justify-center space-x-[21rem] h-16 py-4 mb-10 rounded-t-xl bg-gradient-to-r from-[#F4F7EC] to-[#FCFCFC] ">
                        <span className="text-2xl font-medium text-[#313131]">A Little About me</span>
                        <span className="">
                            <button className="flex justify-center items-center border-[1.5px] w-24 py-1 border-[#3A643B] rounded-lg text-[#585858]">
                                <span className="pl-2 font-medium">
                                    Follow
                                </span>
                                <span className="pl-2">
                                    <FaPlus />
                                </span>
                            </button>
                        </span>
                    </span>
                    <span className="flex text-md text-[#333548] text-opacity-50 w-5/6 ml-10 font-medium">
                        Hello I am Dr.Prerna Narang a Gynaecologist in Sanjivni Hospital Surat.love to work with all my hospital staff and seniour doctors.Completed my graduation in Gynaecologist Medicine from the
                    </span>
                    <span className="flex items-center my-6">
                        <hr className="h-1 w-[68%] ml-10 mr-4" />
                        <u className="font-medium">Read More</u>
                    </span>
                    <span className="flex items-center ml-10 space-x-7 mt-10">
                        <span className="font-medium">
                            Languages Spoken
                        </span>
                        <span className="flex items-center justify-center space-x-7">
                            <span className="bg-[#2E37A4] bg-opacity-5 text-[#505050] py-2 w-20 text-sm px-4 rounded-xl">English</span>
                            <span className="bg-[#2E37A4] bg-opacity-5 text-[#505050] py-2 w-20 text-sm px-5 rounded-xl">Hindi</span>
                            <span className="bg-[#2E37A4] bg-opacity-5 text-[#505050] py-2 w-20 text-sm px-3 rounded-xl">Marathi</span>
                        </span>
                    </span>
                    <span className="flex space-x-6 ml-9 my-10">
                        <img src={facebook} />
                        <img src={insta} />
                        <img src={yt} />
                        <img src={twitter} />
                    </span>
                </div>
                <div className="border-2 border-[#DCDCDC] rounded-xl mt-10">
                    <span className="flex pl-8 h-16 py-4 mb-10 rounded-t-xl bg-gradient-to-r from-[#F4F7EC] to-[#FCFCFC]">
                        <span className="text-2xl font-medium text-[#313131]">I Specialize In</span>
                    </span>
                    <span className="flex ml-9 my-10">
                        <span className="flex flex-row space-x-8">
                            <span className="flex flex-col justify-center items-center">
                                <span className="bg-[#FFFCF2] border-2 border-[#E0E8E2] rounded-lg">
                                    <img src={women} className="border-3 border-white rounded-full p-3" />
                                </span>
                                <p className="font-medium text-lg pt-3">Women's Health</p>

                            </span>
                            <span className="flex flex-col justify-center items-center">
                                <span className="bg-[#FFFCF2] border-2 border-[#E0E8E2] rounded-lg">
                                    <img src={skin} className="border-3 border-white rounded-full p-3" />
                                </span>
                                <p className="font-medium text-lg pt-3">Skin Care</p>

                            </span>
                            <span className="flex flex-col justify-center items-center">
                                <span className="bg-[#FFFCF2] border-2 border-[#E0E8E2] rounded-lg">
                                    <img src={Immunity} className="border-3 border-white rounded-full p-3" />
                                </span>
                                <p className="font-medium text-lg pt-3">Immunity</p>

                            </span>
                            <span className="flex flex-col justify-center items-center">
                                <span className="bg-[#FFFCF2] border-2 border-[#E0E8E2] rounded-lg">
                                    <img src={hair} className="border-3 border-white rounded-full p-3" />
                                </span>
                                <p className="font-medium text-lg pt-3">Hair Care</p>
                            </span>
                        </span>
                    </span>
                </div>
                <div className="border-2 border-[#DCDCDC] rounded-xl my-10">
                    <span className="flex pl-8 h-16 py-4 mb-10 rounded-t-xl bg-gradient-to-r from-[#F4F7EC] to-[#FCFCFC]">
                        <span className="text-2xl font-medium text-[#313131]">The Concerns I Treat</span>
                    </span>
                    <span className="flex flex-col ml-9 space-y-5 mb-10">
                        <span className="flex space-x-5">
                            <span className="bg-[#F7F7FC] font-medium text-[#3A643B] px-4 py-2 w-40 rounded-2xl">Skin Treatment</span>
                            <span className="bg-[#F7F7FC] font-medium text-[#3A643B] px-3 py-2 w-28 rounded-2xl">Pregnancy</span>
                            <span className="bg-[#F7F7FC] font-medium text-[#3A643B] px-5 py-2 w-40 rounded-2xl">Period Doubts</span>
                            <span className="bg-[#F7F7FC] font-medium text-[#3A643B] px-4 py-2 w-36 rounded-2xl">Endometriosis</span>
                        </span>
                        <span className="flex space-x-5">
                            <span className="bg-[#F7F7FC] font-medium text-[#3A643B] px-5 py-2 w-32 rounded-2xl">Pelvic Pain</span>
                            <span className="bg-[#F7F7FC] font-medium text-[#3A643B] px-5 py-2 w-40 rounded-2xl">Ovarian Cysts</span>
                            <span className="flex items-center justify-center py-2 w-32 border-2 border-[#E0DFDF] rounded-2xl">
                                <span className="font-medium text-[#3A643B]"> <FaPlus className="h-3" /> </span>
                                <span className=" font-medium text-[#3A643B]">
                                    5 More
                                </span>
                            </span>
                        </span>
                    </span>
                </div>
                <div className="border-2 border-[#DCDCDC] rounded-xl mb-10">
                    <span className="flex pl-8 h-16 py-4 mb-10 rounded-t-xl bg-gradient-to-r from-[#F4F7EC] to-[#FCFCFC] ">
                        <span className="text-2xl font-medium text-[#313131]">My Work Experience</span>
                    </span>
                    <span className="flex font-medium text-[#3A643B] mb-5 ml-9 text-lg">
                        I HAVE BEEN IN PRACTICE FOR: 7+ YEARS
                    </span>
                    <hr className="w-3/4 ml-8" />
                    <span className="flex flex-col mt-5">
                        <span className="flex justify-between mx-4">
                            <span className="flex ml-5">
                                <img src={house} />
                                <span className="flex flex-col space-y-2 ml-3 font-medium">
                                    <p>Midtown Medical Clinic</p>
                                    <p className="text-[#333548] text-opacity-50">Senior doctor</p>
                                </span>
                            </span>
                            <p className="text-[#333548] text-opacity-70 mr-20 font-medium">2016-PRESENT</p>
                        </span>
                        <span className="flex justify-between mx-4 my-8">
                            <span className="flex ml-5">
                                <img src={house} />
                                <span className="flex flex-col space-y-2 ml-3 font-medium">
                                    <p>Midtown Medical Clinic</p>
                                    <p className="text-[#333548] text-opacity-50">Senior doctor</p>
                                </span>
                            </span>
                            <p className="text-[#333548] text-opacity-70 mr-28 font-medium">2010-2015</p>
                        </span>
                    </span>
                </div>
                <div className="border-2 border-[#DCDCDC] rounded-xl mb-10">
                    <span className="flex pl-8 h-16 py-4 mb-10 rounded-t-xl bg-gradient-to-r from-[#F4F7EC] to-[#FCFCFC] ">
                        <span className="text-2xl font-medium text-[#313131]">Featured Reviews(102) </span>
                    </span>
                    <span className="flex flex-col mt-5 ml-10">
                        <span className="flex justify-between mx-4">
                            <span className="flex">
                                <img src={review} />
                                <span className="flex flex-col space-y-2 ml-3 font-medium">
                                    <p>Alicent Hightower</p>
                                    <p className="text-[#333548] text-opacity-50">Consulted for Skin care</p>
                                </span>
                            </span>
                            <p className="text-[#333548] text-opacity-70 mr-20 font-medium">20 January 2023</p>
                        </span>
                        <span className="flex mt-4 ml-4">
                            <img src={icon} />
                            <img src={icon} />
                            <img src={icon} />
                            <img src={icon} />
                            <img src={icon} />
                        </span>
                        <span className="text-sm w-5/6 mt-2 ml-4 leading-6">
                            Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods
                        </span>
                    </span>
                    <span className="flex flex-col my-14 ml-10">
                        <span className="flex justify-between mx-4">
                            <span className="flex">
                                <img src={review} />
                                <span className="flex flex-col space-y-2 ml-3 font-medium">
                                    <p>Alicent Hightower</p>
                                    <p className="text-[#333548] text-opacity-50">Consulted for Pregnancy</p>
                                </span>
                            </span>
                            <p className="text-[#333548] text-opacity-70 mr-20 font-medium">20 January 2023</p>
                        </span>
                        <span className="flex mt-4 ml-4">
                            <img src={icon} />
                            <img src={icon} />
                            <img src={icon} />
                            <img src={icon} />
                            <img src={icon} />
                        </span>
                        <span className="text-sm w-5/6 mt-2 ml-4 leading-6">
                            Might be bit early to confirm but yes I can see noticeable difference. will write again after using it for longer periods
                        </span>
                    </span>
                </div>
            </div >
        </>
    )
}

export default Left