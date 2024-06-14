import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { StorePengeluaranLain } from "../../../api/pengeluaranlain";
import { useNavigate } from "react-router-dom";

const CreatePengeluaranLain = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama_pengeluaran: "",
    total_pengeluaran: "",
    tanggal_pengeluaran: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDatatoSend = new FormData();
    formDatatoSend.append("nama_pengeluaran", formData.nama_pengeluaran);
    formDatatoSend.append("total_pengeluaran", formData.total_pengeluaran);
    formDatatoSend.append("tanggal_pengeluaran", formData.tanggal_pengeluaran);

    StorePengeluaranLain(formDatatoSend).then((res) => {
      if (res.success) {
        toast.success("Pengeluaran Lain berhasil ditambahkan", {
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
          navigate("/dashboard-manager/pengeluaranlain");
        }, 2000);
        handleClearForm();
      } else {
        toast.error("Pengeluaran Lain gagal ditambahkan", {
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

  const handleClearForm = () => {
    setFormData({
      nama_pengeluaran: "",
      total_pengeluaran: "",
      tanggal_pengeluaran: "",
    });
  };

  return (
    <div className="w-full relative">
      <h1 className="text-2xl font-bold">Create Pengeluaran Lain</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="px-20 py-10"
      >
        <div className="mb-5">
          <label
            htmlFor="nama_pengeluaran"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nama Pengeluaran
          </label>
          <input
            type="text"
            id="nama_pengeluaran"
            name="nama_pengeluaran"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nama Pengeluaran"
            required
            value={formData.nama_pengeluaran}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="total_pengeluaran"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Total Pengeluaran
          </label>
          <input
            type="number"
            id="total_pengeluaran"
            name="total_pengeluaran"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Total Pengeluaran"
            required
            value={formData.total_pengeluaran}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="tanggal_pengeluaran"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tanggal
          </label>
          <input
            type="date"
            id="tanggal_pengeluaran"
            name="tanggal_pengeluaran"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Tanggal Pengeluaran"
            required
            value={formData.tanggal_pengeluaran}
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

export default CreatePengeluaranLain;