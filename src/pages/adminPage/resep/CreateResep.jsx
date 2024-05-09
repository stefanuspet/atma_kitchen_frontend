import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ResepCreate } from "../../../api/resep";
import { useNavigate } from "react-router-dom";

const CreateResep = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    takaran: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    ProdukCreate(formData).then((res) => {
      if (res.success) {
        toast.success("Resep berhasil ditambahkan", {
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
        toast.error("Resep gagal ditambahkan", {
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

  // handleclear form
  const handleClearForm = () => {
    setFormData({
      takaran: "",
    });
  };

  return (
    <div className="w-full relative">
      <h1 className="text-2xl font-bold">Create Resep</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="px-20 py-10"
      >
        <div className="mb-5">
          <label
            htmlFor="takaran"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Takaran
          </label>
          <input
            type="text"
            id="takaran"
            name="takaran"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Takaran"
            required
            value={formData.takaran}
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

export default CreateResep;
