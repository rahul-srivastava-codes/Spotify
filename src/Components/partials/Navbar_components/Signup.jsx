import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="w-full flex">
      <div className="bg-red-400 w-[50%] h-[100vh] select-none ">
        <Link to={"/"} className="text-white px-10 py-3">
          JIOSAAVN
        </Link>
        <div className="flex flex-col items-center justify-center">
          <img
            className="object-contain w-full h-[60vh]"
            src="https://staticweb6.jiosaavn.com/web6/jioindw/dist/1755752777/_i/artist/DiljitDosanjh.png"
            alt=""
          />
          <div className="text-white text-5xl font-semibold">
            All your music
          </div>
          <div className="text-white text-2xl  mt-1 opacity-50 font-sans">
            Anytime, Anywhere
          </div>
        </div>
      </div>
      <div className="px-4 py-2 w-[50%]">
        <div className="flex items-center justify-end gap-2">
          <div className="text-xm">Already have an account?</div>
          <Link
            to={"/login"}
            className="px-3 py-1 rounded-full border-2 text-xl"
          >
            Login
          </Link>
        </div>
        <div className="center flex flex-col justify-center mt-[10vh] px-2 ml-[10vw] w-[30vw]">
          <div className="heading">
            <div className="text-4xl font-semibold">Welcome to JioSaavn</div>
            <div className="text-xs">Sign up with your mobile number</div>
          </div>
          <div className="mt-4 ">
            <form
              action=""
              className="flex flex-col gap-3 justify-start w-[25vw]"
            >
              <input
                type="text"
                placeholder="Enter your number"
                className="bg-white opacity-70 rounded-lg px-4 py-2"
              />
              <button className="px-3 py-1 bg-blue-400 text-2xl rounded-lg cursor-pointer">
                Continue
              </button>
            </form>
          </div>
          <p className="text-xs mt-4 w-[80%]">
            Select ‘Continue’ to give consent to JioSaavn’s Terms of Service and
            acknowledge that you have read and understood the Privacy Policy. An
            SMS may be sent to authenticate your account, and message and data
            rates may apply.
          </p>
          <div className="flex-col items-center justify-center mt-5">
            <div>Continue</div>
            <div className="flex gap-10 mt-2 text-white">
              <div>
                <button className="px-8 py-1 text-xl cursor-pointer rounded-full  bg-red-400">
                  Email
                </button>
              </div>
              <div>
                <button className="px-5 py-1 text-xl cursor-pointer rounded-full  bg-blue-400  ">
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
