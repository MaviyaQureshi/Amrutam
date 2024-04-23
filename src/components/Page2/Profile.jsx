import bg2 from "../../images/bg2.png"
import dr from "../../images/dr.png"
import verified from "../../images/verified.png"
import icon from "../../images/icon.png"

const Profile = () => {
    return (
        <>
            <div className="flex justify-center pt-14 z-1">
                <img src={bg2} className="w-10/12" />
            </div>
            <div className="flex justify-center space-x-14 z-2 -mt-52">
                <span className="flex">
                    <img src={dr} className="border-2 border-[#D8D8D8] rounded-full" />

                    <span className="flex flex-col mt-14 ml-5">
                        <span className="flex justify-center items-center">
                            <p className="text-3xl font-medium">Dr.Prerna Narang</p>
                            <img src={verified} className="ml-2 w-8 mt-1" />
                        </span>
                        <p className="text-lg font-medium text-[#3A643B] mt-1">Gynecologist</p>
                        <span className="flex space-x-2 mt-1">
                            <span className="text-[#626262]">4.2</span>
                            <span className="flex">
                                <img src={icon} />
                                <img src={icon} />
                                <img src={icon} />
                                <img src={icon} />
                            </span>
                        </span>
                    </span>
                </span>


                <span className="flex mt-20 space-x-28">
                    <span className="flex flex-col items-center font-medium">
                        <span className="text-[#3A643B] text-xl">
                            Followers
                        </span>
                        <span className="font-semibold text-lg">
                            850
                        </span>
                    </span>
                    <span className="flex flex-col items-center font-medium">
                        <span className="text-[#3A643B] text-xl">
                            Following
                        </span>
                        <span className="font-semibold text-lg">
                            18K
                        </span>
                    </span>
                    <span className="flex flex-col items-center font-medium">
                        <span className="text-[#3A643B] text-xl">
                            Posts
                        </span>
                        <span className="font-semibold text-lg">
                            250
                        </span>
                    </span>
                </span>

                <span className="mt-20">
                    <button className="text-white bg-[#3A643B] py-4 w-72 rounded-lg text-xl">Book an Appointment</button>
                </span>

            </div>
        </>
    )
}

export default Profile