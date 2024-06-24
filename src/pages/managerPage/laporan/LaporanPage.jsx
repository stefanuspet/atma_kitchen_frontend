import React, { useState, useEffect } from "react";
import { FaPrint } from "react-icons/fa";
import LaporanStokBahanBaku from "../../../components/managerComp/LaporanStokBahanBaku";
import LaporanBulananPerProduk from "../../../components/ownerComp/LaporanBulananPerProduk";
import { GetLaporanPresensiDanGajiPegawai } from '../../../api/laporan';
import { GetPemasukanDanPengeluaranBulanan } from '../../../api/laporan';
import { GetRekapTransaksiPenitip } from '../../../api/laporan';


const LaporanPage = () => {
  const [routerCom, setRouterCom] = useState(true);

  useEffect(() => {
    console.log("routerCom changed to:", routerCom);
  });

  const handleChangerRoute = (e) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    if (id === "laporanBulananPerProduk") {
      setRouterCom(true);
    } else if (id === "laporanStokBahanBaku") {
      setRouterCom(false);
    }
  };
  const [pemasukanPengeluaranMonth, setPemasukanPengeluaranMonth] = useState(
    () => {
      const current = new Date();
      const year = current.getFullYear();
      const month = current.getMonth() + 1;
      return `${year}-${month.toString().padStart(2, '0')}`;
    },
  );
  const [transaksiPenitipMonth, setTransaksiPenitipMonth] = useState(() => {
    const current = new Date();
    const year = current.getFullYear();
    const month = current.getMonth() + 1;
    return `${year}-${month.toString().padStart(2, '0')}`;
  });

  const generatePresensiGajiReport = () => {
    GetLaporanPresensiDanGajiPegawai().then(() => {
      console.log('success');
    });
  };

  const generatePemasukanPengeluaranReport = () => {
    const [year, month] = pemasukanPengeluaranMonth.split('-');
    GetPemasukanDanPengeluaranBulanan(month, year).then(() => {
      console.log('success');
    });
  };

  const generateTransaksiPenitipReport = () => {
    const [year, month] = transaksiPenitipMonth.split('-');
    GetRekapTransaksiPenitip(month, year).then(() => {
      console.log('success');
    });
  };
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-items-center">
        <div className="cursor-pointer hover:bg-red-700 bg-red-600 w-64 h-24 rounded-lg text-white flex justify-between px-5 gap-2 items-center">
          <h1 className="font-medium text-lg">
            Cetak Semua Laporan Penjualan Bulanan
          </h1>
          <FaPrint className="text-2xl" />
        </div>
        <div
          id="laporanBulananPerProduk"
          onClick={handleChangerRoute}
          className="cursor-pointer hover:bg-yellow-700 bg-yellow-600 w-64 h-24 rounded-lg text-white flex justify-between px-5 gap-2 items-center"
        >
          <h1 className="font-medium text-lg">
            Cetak Laporan Bulanan Per Produk
          </h1>
          <FaPrint className="text-2xl" />
        </div>
        <div
          onClick={handleChangerRoute}
          id="laporanStokBahanBaku"
          className="cursor-pointer hover:bg-green-700 bg-green-600 w-64 h-24 rounded-lg text-white flex justify-between px-5 gap-2 items-center"
        >
          <h1 className="font-medium text-lg">Cetak Laporan Stok Bahan Baku</h1>
          <FaPrint className="text-2xl" />
        </div>
        <div className="cursor-pointer hover:bg-blue-700 bg-blue-600 w-64 h-24 rounded-lg text-white flex justify-between px-5 gap-2 items-center">
          <h1 className="font-medium text-lg">
            Cetak Laporan penggunaan bahan baku per periode
          </h1>
          <FaPrint className="text-2xl" />
        </div>
      </div>
      {routerCom ? <LaporanBulananPerProduk /> : <LaporanStokBahanBaku />}
      {/* Laporan presensi dan gaji pegawai bulanan */}
      <div className='mb-4'>
        <h2 className='text-lg font-bold text-blue-400 mb-2'>
          Laporan Presensi dan Gaji Pegawai Bulanan
        </h2>
        <button
          onClick={generatePresensiGajiReport}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          Generate Report
        </button>
      </div>
      <hr className='my-4 border-gray-700' />

      {/* Laporan pemasukan dan pengeluaran bulanan */}
      <div className='mb-4'>
        <h2 className='text-lg font-bold text-green-400 mb-2'>
          Laporan Pemasukan dan Pengeluaran Bulanan
        </h2>
        <input
          type='month'
          value={pemasukanPengeluaranMonth}
          onChange={(e) => setPemasukanPengeluaranMonth(e.target.value)}
          className='block mb-2 px-4 py-2 bg-gray-700 text-white rounded'
        />
        <button
          onClick={generatePemasukanPengeluaranReport}
          className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
        >
          Generate Report
        </button>
      </div>
      <hr className='my-4 border-gray-700' />

      {/* Laporan rekap transaksi penitip */}
      <div>
        <h2 className='text-lg font-bold text-red-400 mb-2'>
          Laporan Rekap Transaksi Penitip
        </h2>
        <input
          type='month'
          value={transaksiPenitipMonth}
          onChange={(e) => setTransaksiPenitipMonth(e.target.value)}
          className='block mb-2 px-4 py-2 bg-gray-700 text-white rounded'
        />
        <button
          onClick={generateTransaksiPenitipReport}
          className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
        >
          Generate Report
        </button>
      </div>

    </div>
  );
};

export default LaporanPage;
