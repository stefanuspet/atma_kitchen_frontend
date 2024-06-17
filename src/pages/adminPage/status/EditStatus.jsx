import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { StatusUpdate, getStatusById } from "../../../api/status";

const EditStatus = () => {
    const navigate = useNavigate();
    const param = useParams();
    const [formData, setFormData] = useState({
        status_pesanan: "",
    });
    const id = param.id;

    useEffect(() => {
        getStatusById(id).then((res) => {
            console.log(res, "ress");
            if (res && res.status_pesanan) {
                setFormData({
                    status_pesanan: res.status_pesanan,
                });
            }
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        StatusUpdate(id, formData)
            .then((res) => {
                if (res.success) {
                    toast.success("Status Pesanan berhasil diupdate", {
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
                        navigate("/dashboard-admin/status");
                    }, 2000);
                } else {
                    toast.error("Gagal Update Status Pesanan", {
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
            .catch((err) => {
                toast.error("Error updating status pesanan", {
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
    };

    return (
        <div className="w-full relative">
            <h1 className="text-2xl font-bold">Edit Status Pesanan</h1>
            <form onSubmit={handleSubmit} className="px-20 py-10">
                <div className="mb-5">
                    <label
                        htmlFor="status_pesanan"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Status Pesanan
                    </label>
                    <select
                        id="status_pesanan"
                        name="status_pesanan"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={formData.status_pesanan}
                        onChange={handleChange}
                    >
                        {/* <option value="Siap di Pick-Up">Siap di Pick-Up</option> */}
                        <option value="Sudah Dibayar">Sudah Dibayar</option>
                        <option value="Siap di Pick-Up">Siap di Pick-Up</option>
                        <option value="Sudah di Pick-Up">Sudah di Pick-Up</option>
                        <option value="Sedang Dikirim">Sedang Dikirim</option>
                        <option value="Diambil Sendiri">Diambil Sendiri</option>
                    </select>
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

export default EditStatus;
