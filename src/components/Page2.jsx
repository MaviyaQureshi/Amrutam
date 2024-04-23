import Profile from "./Page2/Profile"
import Left from "./Page2/Left"
import Right from "./Page2/Right"

const Page2 = () => {
  return (
    <>
      <div>
        <Profile />
        <div className="flex flex-row my-24 justify-center space-x-5">
          <span>
            <Left />
          </span>
          <span>
            <Right />
          </span>
        </div>
      </div>
    </>
  )
}

export default Page2