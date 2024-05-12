import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { GetKaryawan, GajiCreate } from "../../../api/gaji";
import { useNavigate } from "react-router-dom";

const CreateGaji = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    honor_harian: "",
    bonus: "",
    total_gaji: "",
    tanggal_gaji: "",
    id_karyawan: "",
  });
  console.log(formData, "hadeh");

  const [karyawan, setKaryawan] = useState([]);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

    console.log(formData, "form data drop");
  };

  useEffect(() => {
    GetKaryawan().then((res) => {
      setKaryawan(res);
    });
  }, []);

  const handleClearForm = () => {
    setFormData({
        honor_harian: "",
        bonus: "",
        total_gaji: "",
        tanggal_gaji: "",
        id_karyawan: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    GajiCreate(formData).then((res) => {
      if (res.success) {
        toast.success("Gaji berhasil ditambahkan", {
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
          navigate("/dashboard-owner/gaji");
        }, 2000);
        handleClearForm();
      } else {
        toast.error("Gaji gagal ditambahkan", {
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

  console.log("formdata", formData);

  return (
    <>
      <div className="w-full relative">
        <h1 className="text-2xl font-bold">Create Gaji</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="px-20 py-10"
        >
          <div className="mb-5">
            <label
              htmlFor="honor_harian"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Honor Harian
            </label>
            <input
              type="number"
              id="honor_harian"
              name="honor_harian"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Honor Harian"
              required
              value={formData.honor_harian}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="bonus"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Bonus
            </label>
            <input
              type="number"
              id="bonus"
              name="bonus"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Bonus"
              required
              value={formData.bonus}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="total_gaji"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Total Gaji
            </label>
            <input
              type="number"
              id="total_gaji"
              name="total_gaji"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Total Gaji"
              required
              value={formData.total_gaji}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="tanggal_gaji"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tanggal Gaji
            </label>
            <input
              type="date"
              id="tanggal_gaji"
              name="tanggal_gaji"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tanggal Gaji"
              required
              value={formData.tanggal_gaji}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="karyawan"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Karyawan
            </label>
            <select
              onChange={handleChange}
              value={formData.id_karyawan}
              name="id_karyawan"
              id="karyawan"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Choose a penitip</option>
              {karyawan.map((item, index) => (
                <option key={index} value={item.id_karyawan}>
                  {item.nama_karyawan}{" "}
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

export default CreateGaji;