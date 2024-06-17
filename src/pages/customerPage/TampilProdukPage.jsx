import React, { useEffect, useState } from "react";
import HomePageLayout from "../../Layout/HomePageLayout";

import { useParams, useNavigate } from "react-router-dom";
import { DetailProduk } from "../../api/customer";
import { getProdukImage } from "../../api";
import { addToCart, getCartById } from "../../api/Cart";
import { toast } from "react-toastify";

const TampilProdukPage = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const param = useParams();
  const navigate = useNavigate();
  const [loyang, setLoyang] = useState("");
  // const [loyangActive, setLoyangActive] = useState({
  //   satuLoyang: false,
  //   setengahLoyang: false,
  // });

  // const handleLoyang = (e) => {
  //   if (e.target.id === "satuLoyang") {
  //     setLoyangActive({ satuLoyang: true, setengahLoyang: false });
  //     console.log("satuLoyang");
  //     setLoyang("satu");
  //   } else {
  //     setLoyangActive({ satuLoyang: false, setengahLoyang: true });
  //     setLoyang("setengah");
  //     console.log("setengahLoyang");
  //   }
  // };

  const idProduk = param.id;
  console.log(idProduk);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    // check if product already in cart
    getCartById(idProduk).then((res) => {
      console.log(res, "rses");
    });

    addToCart({
      id_produk: idProduk,
      jumlah_produk: count,
    }).then((res) => {
      console.log(res);
      toast.success("Produk berhasil dimasukkan ke keranjang");
    });
  };

  useEffect(() => {
    DetailProduk(idProduk).then((res) => {
      setData(res);
    });
  }, []);
  console.log(data);

  return (
    <HomePageLayout>
      <div className="container mx-auto min-h-lvh">
        <div className="bg-white bg-opacity-80 w-70 h-[37rem] w-full mt-[15rem] rounded-[10px]">
          <div className="flex p-5 gap-7">
            <div className="w-96 h-96 bg-sky-200 border-8 border-[#1d1d5e] rounded-[20px] overflow-hidden">
              <img
                src={getProdukImage(data.image)}
                alt="Contoh"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h1 className="font-bold text-5xl text-[#1d1d5e]">
                {data.nama_produk}
              </h1>
              {/* <div className="py-5 flex justify-between">
                <p className="text-3xl font-bold text-[#802727]">
                  Rp. {data.harga_satu_loyang} / 1 Loyang
                </p>
                <p className="text-3xl font-bold text-[#802727]">
                  Rp. {data.harga_setengah_loyang} / ½ Loyang
                </p>
              </div> */}
              <p className="text-xl font-bold text-[#1d1d5e] py-5">
                Stok: {data.stok_produk}
              </p>
              <hr className="border-t-2 py-5 w-full border-[#1d1d5e]"></hr>
              {/* <p className="text-lg">Pilih Loyang : </p> */}
              {/* <div className="flex justify-between">
                <button
                  onClick={handleLoyang}
                  type="button"
                  id="satuLoyang"
                  className={
                    loyangActive.satuLoyang
                      ? "text-white bg-[#3434b8] hover:bg-[#4444d4] font-medium rounded-lg text-sm mt-5 py-2.5 px-[7rem]"
                      : "text-white bg-[#1d1d5e] hover:bg-[#3434b8] font-medium rounded-lg text-sm mt-5 py-2.5 px-[7rem]"
                  }
                >
                  <span className="inline-block mr">Produk 1 Loyang</span>
                </button>
                <button
                  onClick={handleLoyang}
                  type="button"
                  id="setengahLoyang"
                  className={
                    loyangActive.setengahLoyang
                      ? "text-white bg-[#3434b8] hover:bg-[#4444d4] font-medium rounded-lg text-sm mt-5 py-2.5 px-[7rem]"
                      : "text-white bg-[#1d1d5e] hover:bg-[#3434b8] font-medium rounded-lg text-sm mt-5 py-2.5 px-[7rem]"
                  }
                >
                  <span className="inline-block mr">Produk 1/2 Loyang</span>
                </button>
              </div> */}
              <p className="text-lg mt-6">Jumlah : </p>
              <div className="flex items-center mt-2">
                <button
                  type="button"
                  onClick={decrementCount}
                  className="text-white bg-[#1d1d5e] hover:bg-[#3434b8] font-medium rounded-lg text-sm py-2 px-4"
                >
                  -
                </button>
                <span className="mx-4 text-xl">{count}</span>
                <button
                  type="button"
                  onClick={incrementCount}
                  className="text-white bg-[#1d1d5e] hover:bg-[#3434b8] font-medium rounded-lg text-sm  py-2 px-4"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                type="button"
                className="text-white bg-[#1d1d5e] hover:bg-[#3434b8] focus:ring-4 focus:ring-[#1d1d5e] font-medium rounded-lg text-sm mt-12 py-4 px-[20rem]"
              >
                <span className="inline-block mr">Masuk Keranjang</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </HomePageLayout>
  );
};

export default TampilProdukPage;
