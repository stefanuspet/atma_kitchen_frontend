import React, {useEffect, useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import {FaPlus} from 'react-icons/fa';
import {FaTrash} from 'react-icons/fa';
import {FaPencilAlt} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import {
  ProdukPenitipGet,
  ProdukPenitipDelete,
  ProdukPenitipSearch,
} from '../../../api/produkPenitip';
import {getProdukPenitipImage} from '../../../api/index';

const ProdukPenitip = () => {
  const [produkPenitip, setProdukPenitip] = useState([]);
  const [produkPenitipSearch, setProdukPenitipSearch] = useState([]);
  const [search, setSearch] = useState('');
  const [isfound, setIsfound] = useState(true);

  const handleInputSearch = (e) => {
    const searchValue = e.target.value.trim();
    setSearch(searchValue);
    setIsfound(true);
    if (searchValue === '') {
      setProdukPenitipSearch([]);
      setIsfound(false);
      setSearch(false);
      return;
    }

    ProdukPenitipSearch(searchValue)
      .then((res) => {
        if (res.length > 0) {
          setProdukPenitipSearch(res);
          console.log(res, 'search');
          setIsfound(true);
          setSearch(true);
        } else {
          setIsfound(false);
          setProdukPenitipSearch([]);
          setSearch(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return;
  };

  const handleClearSearch = () => {
    setSearch('');
    setProdukPenitipSearch([]);
    document.getElementById('search').value = '';
  };

  const handleDelete = (id) => {
    ProdukPenitipDelete(id).then(() => {
      fetchData();
      setProdukPenitipSearch([]);
      toast.success('penitip Berhasil Dihapus', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    });
  };

  const fetchData = async () => {
    const response = await ProdukPenitipGet();
    setProdukPenitip(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='relative w-full'>
        <ToastContainer />
        <div className='flex justify-between'>
          <h1 className='text-3xl mt-0 x  font-bold'>Produk Penitip</h1>
          <div>
            <input
              onChange={handleInputSearch}
              type='text'
              name='search'
              id='search'
              className='h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
            <button
              onClick={handleClearSearch}
              className='bg-blue-500 text-white h-10 px-4 rounded-lg ml-2'
            >
              Clear
            </button>
          </div>
        </div>
        <NavLink
          to='/dashboard-admin/produk-penitip/create'
          className='bg-green-500 p-2 rounded-lg mt-2 mb-4 flex items-center w-fit'
        >
          Tambah Produk Penitip <FaPlus className='ml-2' />
        </NavLink>
        <div style={{display: search ? 'block' : 'none'}}>
          <h1 className='text-xl font-bold pt-10 pb-2'>Hasil Pencarian</h1>
          <div className='h-0.5 bg-white'></div>
          <h1
            style={{display: isfound ? 'none' : 'block'}}
            className='py-5 text-red-600'
          >
            Produk penitip Tidak Ditemukan !
          </h1>
          <div className='grid grid-cols-3 gap-7 pt-5'>
            {produkPenitipSearch.map((item, index) => (
              <div
                key={index}
                className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72'
              >
                <div className='w-full h-52 overflow-hidden'>
                  <img
                    className='rounded-t-lg'
                    src={getProdukPenitipImage(item.gambar_produk_penitip)}
                    alt='test'
                    width={500}
                    height={500}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
                <div className='p-5'>
                  <a href='#'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                      {item.nama_produk_penitip}
                    </h5>
                  </a>
                  <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                    harga : {item.harga_produk_penitip}
                  </p>
                  <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                    stok : {item.stok_produk_penitip}
                  </p>
                  <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                    nama penitip : {item.nama_penitip}
                  </p>
                  <div className='flex justify-end gap-x-2'>
                    <NavLink
                      to={`/dashboard-admin/produk-penitip/edit/${item.id}`}
                      className='p-2 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                      <FaPencilAlt className='text-white' />
                    </NavLink>
                    <div
                      onClick={() => handleDelete(item.id)}
                      className=' p-2 rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
                    >
                      <FaTrash className='text-white' />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1 className='text-xl font-bold pt-10 pb-2'>Semua Produk Penitip</h1>
        <div className='h-0.5 bg-white'></div>
        <div className='grid grid-cols-3 gap-7 pt-5'>
          {produkPenitip.map((item, index) => (
            <div
              key={index}
              className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72'
            >
              <div className='w-full h-52 overflow-hidden'>
                <img
                  className='rounded-t-lg'
                  src={getProdukPenitipImage(item.gambar_produk)}
                  alt='test'
                  width={500}
                  height={500}
                  style={{objectFit: 'cover', width: '100%', height: '100%'}}
                />
              </div>
              <div className='p-5'>
                <a href='#'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {item.nama_produk}
                  </h5>
                </a>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  harga : {item.harga_produk}
                </p>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  stok : {item.stok_produk}
                </p>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  nama penitip : {item.penitip}
                </p>
                <div className='flex justify-end gap-x-2'>
                  <NavLink
                    to={`/dashboard-admin/produk-penitip/edit/${item.id_produk_penitip}`}
                    className='p-2 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  >
                    <FaPencilAlt className='text-white' />
                  </NavLink>
                  <div
                    onClick={() => handleDelete(item.id_produk_penitip)}
                    className=' p-2 rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
                  >
                    <FaTrash className='text-white' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProdukPenitip;
