import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { StoreBahanBaku } from "../../../api/bahanbaku";
import { useNavigate } from "react-router-dom";


const CreateBahanBaku = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        bahan_baku: "",
        jumlah_tersedia: "",
        satuan_bahan: "",
        harga_satuan: "",
    }); 

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDatatoSend = new FormData();
        formDatatoSend.append("bahan_baku", formData.bahan_baku);
        formDatatoSend.append("jumlah_tersedia", formData.jumlah_tersedia);
        formDatatoSend.append("satuan_bahan", formData.satuan_bahan);
        formDatatoSend.append("harga_satuan", formData.harga_satuan);

        StoreBahanBaku(formDatatoSend).then((res) => {
            if (res.success) {
                toast.success("Bahan Baku berhasil ditambahkan", {
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
                    navigate("/dashboard-admin/bahanbaku");
                }, 2000);
                handleClearForm();
            } else {
                toast.error("Bahan Baku gagal ditambahkan", {
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
        console.log(formData);
    };


    const handleClearForm = () => {
        setFormData({
            bahan_baku: "",
            jumlah_tersedia: "",
            satuan_bahan: "",
            harga_satuan: "",
        });
    };

    return (
        <div className="w-full relative">
            <h1 className="text-2xl font-bold">Create Bahan Baku</h1>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
                className="px-20 py-10"
            >
                <div className="mb-5">
                    <label
                        htmlFor="bahan_baku"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Nama Bahan Baku
                    </label>
                    <input
                        type="text"
                        id="bahan_baku"
                        name="bahan_baku"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Nama Bahan Baku"
                        required
                        value={formData.bahan_baku}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="harga_satuan"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Harga Bahan Baku
                    </label>
                    <input
                        type="number"
                        id="harga_satuan"
                        name="harga_satuan"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Harga Bahan Baku"
                        required
                        value={formData.harga_satuan}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="jumlah_tersedia"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Jumlah Tersedia
                    </label>
                    <input
                        type="number"
                        id="jumlah_tersedia"
                        name="jumlah_tersedia"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Stok Bahan Baku"
                        required
                        value={formData.jumlah_tersedia}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="satuan_bahan"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Satuan Bahan Baku
                    </label>
                    <input
                        type="text"
                        id="satuan_bahan"
                        name="satuan_bahan"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Satuan Baha Baku"
                        required
                        value={formData.satuan_bahan}
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

export default CreateBahanBaku;