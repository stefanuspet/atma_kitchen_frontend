import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GetTransaksi } from "../../../api/status";

const Status = () => {
    const [status, setStatus] = useState([]);

    const fetchData = () => {
        GetTransaksi()
            .then((res) => {
                const filteredData = res.filter(item => item.status_pesanan === "Sudah Dibayar" && item.status_pesanan !== "Selesai");
                setStatus(filteredData);
            })
            .catch((err) => {
                toast.error("Gagal mengambil data transaksi", {
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

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="relative w-full">
                <ToastContainer />
                <div className="flex justify-between">
                    <h1 className="text-3xl mt-0 x  font-bold">Status Pesanan</h1>
                </div>
                <h1 className="text-xl font-bold pt-10 pb-2">Semua Status Pesanan</h1>
                <div className="h-0.5 bg-white"></div>
                <div className="grid grid-cols-3 gap-7 pt-5">
                    {status.map((item, index) => (
                        <div
                            key={index}
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72"
                        >
                            <div className="p-5">
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    id transaksi: {item.id}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Status Pengiriman: {item.status_pesanan}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Jenis Pengiriman: {item.jenis_pengiriman}
                                </p>
                                <div className="flex justify-end gap-x-2">
                                    <NavLink
                                        to={`/dashboard-admin/status/edit/${item.id}`}
                                        className="p-2 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        <FaPencilAlt className="text-white" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Status;