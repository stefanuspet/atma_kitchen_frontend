import React, { useState, useEffect } from "react";
import HomePageLayout from "../../Layout/HomePageLayout";
import { getCart, deleteCart, updateCart } from "../../api/Cart";
import { getProdukImage } from "../../api";
import { toast } from "react-toastify";

const CartPage = () => {
  const [data, setData] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCheckboxChange = (itemId, itemPrice) => {
    setCheckedItems((prevCheckedItems) => {
      if (prevCheckedItems.includes(itemId)) {
        return prevCheckedItems.filter((id) => id !== itemId);
      } else {
        return [...prevCheckedItems, itemId];
      }
    });

    setTotalPrice((prevTotalPrice) => {
      if (checkedItems.includes(itemId)) {
        return prevTotalPrice - itemPrice;
      } else {
        return prevTotalPrice + itemPrice;
      }
    });
  };

  console.log(checkedItems, "checkedItems");

  const incrementCount = (id, jmlh) => {
    const newJumlah = jmlh + 1;

    const formData = {
      jumlah_produk: newJumlah,
    };
    updateCart(id, formData).then((res) => {
      console.log(res);
      getCart().then((res) => {
        setData(res.cart);
        console.log(res);
      });
    });
  };

  const decrementCount = (id, jmlh) => {
    const newJumlah = jmlh - 1;

    if (newJumlah < 1) {
      return toast.error("Jumlah produk tidak boleh kurang dari 1");
    }

    const formData = {
      jumlah_produk: newJumlah,
    };

    updateCart(id, formData).then((res) => {
      console.log(res);
      getCart().then((res) => {
        setData(res.cart);
        console.log(res);
      });
    });
  };

  useEffect(() => {
    getCart().then((res) => {
      setData(res.cart);
      console.log(res);
    });
  }, []);

  const handleDelete = (id) => {
    deleteCart(id).then((res) => {
      toast.success("Produk berhasil dihapus dari keranjang");
      getCart().then((res) => {
        setData(res.cart);
        console.log(res);
      });
    });
  };
  console.log(data, "data");
  return (
    <HomePageLayout>
      <div className="container relative mx-auto w-full min-h-lvh mt-44">
        <div className="bg-white bg-opacity-90 w-full p-8 rounded-lg ">
          {data === undefined ? (
            <div className="text-center">
              <p className="text-2xl font-bold">Cart is empty</p>
            </div>
          ) : (
            data.map((item, index) => (
              <div
                className="flex justify-stretch items-center mt-5"
                key={index}
              >
                <div className="w-full h-44 bg-[#1d1d5e] rounded-lg text-[#AD773D]">
                  <div className="flex items-center p-4 gap-10 justify-between w-full">
                    <input
                      onChange={() => handleCheckboxChange(item.id, item.total)}
                      id="checked-checkbox"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <div className="w-36 h-36">
                      <img
                        src={getProdukImage(item.produk.image)}
                        alt=""
                        className="object-cover rounded-lg w-full h-full"
                      />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">
                        {item.produk.nama_produk}
                      </h1>
                      {item.loyang === "setengah" ? (
                        <p className="text-lg">
                          Rp. {item.produk.harga_setengah_loyang}
                        </p>
                      ) : (
                        <p className="text-lg">
                          Rp. {item.produk.harga_satu_loyang}
                        </p>
                      )}
                      <p className="text-lg">Produk {item.loyang} Loyang</p>
                    </div>
                    <div>
                      <p className="font-semibold p-2">
                        Jumlah Produk Yang dibeli
                      </p>
                      <div className="flex items-center p-2 bg-slate-50 bg-opacity-15 w-fit mx-auto rounded-lg">
                        <button
                          type="button"
                          onClick={() =>
                            decrementCount(item.id, item.jumlah_produk)
                          }
                          className="text-white bg-[#910e0b] hover:bg-[#a9110f] font-medium rounded-lg text-sm py-2 px-4"
                        >
                          -
                        </button>
                        <span className="mx-4 text-xl font-bold">
                          {item.jumlah_produk}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            incrementCount(item.id, item.jumlah_produk)
                          }
                          className="text-white bg-[#18a40b] bg-opacity-45 hover:bg-[#27c219] font-medium rounded-lg text-sm  py-2 px-4"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {/* harga */}
                    <div>
                      <p className="text-lg">Rp {item.total}</p>
                    </div>
                    <div>
                      <button
                        onClick={() => handleDelete(item.id)}
                        type="button"
                        className="text-white bg-[#910e0b] hover:bg-[#a9110f] font-medium rounded-lg text-sm py-2 px-4 mt-2"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
          {/* chekout */}
          <div className="flex justify-end items-center mt-5 w-full h-20 bg-orange-400 text-[#1d1d5e]">
            <div className="flex justify-end items-center p-4 gap-10 w-full">
              <p className="text-2xl font-bold">Total Harga</p>
              <p className="text-2xl font-bold">Rp {totalPrice}</p>
              <button className="text-white bg-[#18a40b] hover:bg-[#27c219] font-medium rounded-lg text-sm py-2 px-4">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </HomePageLayout>
  );
};

export default CartPage;
