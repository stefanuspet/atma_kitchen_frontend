import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  GetPembelianBahanBaku,
  DeletePembelianBahanBaku,
} from "../../../api/pembelianbahanbaku";
import { Link } from "react-router-dom";

const PembelianBahanBaku = () => {
  const [dataPembelian, setDataPembelian] = useState([]);

  const fetchData = () => {
    GetPembelianBahanBaku()
      .then((res) => {
        setDataPembelian(res);
        console.log(res, "data");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    DeletePembelianBahanBaku(id)
      .then((res) => {
        toast.success("Data berhasil dihapus", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        fetchData();
      })
      .catch((err) => {
        toast.error("Data gagal dihapus", {
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

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container py-5">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold py-2">Pembelian Bahan Baku</h1>
        </div>
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Cari Bahan Baku"
            className="rounded-lg h-10 w-96 p-2 border border-gray-300"
          />
          <button className="bg-blue-500 p-2 rounded-lg ml-3">Search</button>
        </div>
      </div>
      <div className="flex justify-start mt-5">
        <Link
          to="/dashboard-manager/pembelian-bahan-baku/create"
          className="bg-green-500 p-2 rounded-lg text-white"
        >
          Beli Bahan Baku
        </Link>
      </div>
      <div className="w-full h-0.5 bg-white mt-2"></div>
      <div className="relative overflow-x-auto py-2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama Bahan Baku
              </th>
              <th scope="col" className="px-6 py-3">
                Jumlah Pembelian
              </th>
              <th scope="col" className="px-6 py-3">
                Total Harga
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal Pembelian
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {dataPembelian.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.nama_bahan_baku}
                </th>
                <td className="px-6 py-4">{item.jumlah_bahan_baku}</td>
                <td className="px-6 py-4">{item.total_harga}</td>
                <td className="px-6 py-4">{item.tanggal_pembelian}</td>
                <td className="px-6 py-4 flex justify-center gap-2">
                  <Link
                    to={`/dashboard-manager/pembelian-bahan-baku/edit/${item.id_pembelian_bahan_baku}`}
                    className="bg-blue-500 py-2 px-4 rounded-md text-white"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={(e) => handleDelete(item.id_pembelian_bahan_baku)}
                    className="bg-red-500 py-2 px-4 rounded-md text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PembelianBahanBaku;
