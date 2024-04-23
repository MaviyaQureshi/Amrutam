import { BsArrowRightShort } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";
import location from "../../images/location.png"

const Idk = () => {
    return (
        <>
            <div className="flex justify-center bg-bubbles bg-cover pt-20 pb-10">
                <span>
                    <div className="text-4xl font-medium tracking-wider">Find Expert Doctors For An In-Clinic Session Here</div>
                    <div className="flex mt-8 text-lg">
                        <div className="flex ml-24">
                            <span className="-mr-[8.5rem] mt-4 text-2xl z-50">
                                <img src={location} />
                            </span>
                            <input placeholder="Select Location" className="w-64 px-12 py-3 border-2 rounded-lg ml-24 focus:outline-none" />
                            <span className="-ml-9 mt-4 text-2xl">
                                <HiOutlineChevronDown />
                            </span>
                        </div>
                        <div className="flex -ml-10">
                            <input placeholder="eg. Doctor, specialisation, clinic name" className="w-[32rem] pl-5 pr-12 py-3 border-2 rounded-lg ml-20 focus:outline-none" />
                            <span className="-ml-10 mt-3 text-3xl">
                                <BsArrowRightShort />
                            </span>
                        </div>
                    </div>
                </span>
            </div>
        </>
    )
}

export default Idk