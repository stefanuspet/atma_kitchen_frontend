import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import {
  ProdukPenitipUpdate,
  GetProdukPenitipById,
  GetPenitip,
} from "../../../api/produkPenitip";

const EditProdukPenitip = () => {
  const param = useParams();
  const navigate = useNavigate();

  const [penitip, setPenitip] = useState([]);

  const [formData, setFormData] = useState({
    nama_produk_penitip: "",
    harga_produk_penitip: "",
    stok_produk_penitip: "",
    gambar_produk_penitip: null,
    id_penitip: "",
  });

  const id = param.id;

  useEffect(() => {
    GetProdukPenitipById(id).then((res) => {
      setFormData({
        nama_produk_penitip: res.nama_produk,
        harga_produk_penitip: res.harga_produk,
        stok_produk_penitip: res.stok_produk,
        gambar_produk_penitip: res.gambar_produk_penitip,
        id_penitip: res.id_penitip,
      });
      console.log(res, "info res");
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
      gambar_produk_penitip: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.stok_produk_penitip <= 0) {
      toast.error("Stok tidak boleh kurang dari 1", {
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
    // harga_produk_penitip <= 0
    if (formData.harga_produk_penitip < 0) {
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

    ProdukPenitipUpdate(id, formData).then((res) => {
      console.log(formData, "form data submit");

      if (res.success) {
        toast.success("Produk Penitip berhasil diupdate", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/dashboard-admin/produk-penitip");
      } else {
        toast.error("Gagal update produk_penitip penitip", {
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

  console.log(formData, "form data");

  useEffect(() => {
    GetPenitip().then((res) => {
      setPenitip(res);
    });
  }, []);
  return (
    <div className="w-full relative">
      <h1 className="text-2xl font-bold">Edit Produk Penitip</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="px-20 py-10"
      >
        <div className="mb-5">
          <label
            htmlFor="nama_produk_penitip"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nama Produk penitip
          </label>
          <input
            type="text"
            id="nama_produk_penitip"
            name="nama_produk_penitip"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nama Produk_penitip"
            required
            value={formData.nama_produk_penitip}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="harga_produk_penitip"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Harga Produk_penitip
          </label>
          <input
            type="number"
            id="harga_produk_penitip"
            name="harga_produk_penitip"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Harga Produk_penitip"
            required
            value={formData.harga_produk_penitip}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="stok_produk_penitip"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Stok Produk_penitip
          </label>
          <input
            type="number"
            id="stok_produk_penitip"
            name="stok_produk_penitip"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Stok Produk_penitip"
            required
            value={formData.stok_produk_penitip}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="gambar_produk_penitip"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Gambar Produk_penitip
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Gambar Produk_penitip"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <label
            htmlFor="penitip"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Penitip
          </label>
          <select
            onChange={handleChange}
            value={formData.id_penitip}
            name="id_penitip"
            id="penitip"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Choose a penitip</option>
            {penitip.map((item, index) => (
              <option key={index} value={item.id_penitip}>
                {item.nama_penitip}{" "}
              </option>
            ))}
          </select>
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

export default EditProdukPenitip;
