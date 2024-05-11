import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { HampersCreate } from "../../../api/hampers";
import "react-toastify/dist/ReactToastify.css";

const CreateHampers = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama_hampers: "",
    harga_hampers: "",
    stok_hampers: "",
    deskripsi_hampers: "",
    tanggal_pembuatan_hampers: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // get time now yyyy-mm-dd
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const today = `${year}-${month}-${day}`;
    console.log(today, "today");

    formData.tanggal_pembuatan_hampers = today;

    HampersCreate(formData).then((res) => {
      if (formData.stok_hampers < 0) {
        toast.error("Stok tidak boleh kurang dari 0", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }

      if (formData.harga_hampers < 0) {
        toast.error("Harga tidak boleh kurang dari 0", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }

      if (res.success) {
        toast.success("Hampers berhasil ditambahkan", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }

      navigate("/dashboard-admin/hampers");
    });

    console.log(formData, "form data submit");
  };

  return (
    <>
      <div className="w-full relative">
        <ToastContainer />

        <h1 className="text-2xl font-bold">Create Hampers</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="px-20 py-10"
        >
          <div className="mb-5">
            <label
              htmlFor="nama_hampers"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nama Hampers
            </label>
            <input
              type="text"
              id="nama_hampers"
              name="nama_hampers"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nama Hampers"
              required
              value={formData.nama_hampers}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="harga_hampers"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Harga Hampers
            </label>
            <input
              type="number"
              id="harga_hampers"
              name="harga_hampers"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Harga Hampers"
              required
              value={formData.harga_hampers}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="stok_hampers"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Stok Hampers
            </label>
            <input
              type="number"
              id="stok_hampers"
              name="stok_hampers"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="stok Hampers"
              required
              value={formData.stok_hampers}
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="deskripsi_hampers"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Deskripsi Hampers
            </label>
            <textarea
              onChange={handleChange}
              required
              id="deskripsi_hampers"
              name="deskripsi_hampers"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg p-2.5 mt-5 w-full hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateHampers;
