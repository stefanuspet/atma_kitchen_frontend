import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BahanbakuUpdate, getBahanbakuById } from "../../../api/bahanbaku";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditBahanBaku = () => {
  const navigate = useNavigate();
  const param = useParams();
  const [formData, setFormData] = useState({
    nama_bahan_baku: "",
    jumlah_tersedia: "",
    satuan_bahan: "",
    harga_satuan: "",
  });
  const id = param.id;
  useEffect(() => {
    getBahanbakuById(id).then((res) => {
      setFormData({
        nama_bahan_baku: res.nama_bahan_baku,
        harga_satuan: res.harga_satuan,
        jumlah_tersedia: res.jumlah_tersedia,
        satuan_bahan: res.satuan_bahan,
      });
    });
  }, []);

  console.log(formData, "form data edit");
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    BahanbakuUpdate(id, formData).then((res) => {
      if (res.success) {
        toast.success("Bahan Baku berhasil diupdate", {
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
          navigate("/dashboard-admin/bahanbaku");
        }, 2000);
        handleClearForm();
      } else {
        toast.error("Bahan Baku gagal diupdate", {
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
      nama_bahan_baku: "",
      harga_satuan: "",
      jumlah_tersedia: "",
      satuan_bahan: "",
    });
  };

  return (
    <div className="w-full relative">
      <h1 className="text-2xl font-bold">Edit Bahan Baku</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="px-20 py-10"
      >
        <div className="mb-5">
          <label
            htmlFor="bahan_baku"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nama Bahan Baku
          </label>
          <input
            type="text"
            id="nama_bahan_baku"
            name="nama_bahan_baku"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nama Bahan Baku"
            required
            value={formData.nama_bahan_baku}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="harga_satuan"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Harga Bahan Baku
          </label>
          <input
            type="number"
            id="harga_satuan"
            name="harga_satuan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Harga Bahan Baku"
            required
            value={formData.harga_satuan}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="jumlah_tersedia"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Stok Bahan Baku
          </label>
          <input
            type="number"
            id="jumlah_tersedia"
            name="jumlah_tersedia"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Stok Bahan Baku"
            required
            value={formData.jumlah_tersedia}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="satuan_bahan"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Satuan Bahan
          </label>
          <input
            type="number"
            id="satuan_bahan"
            name="satuan_bahan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Stok Bahan Baku"
            required
            value={formData.satuan_bahan}
            onChange={handleChange}
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

export default EditBahanBaku;
