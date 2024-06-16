import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import {
  JarakPengirimanUpdate,
  getJarakPengirimanById,
} from "../../../api/jarakPengiriman";

const EditJarakPengiriman = () => {
  const param = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    jarak: 0,
    harga: 0,
  });

  const id = param.id;

  useEffect(() => {
    getJarakPengirimanById(id).then((res) => {
      setFormData({
        jarak: res.jarak,
        harga: res.ongkir,
      });
    });
  }, []);

  const calculatePrice = (jarak) => {
    if (jarak <= 5) {
      return 10000;
    } else if (jarak <= 10) {
      return 15000;
    } else if (jarak <= 15) {
      return 20000;
    } else if (jarak > 15) {
      return 25000;
    }
    {
      return 0;
    }
  };

  //   const handleChange = (e) => {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [e.target.name]: e.target.value,
  //     }));
  //   };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      harga:
        name === "jarak" ? calculatePrice(parseFloat(value)) : prevData.harga,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    JarakPengirimanUpdate(id, formData)
      .then((res) => {
        toast.success("Jarak Pengiriman berhasil diupdate", {
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
          navigate("/dashboard-admin/jarak-pengiriman");
        }, 2000);
      })
      .catch((err) => {
        toast.error("Gagal Update Jarak Pengiriman", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  return (
    <div className="w-full relative">
      <h1 className="text-2xl font-bold">Edit Jarak Pengiriman</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="px-20 py-10"
      >
        <div className="mb-5">
          <label
            htmlFor="jarak"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Jarak (km)
          </label>
          <input
            type="number"
            id="jarak"
            name="jarak"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Jarak"
            required
            value={formData.jarak}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="harga"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Harga
          </label>
          <input
            type="number"
            id="harga"
            name="harga"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Harga"
            readOnly
            value={formData.harga}
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

export default EditJarakPengiriman;
