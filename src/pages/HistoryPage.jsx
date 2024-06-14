import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getHistory, searchHistory } from "../api/history";
import { ToastContainer, toast } from "react-toastify";
import HomeUserLayout from "../Layout/HomeUserLayout";
import "react-toastify/dist/ReactToastify.css";

const HistoryPage = () => {
    const [history, setHistory] = useState([]);
    const [historySearch, setHistorySearch] = useState([]);
    const [search, setSearch] = useState(false);
    const [isfound, setIsfound] = useState(false);

    const fetchData = () => {
        getHistory()
            .then((res) => {
                setHistory(res);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleInputSearch = async (e) => {
        const searchValue = e.target.value.trim();
        setIsfound(true);
        if (searchValue === "") {
            setHistorySearch([]);
            setIsfound(false);
            setSearch(false);
            return;
        }

        searchHistory(searchValue)
            .then((res) => {
                if (res.length > 0) {
                    setHistorySearch(res);
                    setIsfound(true);
                    setSearch(true);
                } else {
                    setIsfound(false);
                    setSearch(true);
                    setHistorySearch([]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        return;
    };

    const handleClearSearch = () => {
        document.getElementById("search").value = "";
        setSearch(false);
        setHistorySearch([]);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <HomeUserLayout>
            <div className="relative">
                <div className="flex justify-between">
                    <h1 className="text-3xl mt-0 x  font-bold">History Pemesanan</h1>
                    <div>
                        <input
                            onChange={handleInputSearch}
                            type="text"
                            name="search"
                            id="search"
                            className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        <button
                            onClick={handleClearSearch}
                            className="bg-blue-500 text-white h-10 px-4 rounded-lg ml-2"
                        >
                            Clear
                        </button>
                    </div>
                </div>
                <div style={{ display: search ? "block" : "none" }}>
                    <h1 className="text-xl font-bold pt-10 pb-2">Hasil Pencarian</h1>
                    <div className="h-0.5 bg-white"></div>
                    <h1
                        style={{ display: isfound ? "none" : "block" }}
                        className="py-5 text-red-600"
                    >
                        History Pemesanan Tidak Ditemukan !
                    </h1>
                    <div className="grid grid-cols-3 gap-7 pt-5">
                        {historySearch.map((item, index) => (
                            <div
                                key={index}
                                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72"
                            >
                                <div className="p-5">
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        Tanggal Transaksi : {item.tanggal_transaksi}
                                    </p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        Harga Total : {item.harga_total}
                                    </p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        Metode Pembayaran : {item.metode_pembayaran}
                                    </p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        Status Pembayaran : {item.status_pembayaran}
                                    </p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        Status Pengiriman : {item.status_pengiriman}
                                    </p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        Jenis Pengiriman : {item.jenis_pengiriman}
                                    </p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        Tip : {item.tip}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <h1 className="text-xl font-bold pt-10 pb-2">Semua History Pemesanan</h1>
                <div className="h-0.5 bg-white"></div>
                <div className="grid grid-cols-3 gap-7 pt-5">
                    {history.map((item, index) => (
                        <div
                            key={index}
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72"
                        >
                            <div className="p-5">
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Tanggal Transaksi : {item.tanggal_transaksi}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Harga Total : {item.harga_total}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Metode Pembayaran : {item.metode_pembayaran}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Status Pembayaran : {item.status_pembayaran}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Status Pengiriman : {item.status_pengiriman}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Jenis Pengiriman : {item.jenis_pengiriman}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Tip : {item.tip}
                                </p>
                            </div>
                        </div>
                    ))}
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
            </div>
        </HomeUserLayout>
    );
};

export default HistoryPage;