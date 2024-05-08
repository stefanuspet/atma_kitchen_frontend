import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import { GetPenitipById, PenitipUpdate } from "../../../api/penitip";

const EditPenitip = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama_penitip: "",
    email_penitip: "",
    notelp_penitip: "",
  });

  useEffect(() => {
    GetPenitipById(param.id).then((res) => {
      setFormData({
        nama_penitip: res.nama_penitip,
        email_penitip: res.email_penitip,
        notelp_penitip: res.notelp_penitip,
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
    console.log(param.id, formData);

    PenitipUpdate(param.id, formData).then((res) => {
      if (res.success) {
        toast.success("Penitip berhasil diupdate", {
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
          navigate("/dashboard-manager/penitip");
        }, 2000);
        handleClearForm();
      } else {
        toast.error("Penitip gagal diupdate", {
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
      nama_penitip: "",
      email_penitip: "",
      notelp_penitip: "",
    });
  };

  return (
    <div className="w-full relative">
      <h1 className="text-2xl font-bold">Edit penitip</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="px-20 py-10"
      >
        <div className="mb-5">
          <label
            htmlFor="nama_penitip"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nama penitip
          </label>
          <input
            type="text"
            id="nama_penitip"
            name="nama_penitip"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nama penitip"
            required
            value={formData.nama_penitip}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email_penitip"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email penitip
          </label>
          <input
            type="email"
            id="email_penitip"
            name="email_penitip"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email penitip"
            required
            value={formData.email_penitip}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="notelp_penitip"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nomor Telepon penitip
          </label>
          <input
            type="number"
            id="notelp_penitip"
            name="notelp_penitip"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nomor Telepon penitip"
            required
            value={formData.notelp_penitip}
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

export default EditPenitip;
