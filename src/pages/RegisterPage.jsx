import React, { useState } from "react";
import HomePageLayout from "../Layout/HomePageLayout";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || !phoneNumber.trim() || !password.trim() || !confirmPassword.trim()) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
    setConfirmPassword("");
    setError("");
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
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black"
                    style={{ borderRadius: '20px' }}
                />
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black"
                    style={{ borderRadius: '20px' }}
                />
                <input
                    type="number"
                    placeholder="Enter your number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black"
                    style={{ borderRadius: '20px' }}
                />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4 relative">
                <input 
                    type={showPassword ?"text" : "password"}
                    placeholder="Create your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black"
                    style={{ borderRadius: '20px' }} 
                />
                <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
                    {showPassword ? (
                    <FaEyeSlash onClick={togglePasswordVisibility} />
                    ) : (
                    <FaEye onClick={togglePasswordVisibility} />
                    )}
                </div>
                </div>
                {error && (
                <div className="flex justify-center mt-2 text-red-600">
                    {error}
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
