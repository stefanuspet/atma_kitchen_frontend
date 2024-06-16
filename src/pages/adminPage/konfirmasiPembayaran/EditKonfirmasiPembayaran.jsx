import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { KonfirmasiPembayaranUpdate, getKonfirmasiPembayaranById } from "../../../api/konfirmasiPembayaran";

const EditKonfirmasiPembayaran = () => {
    const param = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        jumlah_pembayaran: '',
    });

    const id = param.id;

    useEffect(() => {
        getKonfirmasiPembayaranById(id).then((res) => {
            setFormData({
                jumlah_pembayaran: res.jumlah_pembayaran,
            });
        });
    }, []);

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        KonfirmasiPembayaranUpdate(id, formData )
            .then((res) => {
                toast.success("Konfirmasi Pembayaran berhasil diupdate", {
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
                    navigate("/dashboard-admin/konfirmasi-pembayaran");
                }, 2000);
            })
            .catch((err) => {
                toast.error("Gagal Update Konfirmasi Pembayaran", {
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
            <h1 className="text-2xl font-bold">Edit Konfirmasi Pembayaran</h1>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
                className="px-20 py-10"
            >
                <div className="mb-5">
                    <label
                        htmlFor="jumlah_pembayaran"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Jumlah Pembayaran
                    </label>
                    <input
                        type="number"
                        id="jumlah_pembayaran"
                        name="jumlah_pembayaran"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Jumlah Pembayaran"
                        value={formData.jumlah_pembayaran}
                        required
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

export default EditKonfirmasiPembayaran;