import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { GajiUpdate, getGajiById } from "../../../api/gaji";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
const EditGaji = () => {
    const navigate = useNavigate();
    const param = useParams();
    const [formData, setFormData] = useState({
        honor_harian: "",
        bonus: "",
    });
    const id = param.id;
    // useEffect(() => {
    //     getGajiById(id).then((res) => {
    //         setFormData({
    //             honor_harian: res.honor_harian,
    //             bonus: res.bonus,
    //             total_gaji: res.total_gaji,
    //             tanggal_gaji: res.tanggal_gaji,
    //         });
    //     });
    // }, []);
    useEffect(() => {
        getGajiById(id)
            .then((res) => {
                if (res) {
                    setFormData({
                        honor_harian: res.honor_harian,
                        bonus: res.bonus,
                    });
                } else {
                    toast.error("Data gaji tidak ditemukan", {
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
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                toast.error("Terjadi kesalahan saat memuat data", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            });
    }, [id]);
 
    // const handleChange = (e) => {
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [e.target.name]: e.target.value,
    //     }));
    // };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value.trim() ? parseFloat(value) : "", // konversi ke bilangan
        }));
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        GajiUpdate(id, formData).then((res) => {
        if (res.success) {
            toast.success("Gaji berhasil diupdate", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setTimeout(() => {
                navigate("/dashboard-owner/gaji");
            }, 2000);
            handleClearForm();
        } else {
            toast.error("Gaji gagal diupdate", {
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
 
// handleclear form
const handleClearForm = () => {
    setFormData({
        honor_harian: "",
        bonus: "",
        total_gaji: "",
        tanggal_gaji: "",
    });
};
 
return (
    <div className="w-full relative">
        <h1 className="text-2xl font-bold">Edit Gaji</h1>
        <form
            onSubmit={(e) => {
                handleSubmit(e);
            }}
            className="px-20 py-10"
        >
            <div className="mb-5">
                <label
                    htmlFor="honor_harian"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Honor Harian
                </label>
                <input
                    type="number"
                    id="honor_harian"
                    name="honor_harian"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Honor Harian"
                    required
                    value={formData.honor_harian}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="bonus"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Bonus
                </label>
                <input
                    type="number"
                    id="bonus"
                    name="bonus"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Bonus"
                    required
                    value={formData.bonus}
                    onChange={handleChange}
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white rounded-lg p-2.5 mt-5 w-full hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
 
        <ToastContainer />
    </div>
);
};

export default EditGaji;