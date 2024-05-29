import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { GetPengeluaranLain, searchPengeluaranLain, PengeluaranLainDelete } from "../../../api/pengeluaranlain";

const PengeluaranLain = () => {
    const [pengeluaranlain, setPengeluaranLain] = useState([]);
    const [pengeluaranlainSearch, setPengeluaranLainSearch] = useState([]);
    const [search, setSearch] = useState(false);
    const [isfound, setIsfound] = useState(false);

    const fetchData = () => {
        GetPengeluaranLain()
            .then((res) => {
                setPengeluaranLain(res);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    console.log(pengeluaranlainSearch);
    const handleInputSearch = (e) => {
        setSearch(e.target.value);
        const search = pengeluaranlain.filter((item) => {
            return item.nama_pengeluaran.toLowerCase().includes(e.target.value);
        });
        if (search) {
            setPengeluaranLainSearch(search);
            setIsfound(true);
        } else {
            setIsfound(false);
        }
    };

    const handleClearSearch = () => {
        setSearch("");
        setPengeluaranLainSearch([]);
        document.getElementById("search").value = "";
    };

    useEffect(() => {
        fetchData();
    }, []);

    // const handleDelete = (id) => {
    //     console.log(id, "delete");
    //     PengeluaranLainDelete(id)
    //         .then(() => {
    //             fetchData();
    //             toast.success("Pengeluaran Lain Berhasil Dihapus", {
    //                 position: "top-right",
    //                 autoClose: 2000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "colored",
    //             });
    //             const newPengeluaranLainSearch = pengeluaranlainSearch.filter((item) => item.id !== id);
    //             setPengeluaranLainSearch(newPengeluaranLainSearch);
    //         })
    //         .catch((error) => {
    //             console.error("Error deleting pengeluaranlain:", error);
    //         });
    // };

    const handleDelete = (id) => {
        PengeluaranLainDelete(id)
            .then(() => {
                fetchData();
                toast.success("Pengeluaran Berhasil Dihapus", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                // delete from search by id
                const newPengeluaranSearch = pengeluaranlainSearch.filter(
                    (item) => item.id !== id
                );
                setPengeluaranLainSearch(newPengeluaranSearch);
                handleClearSearch(); // Mengosongkan hasil pencarian setelah penghapusan
            })
            .catch((error) => {
                console.error("Error deleting pengeluaran:", error);
            });
    };

    //   const handleDelete = (id) => {
    //     PengeluaranLainDelete(id)
    //       .then(() => {
    //         fetchData();
    //         toast.success("Pengeluaran Lain Berhasil Dihapus", {
    //           position: "top-right",
    //           autoClose: 5000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "colored",
    //         });

    //         // delete karyawan from search by id
    //         const newKaryawanSearch = pengeluaranlainSearch.filter(
    //           (item) => item.id !== id
    //         );
    //         setPenitipSearch(newKaryawanSearch);
    //         handleClearSearch();
    //       })
    //       .catch((error) => {
    //         console.error("Error deleting karyawan:", error);
    //       });
    //   };

    return (
        <div className="relative">
            <ToastContainer />
            <div className="flex justify-between">
                <h1 className="text-3xl mt-0 x  font-bold">Pengeluaran Lain</h1>
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
            <Link to="/dashboard-manager/pengeluaranlain/create"
                className="bg-green-500  w-fit p-2 rounded-lg mt-2 mb-4 flex items-center"
            >
                Tambah Pengeluaran Lain <FaPlus className="ml-2" />
            </Link>
            <div style={{ display: search ? "block" : "none" }}>
                <h1 className="text-xl font-bold pt-10 pb-2">Hasil Pencarian</h1>
                <div className="h-0.5 bg-white"></div>
                <h1
                    style={{ display: isfound ? "none" : "block" }}
                    className="py-5 text-red-600"
                >
                    Pengeluaran Lain Tidak Ditemukan !
                </h1>
                <div className="grid grid-cols-3 gap-7 pt-5">
                    {pengeluaranlainSearch.map((item, index) => (
                        <div
                            key={index}
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72"
                        >
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {item.nama_pengeluaran}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Nominal : {item.total_pengeluaran}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Deskripsi : {item.tanggal_pengeluaran}
                                </p>
                                <div className="flex justify-end gap-x-2">
                                    <Link to={`/dashboard-manager/pengeluaranlain/edit/${item.id_pengeluaran_lain}`}
                                        className="p-2 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        <FaPencilAlt className="text-white" />
                                    </Link>
                                    <div
                                        onClick={() => handleDelete(item.id_pengeluaran_lain)}
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
            <h1 className="text-xl font-bold pt-10 pb-2">Semua Pengeluaran Lain</h1>
            <div className="h-0.5 bg-white"></div>
            <div className="grid grid-cols-3 gap-7 pt-5">
                {pengeluaranlain.map((item, index) => (
                    <div
                        key={index}
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72"
                    >
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {item.nama_pengeluaran}
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Nominal : {item.total_pengeluaran}
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Deskripsi : {item.tanggal_pengeluaran}
                            </p>
                            <div className="flex justify-end gap-x-2">
                                <Link
                                    to={`/dashboard-manager/pengeluaranlain/edit/${item.id_pengeluaran_lain}`}
                                    className="p-2 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <FaPencilAlt className="text-white" />
                                </Link>
                                <div
                                    onClick={() => handleDelete(item.id_pengeluaran_lain)}
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

}

export default PengeluaranLain;