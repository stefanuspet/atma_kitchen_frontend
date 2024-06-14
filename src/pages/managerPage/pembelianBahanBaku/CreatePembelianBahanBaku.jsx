import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  GetBahanBaku,
  GetBahanBakuById,
  StorePembelianBahanBaku,
} from "../../../api/pembelianbahanbaku";

import { useNavigate } from "react-router-dom";

const CreatePembelianBahanBaku = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id_bahan_baku: "",
    jumlah_bahan_baku: "",
    total_harga: "",
    tanggal_pembelian: "",
  });
  const [bahanBaku, setBahanBaku] = useState([]);
  const [bahanBakuById, setBahanBakuById] = useState({});

  const fetchBahanBakuById = () => {
    GetBahanBakuById(formData.id_bahan_baku).then((res) => {
      setBahanBakuById(res);
      console.log(res);
    });
  };

  useEffect(() => {
    fetchBahanBakuById();
  }, [formData.id_bahan_baku]);

  useEffect(() => {
    GetBahanBaku().then((res) => {
      setBahanBaku(res);
    });
  }, []);

  useEffect(() => {
    if (formData.jumlah_bahan_baku && bahanBakuById.harga_satuan) {
      setFormData((prevData) => ({
        ...prevData,
        total_harga:
          parseInt(formData.jumlah_bahan_baku) *
          parseFloat(bahanBakuById.harga_satuan),
      }));
    }
  }, [formData.jumlah_bahan_baku, bahanBakuById.harga_bahan_baku]);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(formData, "form data create");
  const handleSubmit = (e) => {
    e.preventDefault();
    // date now
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const today = `${year}-${month}-${day}`;
    console.log(today, "today");

    formData.tanggal_pembelian = today;

    if (formData.jumlah_bahan_baku <= 0) {
      toast.error("Jumlah Bahan Baku tidak boleh kurang dari 1", {
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

    if (formData.total_harga <= 0) {
      toast.error("Total Harga tidak boleh kurang dari 1", {
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

    StorePembelianBahanBaku(formData).then((res) => {
      console.log(res, "res create pembelian bahan baku");
      if (res.success) {
        toast.success("Pembelian Bahan Baku berhasil ditambahkan", {
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
          navigate("/dashboard-manager/pembelian-bahan-baku");
        }, 2000);
        // handleClearForm();
      } else {
        toast.error("Pembelian Bahan Baku gagal ditambahkan", {
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

  return (
    <div className="container py-2 relative">
      <h1 className="font-bold text-2xl">Pembelian Bahan Baku</h1>
      <form onSubmit={handleSubmit} className="px-20 py-10">
        <div className="mb-5">
          <label
            htmlFor="penitip"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Bahan Baku
          </label>
          <select
            onChange={handleChange}
            value={formData.id_bahan_baku}
            name="id_bahan_baku"
            id="penitip"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Choose a Bahan Baku</option>
            {bahanBaku.map((item) => (
              <option key={item.id_bahan_baku} value={item.id_bahan_baku}>
                {item.nama_bahan_baku}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="jumlah_bahan_baku"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Jumlah Bahan Baku
          </label>
          <input
            type="number"
            id="jumlah_bahan_baku"
            name="jumlah_bahan_baku"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Jumlah Bahan Baku"
            required
            value={formData.jumlah_bahan_baku}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="total_harga"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Total Harga
          </label>
          <input
            type="number"
            id="total_harga"
            name="total_harga"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Total Harga"
            required
            value={formData.total_harga}
            onChange={handleChange}
            disabled
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg p-2.5 mt-5 w-full hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Beli Bahan Baku
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreatePembelianBahanBaku;
