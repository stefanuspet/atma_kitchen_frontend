import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { GetBahanbaku, searchBahanbaku, BahanbakuDelete } from "../../../api/bahanbaku";

const BahanBaku = () => {
    const [bahanbaku, setBahanbaku] = useState([]);
    const [bahanbakuSearch, setBahanbakuSearch] = useState([]);
    const [search, setSearch] = useState(false);
    const [isfound, setIsfound] = useState(false);

    const fetchData = () => {
        GetBahanbaku()
            .then((res) => {
                setBahanbaku(res);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleInputSearch = async (e) => {
        const searchValue = e.target.value.trim();
        console.log(searchValue, "searchValue");
        setIsfound(true);
        if (searchValue === "") {
            setBahanbakuSearch([]);
            setIsfound(false);
            setSearch(false);
            return;
        }

        searchBahanbaku(searchValue)
            .then((res) => {
                if (res.length > 0) {
                    setBahanbakuSearch(res);
                    setIsfound(true);
                    setSearch(true);
                } else {
                    setIsfound(false);
                    setSearch(true);
                    setBahanbakuSearch([]);
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
        setBahanbakuSearch([]);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = (id) => {
        console.log(id, "delete");
        BahanbakuDelete(id)
            .then(() => {
                fetchData();
                toast.success("Bahan Baku Berhasil Dihapus", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                const newBahanbakuSearch = bahanbakuSearch.filter((item) => item.id !== id);
                setBahanbakuSearch(newBahanbakuSearch);
            })
            .catch((error) => {
                console.error("Error deleting bahanbaku:", error);
            });
    };
    return (
        <div className="relative">
            <ToastContainer />
            <div className="flex justify-between">
                <h1 className="text-3xl mt-0 x  font-bold">Bahan Baku</h1>
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
            <Link to="/dashboard-admin/bahanbaku/create"
                className="bg-green-500  w-fit p-2 rounded-lg mt-2 mb-4 flex items-center"
            >
                Tambah Bahan Baku <FaPlus className="ml-2" />
            </Link>
            <div style={{ display: search ? "block" : "none" }}>
                <h1 className="text-xl font-bold pt-10 pb-2">Hasil Pencarian</h1>
                <div className="h-0.5 bg-white"></div>
                <h1
                    style={{ display: isfound ? "none" : "block" }}
                    className="py-5 text-red-600"
                >
                    Bahanbaku Tidak Ditemukan !
                </h1>
                <div className="grid grid-cols-3 gap-7 pt-5">
                    {bahanbakuSearch.map((item, index) => (
                        <div
                            key={index}
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72"
                        >
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {item.nama_bahan_baku}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Harga : {item.harga_satuan}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Stok : {item.jumlah_tersedia}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Satuan : {item.satuan_bahan}
                                </p>
                                <div className="flex justify-end gap-x-2">
                                    <Link to={`/dashboard-admin/bahanbaku/edit/${item.id}`}
                                        className="p-2 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        <FaPencilAlt className="text-white" />
                                    </Link>
                                    <div
                                        onClick={() => handleDelete(item.id)}
                                        className=" p-2 rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                    >
                                        <FaTrash className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h1 className="text-xl font-bold pt-10 pb-2">Semua Bahan Baku</h1>
            <div className="h-0.5 bg-white"></div>
            <div className="grid grid-cols-3 gap-7 pt-5">
                {bahanbaku.map((item, index) => (
                    <div
                        key={index}
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72"
                    >
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {item.nama_bahan_baku}
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Harga : {item.harga_satuan}
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Stok : {item.jumlah_tersedia}
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Satuan : {item.satuan_bahan}
                            </p>
                            <div className="flex justify-end gap-x-2">
                                <Link
                                    to={`/dashboard-admin/bahanbaku/edit/${item.id_bahan_baku}`}
                                    className="p-2 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <FaPencilAlt className="text-white" />
                                </Link>
                                <div
                                    onClick={() => handleDelete(item.id_bahan_baku)}
                                    className=" p-2 rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                >
                                    <FaTrash className="text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default BahanBaku;