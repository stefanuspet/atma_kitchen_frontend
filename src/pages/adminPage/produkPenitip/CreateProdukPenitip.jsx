import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { GetPenitip, ProdukPenitipCreate } from "../../../api/produkPenitip";
import { useNavigate } from "react-router-dom";

const CreateProdukPenitip = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama_produk_penitip: "",
    harga_produk_penitip: "",
    stok_produk_penitip: "",
    gambar_produk_penitip: null,
    id_penitip: "",
  });

  const [penitip, setPenitip] = useState([]);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

    console.log(formData, "form data dorp");
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      gambar_produk_penitip: e.target.files[0],
    }));
  };

  useEffect(() => {
    GetPenitip().then((res) => {
      setPenitip(res);
    });
  }, []);

  const handleClearForm = () => {
    setFormData({
      nama_produk_penitip: "",
      harga_produk_penitip: "",
      stok_produk_penitip: "",
      gambar_produk_penitip: null,
      id_penitip: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    ProdukPenitipCreate(formData).then((res) => {
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
      if (formData.harga_produk_penitip <= 0) {
        toast.error("Harga tidak boleh kurang dari 1", {
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
        toast.success("Produk Penitip berhasil ditambahkan", {
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
          navigate("/dashboard-admin/produk-penitip");
        }, 2000);
        handleClearForm();
      } else {
        toast.error("Produk gagal ditambahkan", {
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
    console.log(formData);
  };

  console.log("formdatat", formData);

  return (
    <>
      <div className="w-full relative">
        <h1 className="text-2xl font-bold">Create Produk Penitip</h1>
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
              placeholder="Nama Produk penitip"
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
              Harga Produk
            </label>
            <input
              type="number"
              id="harga_produk_penitip"
              name="harga_produk_penitip"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Harga Produk"
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
              Stok Produk
            </label>
            <input
              type="number"
              id="stok_produk_penitip"
              name="stok_produk_penitip"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Stok Produk"
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
              Gambar Produk
            </label>
            <input
              type="file"
              id="gambar_produk_penitip"
              name="gambar_produk_penitip"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Gambar Produk Penitip"
              accept="image/*"
              required
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
    </>
  );
};

export default CreateProdukPenitip;
