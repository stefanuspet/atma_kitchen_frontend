import React, {useEffect, useState} from 'react';
import {
  GetPenarikanSaldo,
  UpdateTransferedStatus,
} from '../../../api/penarikansaldo';
import {ToastContainer, toast} from 'react-toastify';

function PenarikanSaldo() {
  const [penarikanSaldo, setPenarikanSaldo] = useState([]);

  function fetchData() {
    GetPenarikanSaldo()
      .then((res) => {
        setPenarikanSaldo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleConfirm = (id) => {
    UpdateTransferedStatus(id).then((res) => {
      if (res.success) {
        toast.success('Transfer berhasil dikonfirmasi', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        fetchData();
      } else {
        toast.error('Transfer gagal dikonfirmasi', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      }
    });
  };

  const getButtonClasses = (status) => {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-500 hover:bg-yellow-600 text-white';
      case 'SUCCESS':
        return 'bg-green-500 hover:bg-green-600 text-white';
      case 'FAILED':
        return 'bg-red-500 hover:bg-red-600 text-white';
      default:
        return 'bg-gray-500 hover:bg-gray-600 text-white';
    }
  };

  return (
    <>
      <div className='p-4 bg-gray-800'>
        <div className='overflow-x-auto'>
          <table className='min-w-full'>
            <thead>
              <tr>
                <th className='border-b-2 border-gray-700 bg-gray-900 p-4 text-left text-xs text-gray-300 uppercase tracking-wider'>
                  ID
                </th>
                <th className='border-b-2 border-gray-700 bg-gray-900 p-4 text-left text-xs text-gray-300 uppercase tracking-wider'>
                  Jumlah Penarikan
                </th>
                <th className='border-b-2 border-gray-700 bg-gray-900 p-4 text-left text-xs text-gray-300 uppercase tracking-wider'>
                  Tanggal Penarikan
                </th>
                <th className='border-b-2 border-gray-700 bg-gray-900 p-4 text-left text-xs text-gray-300 uppercase tracking-wider'>
                  Status
                </th>
                <th className='border-b-2 border-gray-700 bg-gray-900 p-4 text-left text-xs text-gray-300 uppercase tracking-wider'>
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {penarikanSaldo.map((item) => (
                <tr key={item.id}>
                  <td className='border-b border-gray-700 p-4 text-sm text-gray-400'>
                    {item.id}
                  </td>
                  <td className='border-b border-gray-700 p-4 text-sm text-gray-400'>
                    {new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                    }).format(item.jumlah_penarikan)}
                  </td>
                  <td className='border-b border-gray-700 p-4 text-sm text-gray-400'>
                    {item.tanggal_penarikan}
                  </td>
                  <td className='border-b border-gray-700 p-4 text-sm text-gray-400'>
                    <span
                      className={`font-bold py-2 px-4 rounded ${getButtonClasses(
                        item.trasfered,
                      )}`}
                    >
                      {item.trasfered}
                    </span>
                  </td>
                  <td className='border-b border-gray-700 p-4 text-sm text-gray-400'>
                    <button
                      className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                      onClick={() => handleConfirm(item.id)}
                    >
                      Konfirmasi Transfer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default PenarikanSaldo;
