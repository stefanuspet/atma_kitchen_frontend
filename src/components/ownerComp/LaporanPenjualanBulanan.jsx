import React, { useState, useEffect } from "react";
import { FaPrint } from "react-icons/fa";
import { cetakLaporanPenjualanBulanan } from "../../api/laporan";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const LaporanPenjualanBulanan = () => {
  const [data, setData] = useState([]);
  const [tahun, setTahun] = useState({
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

  useEffect(() => {
    const fetchData = () => {
      cetakLaporanPenjualanBulanan().then((res) => {
        setData(res);
        console.log(res, "res");
      });
    };
    fetchData();
  }, []);

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
    const tableColumn = ["Bulan", "Jumlah Transaksi", "Total Uang"];
    const tableRows = [
      ...data.map((item) => [
        item._id.month,
        item.totalTransactions,
        item.totalAmount,
      ]),
    ];

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: yPos,
    });
    const fileDate = new Date().toISOString().split("T")[0];
    doc.save(`Laporan-penjualan-bulanan-${fileDate}.pdf`);
  };

  return (
    <div className="container mx-auto py-10 px-10">
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center py-2">
          <h1 className="text-2xl font-bold">Laporan Penjualan Bulanan</h1>
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
              <th className="border border-gray-300 px-4 py-2">Bulan</th>
              <th className="border border-gray-300 px-4 py-2">Jumlah Transaksi</th>
              <th className="border border-gray-300 px-4 py-2">Total Uang</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{item._id.month}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.totalTransactions}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.totalAmount}</td>
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

export default LaporanPenjualanBulanan;