import React, { useEffect, useState } from "react";
import { listPesananHariIni } from "../../../api/transaksi";

const PemrosesanPesanan = () => {
  const [dateNow, setDateNow] = useState("");
  const [listPesanan, setListPesanan] = useState([]);

  //   get list pesanan
  useEffect(() => {
    listPesananHariIni().then((res) => {
      setListPesanan(res.data);
    });
  }, []);
  console.log("data :", listPesanan);

  useEffect(() => {
    const currentDate = new Date();

    const date = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const formattedDate = `${date}/${month}/${year}`;

    setDateNow(formattedDate);

    console.log("dateNow changed to:", formattedDate);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div>
        <h1 className="text-2xl font-extrabold py-3 ">Pemrosesan Pesanan</h1>
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th colSpan={2} className="text-xl">
                List Pesanan Harian
              </th>
            </tr>
            <tr>
              <th colSpan={2} className="font-normal">
                Tanggal : {dateNow}
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="w-full">
              <td className="border border-gray-300 px-4 py-2 w-1/2">
                <h1 className="text-left font-bold">List Pesanan</h1>
                {listPesanan.map((item, index) => (
                  <div
                    key={index}
                    className="card bg-blue-950 bg-opacity-40 text-start p-2 rounded-lg flex justify-between items-center my-2"
                  >
                    <div>
                      <p>No Nota : {item.no_nota}</p>
                      <p>Nama : {item.nama_customer}</p>
                      <p>Jam : {item.jam_ambil.substring(0, 5)}</p>
                      {/* get produk from array */}
                      {Array.isArray(item.produk) ? (
                        // Jika produk adalah array, ambil semua produk
                        <div>
                          <p>Produk:</p>
                          {item.produk.map((produk, index) => (
                            <p key={index}>{produk.nama_produk}</p>
                          ))}
                        </div>
                      ) : (
                        // Jika produk adalah objek tunggal, ambil langsung
                        <p>Produk: {item.produk.nama_produk}</p>
                      )}
                    </div>
                    <button className="bg-green-600 w-fit h-fit p-2 rounded-lg">
                      Proses Pesanan
                    </button>
                  </div>
                ))}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-start">
                <h1 className="text-left font-bold">Rekap</h1>
                {listPesanan.map((item, index) =>
                  Array.isArray(item.produk) ? (
                    // Jika produk adalah array, ambil semua produk
                    item.produk.map((produk, produkIndex) => (
                      <p key={produkIndex}>{produk.nama_produk}</p>
                    ))
                  ) : (
                    // Jika produk adalah objek tunggal, ambil langsung
                    <p key={index}>{item.produk.nama_produk}</p>
                  )
                )}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <h1 className="text-left font-bold">Bahan :</h1>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-start">
                <h1 className="text-left font-bold">Rekap Bahan</h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PemrosesanPesanan;
