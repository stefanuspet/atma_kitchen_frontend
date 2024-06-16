import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetTransaksicus, searchHistory } from "../../api/history";
import { ToastContainer, toast } from "react-toastify";
import HomeUserLayout from "../../Layout/HomeCustomerLayout";
import "react-toastify/dist/ReactToastify.css";

const HistoryPage = () => {
    const [history, setHistory] = useState([]);
    const [historySearch, setHistorySearch] = useState([]);
    const [search, setSearch] = useState(false);
    const [isFound, setIsFound] = useState(false);

    const fetchData = () => {
        GetTransaksicus()
            .then((res) => {
                console.log(res);
                setHistory(res);
            })
            .catch((err) => {
                console.error(err);
                toast.error("Failed to fetch history");
            });
    };

    const handleInputSearch = async (e) => {
        const searchValue = e.target.value.trim();
        setIsFound(true);
        if (searchValue === "") {
            setHistorySearch([]);
            setIsFound(false);
            setSearch(false);
            return;
        }

        searchHistory(searchValue)
            .then((res) => {
                if (res.length > 0) {
                    setHistorySearch(res);
                    setIsFound(true);
                    setSearch(true);
                } else {
                    setIsFound(false);
                    setSearch(true);
                    setHistorySearch([]);
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error("Failed to search history");
            });
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
            <div className="container relative mx-auto max-w-5xl min-h-lvh mt-44 bg-white bg-opacity-75 p-8 rounded-lg">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold">History Pemesanan</h1>
                    <div className="flex items-center">
                        <input
                            onChange={handleInputSearch}
                            type="text"
                            name="search"
                            id="search"
                            className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                        />
                        <button
                            onClick={handleClearSearch}
                            className="bg-blue-500 text-white h-10 px-4 rounded-lg ml-2"
                        >
                            Clear
                        </button>
                    </div>
                </div>
                {search && (
                    <div>
                        <div className="h-0.5 bg-gray-200 mb-4"></div>
                        {!isFound && (
                            <h1 className="py-5 text-red-600">
                                History Pemesanan Tidak Ditemukan!
                            </h1>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            {historySearch.map((item, index) => (
                                <HistoryCard key={index} item={item} />
                            ))}
                        </div>
                    </div>
                )}
                <h1 className="text-xl font-bold pt-10 pb-2">Semua History Pemesanan</h1>
                <div className="h-0.5 bg-gray-200 mb-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {history.map((item, index) => (
                        <HistoryCard key={index} item={item} />
                    ))}
                </div>
                <div className="flex justify-center mt-5">
                    <Link to="/" className="text-blue-500 hover:underline">
                        Back
                    </Link>
                </div>
                <ToastContainer />
            </div>
        </HomeUserLayout>
    );
};

const HistoryCard = ({ item }) => (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-5">
        <p className="mb-3 font-normal text-gray-700">Tanggal Transaksi: {item.tanggal_transaksi}</p>
        <p className="mb-3 font-normal text-gray-700">Harga Total: {item.harga_total}</p>
        <p className="mb-3 font-normal text-gray-700">Metode Pembayaran: {item.metode_pembayaran}</p>
        <p className="mb-3 font-normal text-gray-700">Status Pembayaran: {item.status_pembayaran}</p>
        <p className="mb-3 font-normal text-gray-700">Status Pengiriman: {item.status_pengiriman}</p>
        <p className="mb-3 font-normal text-gray-700">Jenis Pengiriman: {item.jenis_pengiriman}</p>
        <p className="mb-3 font-normal text-gray-700">Tip: {item.tip}</p>
    </div>
);

export default HistoryPage;