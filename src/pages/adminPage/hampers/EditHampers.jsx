import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HampersDetail, HampersUpdate } from "../../../api/hampers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditHampers = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama_hampers: "",
    harga_hampers: "",
    stok_hampers: "",
    deskripsi_hampers: "",
    tanggal_pembuatan_hampers: "",
  });
  const id = param.id;

  useEffect(() => {
    HampersDetail(id).then((res) => {
      setFormData({
        nama_hampers: res.nama_hampers,
        harga_hampers: res.harga_hampers,
        stok_hampers: res.stok_hampers,
        deskripsi_hampers: res.deskripsi_hampers,
        tanggal_pembuatan_hampers: res.tanggal_pembuatan_hampers,
      });
    });
  }, []);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    HampersUpdate(id, formData).then((res) => {
      toast.success("Berhasil mengubah data", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      console.log(formData, "form data edit");

      console.log(res, "this is res");

      navigate("/dashboard-admin/hampers");
    });
  };

  console.log(formData, "form data edit");
  return (
    <div className="w-full relative">
      <ToastContainer />
      <h1 className="text-2xl font-bold">Edit Produk</h1>
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
            Nama Produk
          </label>
          <input
            type="text"
            id="nama_hampers"
            name="nama_hampers"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nama Produk"
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
            Harga Produk
          </label>
          <input
            type="number"
            id="harga_hampers"
            name="harga_hampers"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Harga Produk"
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
            Stok Produk
          </label>
          <input
            type="number"
            id="stok_hampers"
            name="stok_hampers"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Stok Produk"
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
            value={formData.deskripsi_hampers}
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
  );
};

export default EditHampers;
