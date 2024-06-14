import React, { useState, useEffect } from "react";
import { FaPrint } from "react-icons/fa";
import { cetakLaporanPenggunaanBahanBaku } from "../../api/laporan";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const LaporanPenggunaanBahanBaku = () => {
    const [data, setData] = useState([]);
    const [month, setMonth] = useState("01");
    const [year, setYear] = useState("2024");

    useEffect(() => {
        const fetchData = async () => {
            const res = await cetakLaporanPenggunaanBahanBaku(month, year);
            setData(res);
            console.log(res, "res");
        };
        fetchData();
    }, [month, year]);

    const handleMonthChange = (e) => {
        setMonth(e.target.value);
    };

    const handleYearChange = (e) => {
        setYear(e.target.value);
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
        const text = "LAPORAN PENGGUNAAN BAHAN BAKU";
        doc.text(text, 14, yPos);
        let textWidth = doc.getTextWidth(text);
        doc.line(14, yPos + 1, 14 + textWidth, yPos + 1);

        yPos += 10;
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text(`Periode : ${year}-${month}`, 14, yPos);

        yPos += 5;
        const date = new Date().toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });

        doc.text("Tanggal cetak : " + date, 14, yPos);

        yPos += 10;
        const tableColumn = ["Nama Bahan", "Satuan", "Jumlah Digunakan"];
        const tableRows = Object.entries(data).map(([key, item]) => [
            key,
            item.satuan_bahan,
            item.jumlah_digunakan,
        ]);

        doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            startY: yPos,
        });

        const fileDate = new Date().toISOString().split("T")[0];
        doc.save(`Laporan-penggunaan-bahan-baku-${fileDate}.pdf`);
    };

    return (
        <div className="container mx-auto py-10 px-10">
            <div className="overflow-x-auto">
                <div className="flex justify-between items-center py-2">
                    <h1 className="text-2xl font-bold">Laporan Penggunaan Bahan Baku</h1>
                    <div
                        onClick={generatePDF}
                        className="bg-blue-500 px-4 py-2 rounded-xl flex justify-center items-center gap-2 cursor-pointer hover:bg-blue-600"
                    >
                        <p>Print Laporan</p>
                        <FaPrint className="text-lg" />
                    </div>
                </div>
                <div className="flex space-x-4 mb-4">
                    <div>
                        <label className="block">Month</label>
                        <input
                            type="number"
                            min="1"
                            max="12"
                            value={month}
                            onChange={handleMonthChange}
                            className="border border-gray-300 px-2 py-1"
                        />
                    </div>
                    <div>
                        <label className="block">Year</label>
                        <input
                            type="number"
                            value={year}
                            onChange={handleYearChange}
                            className="border border-gray-300 px-2 py-1"
                        />
                    </div>
                </div>
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Nama Bahan</th>
                            <th className="border border-gray-300 px-4 py-2">Satuan</th>
                            <th className="border border-gray-300 px-4 py-2">Jumlah Digunakan</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {data && Object.keys(data).length > 0 ? (
                            Object.entries(data).map(([key, item], index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 px-4 py-2">{key}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.satuan_bahan}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.jumlah_digunakan}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="3"
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

export default LaporanPenggunaanBahanBaku;
