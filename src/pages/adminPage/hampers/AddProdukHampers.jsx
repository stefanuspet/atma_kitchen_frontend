import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { IoMdArrowRoundBack } from "react-icons/io";
import {
  HampersDetail,
  HampersProduk,
  HampersProdukDelete,
} from "../../../api/hampers";
import { GetProduk } from "../../../api/produk";
import { useParams, useNavigate, NavLink } from "react-router-dom";

const AddProdukHampers = () => {
  const param = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id_produk: "",
    id_hampers: param.id,
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const [produk, setProduk] = useState([{}]);

  const [data, setData] = useState([]);

  const fetchHampers = async () => {
    try {
      const response = await HampersDetail(param.id);

      setData(response);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data, "data hampers");

  const fetchProduk = async () => {
    try {
      const response = await GetProduk();
      setProduk(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduk = (id) => {
    HampersProdukDelete(param.id, id).then((res) => {
      console.log(res, "delete produk dari hampers");
      if (res.success) {
        toast.success("Berhasil menghapus produk dari hampers", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        fetchHampers();
        fetchProduk();
        // refresh page
      } else {
        toast.error("Gagal menghapus produk dari hampers", {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    HampersProduk(param.id, formData).then((res) => {
      if (res.success) {
        toast.success("Berhasil menambahkan produk ke hampers", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        fetchHampers();
        fetchProduk();
        // refresh page
        navigate(`/dashboard-admin/hampers/createproduk/${param.id}`);
      } else {
        toast.error("Gagal menambahkan produk ke hampers", {
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
    });
  };

  useEffect(() => {
    fetchHampers();
    fetchProduk();
  }, []);

  return (
    <>
      <div className="w-full">
        <ToastContainer />
        <NavLink
          to={`/dashboard-admin/hampers`}
          className="inline-flex items-center text-2xl mb-10 text-red-500 gap-3"
        >
          <IoMdArrowRoundBack /> <p>Kembali</p>
        </NavLink>
        <h1 className="text-2xl font-bold">Add Produk To Hampers</h1>
        <div className="bg-gray-700 rounded-md text-left w-96 px-10 py-5 mt-10 text-xl">
          <p className="mb-2">Nama Hampers : {data.nama_hampers}</p>
          <p className="mb-2">Harga Hampers : {data.harga_hampers}</p>
          <p className="mb-2">Deskripsi Hampers : {data.deskripsi_hampers}</p>
          <p className="mb-2">Stok Hampers : {data.stok_hampers}</p>
          <p className="mb-2">Tanggal : {data.tanggal_pembuatan_hampers}</p>
        </div>
        <div className="bg-gray-800 p-5 mt-10 rounded-lg">
          <h1 className="text-xl font-bold text-red-500 pb-4">
            produk dalam hampers
          </h1>
          <ul>
            {data.produk &&
              data.produk.map((item, index) => (
                <li key={index} className="flex items-center gap-10 py-5">
                  <h1>Nama Produk :{item.nama_produk} </h1>
                  <button
                    className="bg-red-400 rounded-lg p-2"
                    onClick={(e) => handleDeleteProduk(item.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <div className="mt-10">
          <h1 className="text-xl font-bold pb-5">Masukkan Produk</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="id_produk">Pilih Produk</label>
            <select
              onChange={handleChange}
              value={formData.id_produk}
              name="id_produk"
              id="produk"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Choose a penitip</option>
              {produk.map((item, index) => (
                <option key={index} value={item.id_produk}>
                  {item.nama_produk}{" "}
                </option>
              ))}
            </select>
            <input
              type="submit"
              value="Tambah Produk"
              className="bg-blue-500 text-white p-2 rounded-md mt-2"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProdukHampers;
