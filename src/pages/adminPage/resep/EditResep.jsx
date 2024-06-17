import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import {
  ResepUpdate,
  getResepById,
  GetProduk,
  GetBahanBaku,
} from "../../../api/resep";

const EditResep = () => {
  const param = useParams();
  const navigate = useNavigate();

  const [produk, setProduk] = useState([]);
  const [bahan_baku, setBahanBaku] = useState([]);

  const [formData, setFormData] = useState({
    takaran: "",
    id_produk: "",
    id_bahan_baku: "",
  });

  const id = param.id;

  useEffect(() => {
    getResepById(id).then((res) => {
      setFormData({
        takaran: res.takaran,
        id_produk: res.id_produk,
        id_bahan_baku: res.id_bahan_baku,
      });
      console.log(res, "info res");
    });
  }, []);

  useEffect(() => {
    GetProduk().then((res) => {
      setProduk(res);
    });
  }, []);

  useEffect(() => {
    GetBahanBaku().then((res) => {
      setBahanBaku(res);
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

    ResepUpdate(id, formData).then((res) => {
      console.log(formData, "form data submit");

      if (res.success) {
        toast.success("Resep berhasil diupdate", {
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
          navigate("/dashboard-admin/resep");
        }, 2000);
        handleClearForm();
      } else {
        toast.error("Resep gagal diupdate", {
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

  // handleclear form
  const handleClearForm = () => {
    setFormData({
      takaran: "",
      id_produk: "",
      id_bahan_baku: "",
    });
  };

  return (
    <div className="w-full relative">
      <h1 className="text-2xl font-bold">Edit Resep</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="px-20 py-10"
      >
        <div>
          <label
            htmlFor="produk"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Produk
          </label>
          <select
            onChange={handleChange}
            value={formData.id_produk}
            name="id_produk"
            id="produk"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Choose a produk</option>
            {produk.map((item, index) => (
              <option key={index} value={item.id_produk}>
                {item.nama_produk}{" "}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="takaran"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Takaran
          </label>
          <input
            type="number"
            id="takaran"
            name="takaran"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Takaran"
            required
            value={formData.takaran}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="bahan_baku"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Bahan Baku
          </label>
          <select
            onChange={handleChange}
            value={formData.id_bahan_baku}
            name="id_bahan_baku"
            id="bahan_baku"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Choose a Bahan Baku</option>
            {bahan_baku.map((item, index) => (
              <option key={index} value={item.id_produk}>
                {item.nama_produk}{" "}
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

export default EditResep;
