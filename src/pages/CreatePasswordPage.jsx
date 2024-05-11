import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { resetPassword } from "../api/auth";

const CreatePasswordPage = () => {
    const param = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        password: "",
        password_confirmation: "",
    });

    console.log(param.token);

    const handleChange = (e) => {
        const newData = { ...data, [e.target.name]: e.target.value };
        setData(newData);
    };

    const handlereset = (e) => {
        e.preventDefault();
        resetPassword(param.token, data)
            .then((res) => {
                console.log(res);
                navigate("/login");
            })
            .catch((error) => {
                console.log(error);
            });
    }


    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="containter mx-auto px-10">
            <div className="w-full inline-flex justify-center h-svh items-center">
                <div className="bg-white w-96 h-[22rem] inline-flex justify-center border border-black rounded-lg">
                    <div className="block w-full">
                        <div className="bg-[#EDECEC] text-2xl inline-flex items-center justify-center h-12 w-full text-center rounded-tr-lg rounded-tl-lg">
                            Forget Password
                        </div>
                        <div className="h-[1px] bg-black w-full"></div>
                        <div className="bg-green-200 h-10 w-[23rem] inline-flex justify-center items-center border mt-2 border-green-700 rounded-lg" style={{ marginLeft: '7px' }}>
                            <p className="text-black text-xs inline-flex items-center justify-center text-center">Masukkan password lama dan juga password baru yang ingin Anda buat.</p>
                        </div>
                        <form onSubmit={handlereset} className="max-w-sm mx-auto px-2">
                            <div className="mb-5 relative">
                                <label htmlFor="password" className="block mt-2 text-sm text-gray-900">Your new password :</label>
                                <div className="relative">
                                    <input onChange={handleChange} type={showPassword ? "text" : "password"} placeholder="Your new Password" id="password" name="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-3 pr-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                                    <div className="absolute inset-y-0 right-4 top-1/2 transform -translate-y-1/2">
                                        {showPassword ? (
                                            <FaEyeSlash className="text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400 cursor-pointer" onClick={togglePasswordVisibility} />
                                        ) : (
                                            <FaEye className="text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400 cursor-pointer" onClick={togglePasswordVisibility} />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5 relative">
                                <label htmlFor="repeat-password" className="block text-sm text-gray-900">Repeat your password :</label>
                                <div className="relative">
                                    <input onChange={handleChange} type={showPassword ? "text" : "password"} placeholder="Repeat yaour Password" id="password_confirmation" name="password_confirmation" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-3 pr-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                                    <div className="absolute inset-y-0 right-4 top-1/2 transform -translate-y-1/2">
                                        {showPassword ? (
                                            <FaEyeSlash className="text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400 cursor-pointer" onClick={togglePasswordVisibility} />
                                        ) : (
                                            <FaEye className="text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400 cursor-pointer" onClick={togglePasswordVisibility} />
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* <Link to="/login"> */}
                                <button type="submit" className="text-white inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-[23rem] me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    <span className="inline-block">Kirim</span>
                                </button>
                            {/* </Link> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePasswordPage;