import React, { useState } from "react";
import HomePageLayout from "../Layout/HomePageLayout";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { register } from "../api/auth";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [data, setData] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {

    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
  };

  const handleClearForm = () => {
    setData({
      nama_customer: "",
      email_customer: "",
      notelp_customer: "",
      password_customer: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      register(data).then((res) => {
        console.log(res, "ress");
      })
      
      setSuccessMessage("Register berhasil");
      
    } catch (error) {
      console.error("Error:", error);
      setError("Registration failed. Please try again later.");
    }
    handleClearForm();
  };

  return (
    <>
      <HomePageLayout>
        <div className="flex justify-center items-center h-screen w-full">
          <div className="bg-white rounded-3xl p-8 mt-20 md:w-[50rem] h-[24rem] bg-opacity-70 w-full">
            <h1 className="text-[#AD773D] font-bold font-serif text-center mb-0.5 text-3xl">
              REGISTER
            </h1>
            <hr style={{ borderWidth: '1.5px' }} />
            <p
              className="text-[#171832] font-serif text-center mt-1"
              style={{ fontSize: '16px' }}
            >
              WELCOME
            </p>
            <p className="text-[#171832] font-serif text-center mb-6" style={{ fontSize: '12px' }}>Help us fill in your undefined</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 grid grid-cols-3 gap-4" >
                <input
                  type="text"
                  value={data.nama_customer}
                  placeholder="Enter your full name"
                  name="nama_customer"
                  onChange={handleChange}
                  className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black"
                  style={{ borderRadius: '20px' }}
                />
                <input
                  type="email"
                  value={data.email_customer}
                  placeholder="Enter your email"
                  name="email_customer"
                  onChange={handleChange}
                  className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black"
                  style={{ borderRadius: '20px' }}
                />
                <input
                  type="number"
                  value={data.notelp_customer}
                  placeholder="Enter your number"
                  name="notelp_customer"
                  onChange={handleChange}
                  className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black"
                  style={{ borderRadius: '20px' }}
                />
              </div>
              <div className="mb-4 grid grid-cols-2 gap-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={data.password_customer}
                  placeholder="Create your password"
                  name="password_customer"
                  onChange={handleChange}
                  className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black"
                  style={{ borderRadius: '20px' }}
                />
                <div className="absolute left-80 top-1/2 transform -translate-y-1/2">
                  {showPassword ? (
                    <FaEyeSlash onClick={togglePasswordVisibility} />
                  ) : (
                    <FaEye onClick={togglePasswordVisibility} />
                  )}
                </div>
                {/* <input
                  type={showPassword ? "text" : "password"}
                  value={data.clear}
                  placeholder="Confirm your password"
                  name="password_customer"
                  onChange={handleChange}
                  className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black"
                  style={{ borderRadius: '20px' }}
                />
                <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
                  {showPassword ? (
                    <FaEyeSlash onClick={togglePasswordVisibility} />
                  ) : (
                    <FaEye onClick={togglePasswordVisibility} />
                  )}
                </div> */}
              </div>
              {error && (
                <div className="flex justify-center mt-2 text-red-600">
                  {error}
                </div>
              )}
              {successMessage && ( // Tampilkan pesan keberhasilan jika berhasil
                <div className="flex justify-center mt-2 text-green-600">
                  {successMessage}
                </div>
              )}
              <div className="flex justify-center mt-5">
                <button className="bg-[#011145] hover:bg-[#01071b] text-[#AD773D] py-2 px-4 rounded-full w-96 h-14 ">
                  Register
                </button>
              </div>
              <div className="flex justify-center mt-5">
                <p
                  className="text-[#171832] font-serif text-center mt-1 mb-8"
                  style={{ fontSize: "14px" }}
                >
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="text-[#AD773D] font-serif text-center mt-1 mb-8 hover:teks-[#AD773D]"
                    style={{ fontSize: "14px" }}
                  >
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </HomePageLayout>
    </>
  );
}
