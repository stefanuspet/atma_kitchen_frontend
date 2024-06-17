import React, {useState} from 'react';
import {GetLaporanPresensiDanGajiPegawai,} from '../../../api/laporan';
import {GetPemasukanDanPengeluaranBulanan} from '../../../api/laporan';
import {GetRekapTransaksiPenitip,} from '../../../api/laporan';

const LaporanOwner = () => {
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
    <div className='p-4 bg-gray-900 text-white min-h-screen'>
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

export default LaporanOwner;
