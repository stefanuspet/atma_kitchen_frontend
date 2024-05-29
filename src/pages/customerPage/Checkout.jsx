import React, { useState, useEffect } from "react";
import HomePageLayout from "../../Layout/HomePageLayout";

const Checkout = () => {
  const [data, setData] = useState([]);
  const [jenisPengiriman, setJenisPengiriman] = useState([
    { id: 1, nama: "Pickup" },
    { id: 2, nama: "Delivery" },
    { id: 3, nama: "Ojol" },
  ]);

  const [metodePembayaran, setMetodePembayaran] = useState([
    { id: 1, nama: "Transfer" },
    { id: 2, nama: "Cash" },
  ]);
  return (
    <HomePageLayout>
      <div className="constainer mx-auto w-full min-h-lvh mt-44 px-36">
        <div className="bg-white bg-opacity-90 w-full p-8 rounded-lg ">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <p>Daftar Produk Yang akan di checkout</p>
          <div className="flex justify-stretch items-center mt-5">
            <div className="w-full h-44 bg-[#1d1d5e] rounded-lg text-[#AD773D]">
              <div className="flex items-center p-4 gap-10 justify-between w-full">
                <div className="w-36 h-36">
                  <img
                    src="https://images.unsplash.com/photo-1612833943307-4b3b3b3b3b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjI4MzV8MHwxfGFsbHwxfHx8fHx8fHx8fHwxNjEyNzYwNjYw&ixlib=rb-1.2.1&q=80&w=400"
                    alt=""
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Nama Produk</h1>
                  <p className="text-lg">1000000</p>
                  {/* {item.loyang == "setengah" ? (
                    <p className="text-lg">Rp. 100000</p>
                  ) : (
                    <p className="text-lg">Rp. 1000000</p>
                  )} */}
                  <p className="text-lg">Produk 1 Loyang</p>
                </div>
                <div>
                  <p className="font-semibold p-2">Jumlah Produk Yang dibeli</p>
                  <div className="flex items-center p-2 bg-slate-50 bg-opacity-15 w-fit mx-auto rounded-lg">
                    <span className="mx-4 text-xl font-bold">
                      {/* {item.jumlah_produk} */}X 20
                    </span>
                  </div>
                </div>
                {/* harga */}
                <div>
                  <p className="text-lg">Rp 1200000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-orange-400 rounded-lg overflow-hidden mt-10">
            <div className="mt-5 w-full  text-[#1d1d5e] p-10 ">
              <div className="flex w-full justify-between gap-10 items-center">
                <form action="" className="w-1/2">
                  <div className="mb-5">
                    <label
                      for="tanggal_ambil"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tanggal Ambil
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="metode_pengiriman"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Jenis Pengiriman
                    </label>
                    <select
                      name="metode_pengiriman"
                      id="metode_pengiriman"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    >
                      <option value="">Jenis Pengiriman</option>
                      {/* maps metode pengirman */}
                      {jenisPengiriman.map((item) => (
                        <option value={item.id}>{item.nama}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="Jenis_Pengiriman"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Metode Pembayaran
                    </label>
                    <select
                      name=""
                      id=""
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    >
                      <option value="">Metode Pembayaran</option>
                      {/* map */}
                      {metodePembayaran.map((item) => (
                        <option value={item.id}>{item.nama}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-5">
                    <label
                      for="tanggal_ambil"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Poin Yang akan digunakan
                    </label>
                    <input
                      type="number"
                      id="poin"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      required
                    />
                  </div>
                </form>
                <div className="bg-white bg-opacity-65 w-1/2 p-5 h-fit rounded-lg">
                  <h1 className="text-center text-xl font-bold">Informasi</h1>
                  <div className="p-5">
                    <p>Poin Anda Saat ini : 100</p>
                    <p>Kouta Produk Pada tanggal Yang anda pilih : </p>
                    <p>Perolehan Poin Dari pesanan ini : </p>
                  </div>
                </div>
              </div>
              <hr className="border-[#1d1d5e] pb-5 mt-5" />
              <div>
                <h1 className="font-bold text-2xl">Rincian Pesanan</h1>
                <div className="py-3 text-xl font-medium">
                  <p>Tanggal Ambil : 12-12-2024</p>
                  <p>Subtotal Produk : 10000</p>
                  <p>potongan Poin : 10000</p>
                  <p>Metode Pembayaran : Transfer</p>
                  <p>Jenis Pengiriman : Pickup</p>
                  <p>Total Pembayaran : 10000</p>
                </div>
              </div>
            </div>
            <div className="bg-orange-500 w-full p-10">
              <div className="flex justify-end items-center gap-10">
                <h1 className="font-bold text-3xl">Total Harga : Rp 200.000</h1>
                <button className="bg-blue-950 py-2 px-4 rounded-xl text-white">
                  Buat Pesanan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomePageLayout>
  );
};

export default Checkout;
