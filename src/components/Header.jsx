import logo from "../images/logo.png"

const Header = () => {
    return (
        <>
            <div className="flex justify-between text-center px-32 py-5 bg-[#FFF7E2]">
                <img src={logo} />
                <div className="flex text-lg font-medium">
                    <button className="mr-24">Home</button>
                    <button className="mr-24 font-bold text-[#3A643B]">Find Doctors</button>
                    <button className="">About Us</button>
                </div>
                <div className="flex justify-between text-lg">
                    <button className="mr-5 border-2 font-medium border-[#3A643B] w-28 rounded-lg text-lg text-[#3A643B]">Login</button>
                    <button className="border-2 w-28 font-medium rounded-lg text-lg bg-[#3A643B] text-white">Sign up</button>
                </div>
            </div>
        </>
    )
}

export default Header