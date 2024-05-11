import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { HampersDelete, HampersGet, HampersSearch } from "../../../api/hampers";
const Hampers = () => {
  const [hampers, setHampers] = useState([]);
  const [search, setSearch] = useState("");
  const [isfound, setIsfound] = useState(true);
  const [hampersSearch, setHampersSearch] = useState([]);

  const handleInputSearch = (e) => {
    const searchValue = e.target.value.trim();
    setSearch(searchValue);
    setIsfound(true);
    if (searchValue === "") {
      setHampersSearch([]);
      setIsfound(false);
      setSearch(false);
      return;
    }

    HampersSearch(searchValue)
      .then((res) => {
        if (res.length > 0) {
          setHampersSearch(res);
          console.log(res, "search");
          setIsfound(true);
          setSearch(true);
        } else {
          setIsfound(false);
          setHampersSearch([]);
          setSearch(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return;
  };

  const handleClearSearch = () => {
    setSearch("");
    setHampersSearch([]);
    document.getElementById("search").value = "";
  };

  const handleDelete = (id) => {
    HampersDelete(id).then(() => {
      fetchData();
      setHampersSearch([]);
      toast.success("penitip Berhasil Dihapus", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      handleClearSearch();
    });
  };

  const fetchData = () => {
    HampersGet()
      .then((res) => {
        setHampers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(hampers, "hampers");
  return (
    <div className="relative w-full">
      <ToastContainer />
      <div className="flex justify-between">
        <h1 className="text-3xl mt-0 x  font-bold">Hampers</h1>
        <div>
          <input
            onChange={handleInputSearch}
            type="text"
            name="search"
            id="search"
            className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            // onClick={handleClearSearch}
            className="bg-blue-500 text-white h-10 px-4 rounded-lg ml-2"
          >
            Clear
          </button>
        </div>
      </div>
      <NavLink
        to="/dashboard-admin/hampers/create"
        className="bg-green-500 p-2 rounded-lg mt-2 mb-4 flex items-center w-fit"
      >
        Tambah Hampers <FaPlus className="ml-2" />
      </NavLink>
      <div style={{ display: search ? "block" : "none" }}>
        <h1 className="text-xl font-bold pt-10 pb-2">Hasil Pencarian</h1>
        <div className="h-0.5 bg-white"></div>
        <h1
          style={{ display: isfound ? "none" : "block" }}
          className="py-5 text-red-600"
        >
          Produk Tidak Ditemukan !
        </h1>
        <div className="grid grid-cols-3 gap-7 pt-5">
          {hampersSearch.map((item, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72"
            >
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.nama_hampers}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  harga : {item.harga_hampers}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  deskripsi : {item.deskripsi_hampers}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  stok : {item.stok_hampers}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  tanggal : {item.tanggal_pembuatan_hampers}
                </p>
                <div className="flex justify-end gap-x-2">
                  <NavLink
                    to={`/dashboard-admin/hampers/createproduk/${item.id}`}
                    className="inline-flex items-center gap-3 p-2 rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Add Produk <FaPlus />
                  </NavLink>
                  <NavLink
                    to={`/dashboard-admin/hampers/edit/${item.id}`}
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
      <h1 className="text-xl font-bold pt-10 pb-2">Semua Produk</h1>
      <div className="h-0.5 bg-white"></div>
      <div className="grid grid-cols-3 gap-7 pt-5">
        {hampers.map((item, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72"
          >
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.nama_hampers}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                harga : {item.harga_hampers}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                deskripsi : {item.deskripsi_hampers}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                stok : {item.stok_hampers}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                tanggal : {item.tanggal_pembuatan_hampers}
              </p>
              <div className="flex justify-end gap-x-2 w-full">
                <NavLink
                  to={`/dashboard-admin/hampers/createproduk/${item.id}`}
                  className="inline-flex items-center gap-3 p-2 rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Add Produk <FaPlus />
                </NavLink>
                <NavLink
                  to={`/dashboard-admin/hampers/edit/${item.id}`}
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
  );
};

export default Hampers;
