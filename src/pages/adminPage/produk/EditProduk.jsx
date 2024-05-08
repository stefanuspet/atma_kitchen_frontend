import React, { useEffect, useState } from "react";
import { ProdukUpdate, getProdukById } from "../../../api/produk";
import { ToastContainer, toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

const EditProduk = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama_produk: "",
    harga_produk: "",
    stok_produk: "",
    image: null,
  });
  const id = param.id;
  useEffect(() => {
    getProdukById(id).then((res) => {
      setFormData({
        nama_produk: res.nama_produk,
        harga_produk: res.harga_produk,
        stok_produk: res.stok_produk,
      });
    });
  }, []);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDatatoSend = new FormData();
    formDatatoSend.append("nama_produk", formData.nama_produk);
    formDatatoSend.append("harga_produk", formData.harga_produk);
    formDatatoSend.append("stok_produk", formData.stok_produk);
    if (formData.image) {
      formDatatoSend.append("image", formData.image);
    }

    ProdukUpdate(param.id, formDatatoSend).then((res) => {
      if (res.success) {
        toast.success("Produk berhasil diupdate", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/dashboard-admin/produk");
        }, 2000);
        handleClearForm();
      } else {
        toast.error("Produk gagal diupdate", {
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
    });
  };

  // handleclear form
  const handleClearForm = () => {
    setFormData({
      nama_produk: "",
      harga_produk: "",
      stok_produk: "",
    });

    document.getElementById("image").value = "";
  };
  return (
    <div className="w-full relative">
      <h1 className="text-2xl font-bold">Edit Produk</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="px-20 py-10"
      >
        <div className="mb-5">
          <label
            htmlFor="nama_produk"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nama Produk
          </label>
          <input
            type="text"
            id="nama_produk"
            name="nama_produk"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nama Produk"
            required
            value={formData.nama_produk}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="harga_produk"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Harga Produk
          </label>
          <input
            type="number"
            id="harga_produk"
            name="harga_produk"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Harga Produk"
            required
            value={formData.harga_produk}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="stok_produk"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Stok Produk
          </label>
          <input
            type="number"
            id="stok_produk"
            name="stok_produk"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Stok Produk"
            required
            value={formData.stok_produk}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="gambar_produk"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Gambar Produk
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Gambar Produk"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg p-2.5 mt-5 w-full hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default EditProduk;
