import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ProfileUpdate, getProfile } from "../api/auth";
import { ToastContainer, toast } from "react-toastify";
import HomeUserLayout from "../Layout/HomeUserLayout";
import "react-toastify/dist/ReactToastify.css";

const EditProfilePage = ({ }) => {
    const param = useParams();
    const [formData, setFormData] = useState({
        nama_customer: "",
        email_customer: "",
        notelp_customer: "",
    });
    const id = param.id;
    useEffect(() => {
        getProfile(id).then((res) => {
            setFormData({
                nama_customer: res.nama_customer,
                email_customer: res.email_customer,
                notelp_customer: res.notelp_customer,
            });
        });
    }, []);

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        console.log(formData);
        ProfileUpdate(id, formData).then((res) => {
            if (res.success) {
                toast.success("Profile berhasil diupdate", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                toast.error("Profile gagal diupdate", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        });
    };
    return (
        <HomeUserLayout>
            <div className="flex justify-center items-center h-screen w-full">
                <div className="w-1/3 h-[30rem] bg-white bg-opacity-70 text-black">
                    <h1 className="flex justify-center text-2xl font-bold mt-10">Edit Profile User</h1>
                    <div className="container mx-auto py-28">
                        <div className="flex justify-center">
                            <form onSubmit={handleSave}>
                                <div className="flex justify-center -mt-16">
                                    <label
                                        htmlFor="nama_customer"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                    </label>
                                    <input
                                        type="text"
                                        id="nama_customer"
                                        name="nama_customer"
                                        placeholder="Enter your name"
                                        required
                                        value={formData.nama_customer}
                                        onChange={handleChange}
                                        className="bg-[#AD773D] placeholder-slate-950 text-black py-2 px-4 rounded-full w-full md:w-[23rem] flex justify-between items-center"
                                    />
                                </div>
                                <div className="flex justify-center mt-5 items-center relative">
                                    <label
                                        htmlFor="email_customer"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                    </label>
                                    <input
                                        id="email_customer"
                                        name="email_customer"
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        value={formData.email_customer}
                                        onChange={handleChange}
                                        className="bg-[#AD773D] placeholder-slate-950 text-black py-2 px-4 rounded-full w-full md:w-[23rem] pr-12" // Tambahkan pr-12 untuk memberikan ruang di sebelah kanan input untuk ikon mata
                                    />
                                </div>
                                <div className="flex justify-center mt-5 items-center relative">
                                    <label
                                        htmlFor="notelp_customer"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                    </label>
                                    <input
                                        id="notelp_customer"
                                        name="notelp_customer"
                                        type="number"
                                        placeholder="Enter your number"
                                        required
                                        value={formData.notelp_customer}
                                        onChange={handleChange}
                                        className="bg-[#AD773D] placeholder-slate-950 text-black py-2 px-4 rounded-full w-full md:w-[23rem] pr-12" // Tambahkan pr-12 untuk memberikan ruang di sebelah kanan input untuk ikon mata
                                    />
                                </div>
                                <div className="flex justify-center mt-5">
                                    <button
                                        type="submit"
                                        className="bg-[#011145] hover:bg-[#01071b] text-[#AD773D] py-2 px-4 rounded-full w-96 h-14 "
                                    >
                                        Save
                                    </button>
                                </div>
                                <div className="flex justify-center mt-5">
                                    <p
                                        className="text-[#171832] font-serif text-center mt-1 mb-8"
                                        style={{ fontSize: "14px" }}
                                    >
                                        <Link
                                            to="/homeUser"
                                            className="text-[#AD773D] font-serif text-center mt-1 mb-8 hover:teks-[#AD773D]"
                                            style={{ fontSize: "14px" }}
                                        >
                                            Back
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </HomeUserLayout>
    );
};

export default EditProfilePage;