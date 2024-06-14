import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ResepGet, ResepDelete, ResepSearch } from "../../../api/resep";

const Resep = () => {
  const [resep, setResep] = useState([]);
  const [resepSearch, setResepSearch] = useState([]);
  const [search, setSearch] = useState("");
  const [isfound, setIsfound] = useState(true);

  const handleInputSearch = (e) => {
    const searchValue = e.target.value.trim();
    setSearch(searchValue);
    setIsfound(true);
    if (searchValue === "") {
      ResepSearch([]);
      setIsfound(false);
      setSearch(false);
      return;
    }

    ResepSearch(searchValue)
      .then((res) => {
        if (res.length > 0) {
          setResepSearch(res);
          console.log(res, "search");
          setIsfound(true);
          setSearch(true);
        } else {
          setIsfound(false);
          setResepSearch([]);
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
    setResepSearch([]);
    document.getElementById("search").value = "";
  };

  const handleDelete = (id) => {
    ResepDelete(id).then(() => {
      fetchData();
      setPenitipSearch([]);
      toast.success("Resep Berhasil Dihapus", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });
  };

  const fetchData = async () => {
    const response = await ResepGet();
    console.log(response);
    setResep(response);
    console.log(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("resep", resep);
  return (
    <>
      <div className="relative w-full">
        <ToastContainer />
        <div className="flex justify-between">
          <h1 className="text-3xl mt-0 x  font-bold">Resep</h1>
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
          to="/dashboard-admin/resep/create"
          className="bg-green-500 p-2 rounded-lg mt-2 mb-4 flex items-center w-fit"
        >
          Tambah Resep <FaPlus className="ml-2" />
        </NavLink>
        <div style={{ display: search ? "block" : "none" }}>
          <h1 className="text-xl font-bold pt-10 pb-2">Hasil Pencarian</h1>
          <div className="h-0.5 bg-white"></div>
          <h1
            style={{ display: isfound ? "none" : "block" }}
            className="py-5 text-red-600"
          >
            Resep Tidak Ditemukan !
          </h1>
          <div className="grid grid-cols-3 gap-7 pt-5">
            {resepSearch.map((item, index) => (
              <div
                key={index}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72"
              >
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.nama_produk}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    takaran : {item.takaran}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    nama bahan baku : {item.nama_bahan_baku}
                  </p>
                  <div className="flex justify-end gap-x-2">
                    <NavLink
                      to={`/dashboard-admin/resep/edit/${item.id_resep}`}
                      className="p-2 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <FaPencilAlt className="text-white" />
                    </NavLink>
                    <div
                      onClick={() => handleDelete(item.id_resep)}
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
        <h1 className="text-xl font-bold pt-10 pb-2">Semua Resep</h1>
        <div className="h-0.5 bg-white"></div>
        <div className="grid grid-cols-3 gap-7 pt-5">
          {resep.map((item, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72"
            >
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.id_produk}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  takaran : {item.takaran}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  nama bahan baku : {item.id_bahan_baku}
                </p>
                <div className="flex justify-end gap-x-2">
                  <NavLink
                    to={`/dashboard-admin/resep/edit/${item.id}`}
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
    </>
  );
};

export default Resep;
