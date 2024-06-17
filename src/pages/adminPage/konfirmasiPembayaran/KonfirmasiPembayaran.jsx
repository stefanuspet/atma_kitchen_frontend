import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaPlus, FaTrash, FaPencilAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GetTransaksi } from "../../../api/konfirmasiPembayaran";

const KonfirmasiPembayaran = () => {
    const [transaksi, setTransaksi] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // const fetchData = async () => {
    //     setIsLoading(true);
    //     try {
    //         const transaksiRes = await GetTransaksi();
    //         const filteredTransaksi = transaksiRes.filter(transaksi =>
    //             ["Siap Dipick-Up", "Sudah Dipick-Up", "Sedang Dikirim", "Selesai"].includes(transaksi.status_pesanan)
    //         );
    //         setTransaksi(filteredTransaksi);
    //     } catch (err) {
    //         console.error("Error fetching data:", err);
    //         toast.error("Error fetching data");
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    const fetchData = () => {
        GetTransaksi()
            .then((res) => {
                console.log(res);
                setTransaksi(res);
            })
            .catch((err) => {
                console.log(err);
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
                    <h1 className="text-3xl mt-0 font-bold">Konfirmasi Pembayaran</h1>
                </div>

                <h1 className="text-xl font-bold pt-10 pb-2">Semua Konfirmasi Pembayaran</h1>
                <div className="h-0.5 bg-white"></div>

                <div className="grid grid-cols-3 gap-7 pt-5">
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        transaksi.map((item, index) => (
                            <div
                                key={index}
                                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72"
                            >
                                <div className="p-5">
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        id transaksi : {item.id}
                                    </p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        status : {item.status_pesanan}
                                    </p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        jumlah pembayaran: {item.jumlah_pembayaran || "Data not available"}
                                    </p>
                                    <div className="flex justify-end gap-x-2">
                                        <NavLink
                                            to={`/dashboard-admin/konfirmasi-pembayaran/edit/${item.id}`}
                                            className="p-2 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            <FaPencilAlt className="text-white" />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default KonfirmasiPembayaran;
