import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaTrash, FaSpinner } from "react-icons/fa";
import { GetPembatalan, BatalkanTransaksi, UpdateStatusPembayaran } from "../../../api/batalPesanan";

const BatalPesanan = () => {
    const [pembatalan, setPembatalan] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        GetPembatalan()
            .then((res) => {
                setPembatalan(res);
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

    const handleConfirmCancel = async (id) => {
        setLoading(true);
        try {
            await UpdateStatusPembayaran(id);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading
            await BatalkanTransaksi(id);
            fetchData();  // Refresh data to show updated stock/quota
            toast.success("Pembayaran berhasil dibatalkan", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } catch (error) {
            toast.error("Gagal membatalkan pesanan", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } finally {
            setLoading(false);
        }
    };      

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="relative w-full">
                <ToastContainer />
                <div className="flex justify-between">
                    <h1 className="text-3xl mt-0 font-bold">Pembatalan Pesanan</h1>
                </div>
                <h1 className="text-xl font-bold pt-10 pb-2">Pesanan dengan Pembayaran Telat</h1>
                <div className="h-0.5 bg-white"></div>
                <div className="grid grid-cols-3 gap-7 pt-5">
                    {pembatalan && pembatalan.map((item, index) => (
                        <div
                            key={index}
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72"
                        >
                            <div className="p-5">
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    id transaksi: {item.id}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    tanggal ambil: {item.tanggal_ambil}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    status pembayaran: {item.status_pembayaran}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    status pengiriman: {item.status_pengiriman}
                                </p>
                                <div className="flex justify-end gap-x-2">
                                    <button
                                        onClick={() => handleConfirmCancel(item.id)}
                                        className="p-2 rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <FaSpinner className="animate-spin text-white" />
                                        ) : (
                                            <FaTrash className="text-white" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BatalPesanan;