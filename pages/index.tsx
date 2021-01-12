import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [register, setRegister] = useState(false);
  return (
    <div className="flex bg-gray-800 justify-center items-center h-screen">
      <main className="bg-gray-100 max-w-7xl w-5/6 h-200 flex rounded-lg">
        <div className="w-6/12">
          <img
            src="/img/img.png"
            alt=""
            className="rounded-tl-lg rounded-bl-lg"
          />
        </div>
        <div className="flex justify-center items-center w-6/12">
          {!register && (
            <div>
              <p className="text-base leading-5 text-gray-800">Welcome back</p>
              <h3 className="text-3xl leading-8 text-gray-900 font-bold">
                Login to your account
              </h3>

              <form className="mt-6">
                <fieldset className="mb-3">
                  <legend className="text-base leading-5 mb-3 text-gray-700">
                    Email
                  </legend>
                  <input
                    className="border-solid border-gray-300 border w-full h-12 rounded-md p-2"
                    type="email"
                    name="emai"
                    id="email"
                  />
                </fieldset>

                <fieldset>
                  <legend className="text-base leading-5 mb-3 text-gray-700">
                    Password
                  </legend>
                  <input
                    className="border-solid border-gray-300 border w-full h-12 rounded-md p-2"
                    type="password"
                    name="password"
                    id="password"
                  />
                </fieldset>

                <div className="flex justify-between mt-7">
                  <fieldset className="flex gap-2 items-center">
                    <input type="radio" name="remember" id="remember" />
                    <span className="text-sm leading-4 ">Remember me</span>
                  </fieldset>

                  <Link href="/">
                    <a className="text-sm leading-4 text-blue-800">
                      Forgot password?
                    </a>
                  </Link>
                </div>

                <button className="text-base leading-5 font-bold text-white bg-green-btn w-full h-12 rounded mt-7">
                  Login now
                </button>
                <button className=" flex justify-center gap-1 items-center text-base leading-5 font-bold text-white bg-gray-800 w-full h-12 rounded mt-4">
                  <Image src="/img/google.svg" width={20} height={20} /> Or
                  sign-in with google
                </button>
              </form>

              <p className="text-base leading-5 mt-8">
                Dont have an account?{" "}
                <a
                  onClick={() => setRegister(true)}
                  className="text-base leading-5 text-blue-800 cursor-pointer"
                >
                  Join free today
                </a>
              </p>
            </div>
          )}
          {register && (
            <div className="p-3">
              <p className="text-base leading-5 text-gray-800">Welcome</p>
              <h3 className="text-3xl leading-8 text-gray-900 font-bold">
                Register Now
              </h3>

              <form className="mt-6 mb-3">
                <div className="flex gap-2">
                  <fieldset className="mb-3">
                    <legend className="text-base leading-5 mb-3 text-gray-700">
                      First Name
                    </legend>
                    <input
                      className="border-solid border-gray-300 border w-full h-12 rounded-md p-2"
                      type="text"
                      name="f-name"
                      id="f-name"
                    />
                  </fieldset>
                  <fieldset className="mb-3">
                    <legend className="text-base leading-5 mb-3 text-gray-700">
                      Last Name
                    </legend>
                    <input
                      className="border-solid border-gray-300 border w-full h-12 rounded-md p-2"
                      type="l-name"
                      name="l-name"
                      id="l-name"
                    />
                  </fieldset>
                </div>
                <fieldset className="mb-3">
                  <legend className="text-base leading-5 mb-3 text-gray-700">
                    Email
                  </legend>
                  <input
                    className="border-solid border-gray-300 border w-full h-12 rounded-md p-2"
                    type="email"
                    name="email"
                    id="email"
                  />
                </fieldset>

                <fieldset className="mb-3">
                  <legend className="text-base leading-5 mb-3 text-gray-700">
                    Password
                  </legend>
                  <input
                    className="border-solid border-gray-300 border w-full h-12 rounded-md p-2"
                    type="password"
                    name="password"
                    id="password"
                  />
                </fieldset>
                <fieldset>
                  <legend className="text-base leading-5 mb-3 text-gray-700">
                    Confirm your Password
                  </legend>
                  <input
                    className="border-solid border-gray-300 border w-full h-12 rounded-md p-2"
                    type="password"
                    name="c-password"
                    id="c-password"
                  />
                </fieldset>

                <button className="text-base leading-5 font-bold text-white bg-green-btn w-full h-12 rounded mt-7">
                  Register
                </button>
              </form>

              <a
                onClick={() => setRegister(false)}
                className=" text-base leading-5 text-blue-800 cursor-pointer"
              >
                I already have an account
              </a>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
