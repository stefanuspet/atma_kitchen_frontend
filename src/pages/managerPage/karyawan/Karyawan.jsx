"use client";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import {
  GetKaryawan,
  KaryawanDelete,
  searchKaryawan,
} from "../../../api/karyawan";
import { NavLink } from "react-router-dom";

const Karyawan = () => {
  const [karyawan, setKaryawan] = useState([]);
  const [karyawanSearch, setKaryawanSearch] = useState([]);
  const [search, setSearch] = useState(false);
  const [isfound, setIsfound] = useState(false);

  const fetchData = () => {
    GetKaryawan()
      .then((res) => {
        setKaryawan(res);
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
      setKaryawanSearch([]);
      setIsfound(false);
      setSearch(false);
      return;
    }

    searchKaryawan(searchValue)
      .then((res) => {
        if (res.length > 0) {
          setKaryawanSearch(res);
          setIsfound(true);
          setSearch(true);
        } else {
          setIsfound(false);
          setSearch(true);
          setKaryawanSearch([]);
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
    setKaryawanSearch([]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    KaryawanDelete(id)
      .then(() => {
        fetchData();
        toast.success("Karyawan Berhasil Dihapus", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        // delete karyawan from search by id
        const newKaryawanSearch = karyawanSearch.filter(
          (item) => item.id !== id
        );
        setKaryawanSearch(newKaryawanSearch);
      })
      .catch((error) => {
        console.error("Error deleting karyawan:", error);
      });
  };
  return (
    <div className="relative">
      <ToastContainer />
      <div className="flex justify-between">
        <h1 className="text-3xl mt-0 x  font-bold">Karyawan</h1>
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
      <NavLink
        to="/dashboard-manager/karyawan/create"
        className="bg-green-500 p-2 rounded-lg mt-2 mb-4 flex items-center w-fit"
      >
        Tambah Karyawan <FaPlus className="ml-2" />
      </NavLink>
      <div style={{ display: search ? "block" : "none" }}>
        <h1 className="text-xl font-bold pt-10 pb-2">Hasil Pencarian</h1>
        <div className="h-0.5 bg-white"></div>
        <h1
          style={{ display: isfound ? "none" : "block" }}
          className="py-5 text-red-600"
        >
          Karyawan Tidak Ditemukan !
        </h1>
        <div className="grid grid-cols-3 gap-7 pt-5">
          {karyawanSearch.map((item, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72"
            >
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.nama_karyawan}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  email : {item.email_karyawan}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  nomor telepon : {item.notelp_karyawan}
                </p>
                <div className="flex justify-end gap-x-2">
                  <NavLink
                    to={`/dashboard-manager/karyawan/edit/${item.id}`}
                    className="p-2 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <FaPencilAlt className="text-white" />
                  </NavLink>
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
      <h1 className="text-xl font-bold pt-10 pb-2">Semua Karyawan</h1>
      <div className="h-0.5 bg-white"></div>
      <div className="grid grid-cols-3 gap-7 pt-5">
        {karyawan.map((item, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72"
          >
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.nama_karyawan}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                email : {item.email_karyawan}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                nomor telepon : {item.notelp_karyawan}
              </p>
              <div className="flex justify-end gap-x-2">
                <NavLink
                  to={`/dashboard-manager/karyawan/edit/${item.id_karyawan}`}
                  className="p-2 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <FaPencilAlt className="text-white" />
                </NavLink>
                <div
                  onClick={() => handleDelete(item.id_karyawan)}
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

export default Karyawan;
