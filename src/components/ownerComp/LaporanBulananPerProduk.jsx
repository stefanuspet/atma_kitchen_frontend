import React, { useState, useEffect } from "react";
import { FaPrint } from "react-icons/fa";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import {
  cetakLaporanPerProdukMo,
  cetakLaporanPerProdukOW,
} from "../../api/produk";

const LaporanBulananPerProduk = () => {
  const [data, setData] = useState([]);
  const [bulan, setBulan] = useState({
    0: "Pilih Bulan",
    1: "Januari",
    2: "Februari",
    3: "Maret",
    4: "April",
    5: "Mei",
    6: "Juni",
    7: "Juli",
    8: "Agustus",
    9: "September",
    10: "Oktober",
    11: "November",
    12: "Desember",
  });

  const [formData, setFormData] = useState({
    bulan: "",
    tahun: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData, "formdata");

  const fetchData = () => {
    if (localStorage.getItem("abilities") === "OWNER") {
      cetakLaporanPerProdukOW(formData).then((res) => {
        setData(res);
        console.log(res, "res");
      });
    } else if (localStorage.getItem("abilities") === "MO") {
      cetakLaporanPerProdukMo(formData).then((res) => {
        setData(res);
        console.log(res, "res");
      });
    }
  };

  const getData = () => {
    if (formData.bulan && formData.tahun) {
      fetchData();
      console.log(data, "data");
    } else {
      alert("Pilih Bulan dan Tahun terlebih dahulu");
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    let yPos = 10;
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Atma Kitchen", 14, yPos);

    yPos += 10;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Jl. Centralpark No. 10 Yogyakarta", 14, yPos);

    yPos += 10;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    const text = "LAPORAN PENJUALAN BULANAN";
    doc.text(text, 14, yPos);
    let textWidth = doc.getTextWidth(text);
    doc.line(14, yPos + 1, 14 + textWidth, yPos + 1);

    doc.setFont("helvetica", "normal");

    doc.setFontSize(12);
    yPos += 10;
    // cek bulan convert form number to month
    doc.text("Bulan : " + bulan[formData.bulan], 14, yPos);

    yPos += 10;
    doc.text("Tahun : " + formData.tahun, 14, yPos);

    // get date 02 february 2002
    const date = new Date().toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    doc.setFontSize(12);
    yPos += 10;
    doc.text("Tanggal cetak : " + date, 14, yPos);

    yPos += 10;

    const tableColumn = [
      "Nama Produk",
      "Jumlah Terjual",
      "Total Harga",
      "Jumlah Uang",
    ];
    // count jumlah uang
    let total = 0;
    data.map((item) => {
      total += item.jumlah_uang;
    });

    const tableRows = [
      ...data.map((item) => [
        item.nama_produk,
        item.jumlah_produk,
        item.harga_produk,
        item.jumlah_uang,
      ]),
      ["", "", "Total", total],
    ];

    doc.autoTable(tableColumn, tableRows, { startY: yPos });
    doc.save("Laporan Penjualan Bulanan.pdf");
  };
  return (
    <div className="container mx-auto py-10 px-10">
      <div className="overflow-x-auto">
        <h1 className="text-2xl font-bold">Laporan Bulanan Per Produk</h1>
        <div className="flex justify-between items-center py-5">
          <div className="flex gap-3 justify-center items-center">
            <div className="">
              <label htmlFor="bulan" className="text-lg px-2">
                Bulan
              </label>
              <select
                onChange={handleChange}
                name="bulan"
                id="bulan"
                className="border border-gray-300 rounded-md bg-blue-900 px-2 py-1"
              >
                {Object.keys(bulan).map((item, index) => (
                  <option key={index} value={item}>
                    {bulan[item]}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <label htmlFor="tahun" className="text-lg px-2">
                Tahun
              </label>
              <input
                onChange={handleChange}
                type="number"
                name="tahun"
                id="tahun"
                className="border border-gray-300 bg-blue-900 rounded-md px-2 py-1"
              />
            </div>
            <div
              onClick={getData}
              className="bg-blue-500 px-4 py-2 rounded-xl flex justify-center items-center gap-2 cursor-pointer hover:bg-blue-600"
            >
              <p>Cari</p>
            </div>
          </div>
          <div
            onClick={generatePDF}
            className="bg-blue-500 px-4 py-2 rounded-xl flex justify-center items-center gap-2 cursor-pointer hover:bg-blue-600"
          >
            <p>Print Laporan</p>
            <FaPrint className="text-lg" />
          </div>
        </div>
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Produk</th>
              <th className="border border-gray-300 px-4 py-2">Kuantitas</th>
              <th className="border border-gray-300 px-4 py-2">Harga</th>
              <th className="border border-gray-300 px-4 py-2">Jumlah Uang</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.nama_produk}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.jumlah_produk}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.harga_produk}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.jumlah_uang}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="border border-gray-300 px-4 py-2 text-center"
                >
                  Data Kosong
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LaporanBulananPerProduk;
