import React from "react";
import HomePageLayout from "../Layout/HomePageLayout";

const ForgotPasswordPage = () => {
  return (
    <div className="containter mx-auto px-10">
      <div className="w-full inline-flex justify-center h-svh items-center">
        <div className="bg-white w-96 h-96 inline-flex justify-center border border-black rounded-lg">
          <div className="block w-full">
            <div className="bg-[#EDECEC] text-2xl inline-flex items-center justify-center h-12 w-full text-center rounded-tr-lg rounded-tl-lg">
              Forget Password
            </div>
            <div className="h-[1px] bg-black w-full"></div>
            <form className="max-w-sm mx-auto px-4">
              <label
                for="email-address-icon"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
