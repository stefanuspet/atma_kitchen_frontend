import React, { useState, useEffect } from "react";
import HomePageLayout from "../Layout/HomePageLayout";
import { getTransaksi } from "../api/transaksi";

const Transaksi = () => {
  const [transaksi, setTransaksi] = useState([]);
  useEffect(() => {
    getTransaksi().then((res) => {
      setTransaksi(res);
    });
  }, []);

  console.log(transaksi, "transaksi");
  return (
    <HomePageLayout>
      <div className="container mx-auto w-full min-h-lvh flex justify-center items-center ">
        <div className="bg-white w-full min-h-lvh mt-44 rounded-xl p-10">
          <h1 className="font-bold text-3xl">Transaksi</h1>
          {transaksi.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center mt-5 bg-blue-950 text-white p-5"
            >
              <div>
                <p>Tanggal Transaksi :{item.trnas_tanggal_transaksi}</p>
                <p>Tanggal Ambil :{item.trnas_tanggal_ambil}</p>
                {item.detail_transaksi.map((item, index) => (
                  <div key={index}>
                    <p>Nama Produk : {item.produk.nama_produk}</p>
                  </div>
                ))}
                <p>Total Harga : {item.trans_total}</p>
              </div>
              <div>
                <button className="bg-orange-500 p-2 rounded-lg">
                  Cetak Nota
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HomePageLayout>
  );
};

export default Transaksi;
