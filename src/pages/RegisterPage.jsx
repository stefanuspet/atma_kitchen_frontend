import React, { useState } from "react";
import axios from "axios";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/customers/forget-password", {
        email: email,
      });
      console.log(response.data);
      setMessage(response.data.message);
    } catch (error) {
      console.error(error.response.data);
      setMessage(error.response.data.message);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="container mx-auto px-10">
      <div className="w-full inline-flex justify-center h-svh items-center">
        <div className="bg-white w-96 h-80 inline-flex justify-center border border-black rounded-lg">
          <div className="block w-full">
            <div className="bg-[#EDECEC] text-2xl inline-flex items-center justify-center h-12 w-full text-center rounded-tr-lg rounded-tl-lg">
              Forget Password
            </div>
            <div className="h-[1px] bg-black w-full"></div>
            <div className="bg-green-200 h-10 w-[23rem] inline-flex justify-center items-center border mt-2 border-green-700 rounded-lg" style={{ marginLeft: '7px' }}>
              <p className="text-black text-xs inline-flex items-center justify-center">Untuk mereset email anda silahkan isi email Anda</p>
            </div>
            <form className="max-w-sm mx-auto px-2" onSubmit={handleSubmit}>
              <label
                htmlFor="email-address-icon"
                className="block mt-7 mb-2 text-sm text-gray-900"
              >
                Your Email :
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
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-[23rem] me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <span className="inline-block">Kirim</span>
              </button>
              {message && <p>{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
