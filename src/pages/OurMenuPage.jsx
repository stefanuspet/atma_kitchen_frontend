import React, { useState, useEffect, useRef } from "react";
import { GetProduk } from "../api/produk";
import { ProdukPenitipGet } from "../api/produkPenitip";
import { HampersGet } from "../api/hampers";
import HomePageLayout from "../Layout/HomePageLayout";
import { getProdukImage, getProdukPenitipImage } from "../api";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const OurMenuPage = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  // fetch data from api Produk
  const [data, setData] = useState([]);
  const [produkPenitip, setprodukPenitip] = useState([]);
  const [hampers, setHampers] = useState([]);
  useEffect(() => {
    GetProduk().then((res) => {
      setData(res);
    });
    ProdukPenitipGet().then((res) => {
      setprodukPenitip(res);
    });
    HampersGet().then((res) => {
      setHampers(res);
    });
  }, []);

  console.log(data);

  return (
    <HomePageLayout>
      <div className="w-full mt-[15rem] bg-white bg-opacity-70 min-h-lvh">
        <div className="container mx-auto py-28 flex flex-col items-center">
          <div className="bg-[#1B1B33] font-serif w-[20rem] h-[7rem] mt-[-11rem] inline-flex justify-center items-center border border-[#1B1B33] rounded-[30px] text-[#AD773D] font-bold text-4xl">
            OUR MENU
          </div>
          <div className="bg-black w-[65rem] mt-[5rem] rounded-[20px]">
            <h1 className="text-[#AD773D] font-bold mt-10 font-serif text-4xl text-center">
              Produk
            </h1>
            <div className="grid grid-cols-2 gap-y-4 mt-10 items-center justify-items-center pb-10">
              {/* mapping data */}
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1B1B33] w-[28rem] h-[12rem] rounded-[30px] flex items-center shrink-0"
                >
                  <div className="max-w-40">
                    <img
                      src={getProdukImage(item.image)}
                      alt={item.nama_produk}
                      width={200}
                      height={200}
                      className="relative top-[1px] ml-[10px] rounded-[23px]"
                    />
                  </div>
                  <div className="w-full">
                    <h1 className="text-[#AD773D] font-bold ml-[20px] text-2xl font-serif">
                      {item.nama_produk}
                    </h1>
                    <p className="text-white text-s font-serif ml-[20px]">
                      Per Satu Loyang Rp. {item.harga_satu_loyang}
                    </p>
                    <p className="text-white text-s font-serif ml-[20px]">
                      Per Setengah Loyang Rp. {item.harga_setengah_loyang}
                    </p>
                    <p className="text-white text-s font-serif ml-[20px]">
                      Stok {item.stok_produk} Loyang
                    </p>
                    <div className="flex justify-end pt-5 mr-5">
                      <NavLink
                        to={`/detail-produk/${item.id_produk}`}
                        type="button"
                        className="text-white bg-[#AD773D] hover:bg-[#AD773D] focus:ring-4 focus:ring-[#d59755] font-medium rounded-lg text-sm py-2.5 px-5"
                      >
                        <span className="inline-block mr">Detail Produk</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-black w-[65rem] mt-[5rem] rounded-[20px]">
            <h1 className="text-[#AD773D] font-bold mt-10 font-serif text-4xl text-center">
              Produk Lain
            </h1>
            <div className="grid grid-cols-2 gap-y-4 mt-10 items-center justify-items-center pb-10">
              {/* mapping data */}
              {produkPenitip.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1B1B33] w-[28rem] h-[12rem] rounded-[30px] flex items-center shrink-0"
                >
                  <IoIosArrowForward />
                  <div className="max-w-40">
                    <img
                      src={getProdukPenitipImage(item.gambar_produk)}
                      alt={item.nama_produk}
                      width={200}
                      height={200}
                      className="relative top-[1px] ml-[10px] rounded-[23px]"
                    />
                  </div>
                  <div className="w-full">
                    <h1 className="text-[#AD773D] font-bold ml-[20px] text-2xl font-serif">
                      {item.nama_produk}
                    </h1>
                    <p className="text-white text-s font-serif ml-[20px]">
                      harga Rp. {item.harga_setengah_loyang}
                    </p>
                    <p className="text-white text-s font-serif ml-[20px]">
                      Stok {item.stok_produk}
                    </p>
                    <div className="flex justify-end pt-5 mr-5">
                      <button
                        type="button"
                        className="text-white bg-[#AD773D] hover:bg-[#AD773D] focus:ring-4 focus:ring-[#d59755] font-medium rounded-lg text-sm py-2.5 px-5"
                      >
                        <span className="inline-block mr">Detail Produk</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-black w-[65rem] mt-[5rem] rounded-[20px]">
            <h1 className="text-[#AD773D] font-bold mt-10 font-serif text-4xl text-center">
              Hampers
            </h1>
            <div className="flex items-center snap-x snap-mandatory gap-10 overflow-x-auto scrollbar-hide p-10">
              {/* maaping Hampers */}
              {hampers.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1B1B33] snap-center p-10 rounded-[30px]"
                >
                  <div className="flex snap-x snap-mandatory gap-10 overflow-x-auto scrollbar-hide">
                    {item.produk.map((produk, index) => (
                      <img src={getProdukImage(produk.image)} alt="" />
                    ))}
                  </div>
                  <div className="w-full">
                    <h1 className="text-[#AD773D] font-bold ml-[20px] text-xl font-serif">
                      {item.nama_hampers}
                    </h1>
                    <p className="text-white text-xs font-serif ml-[20px]">
                      {item.deskripsi_hampers}
                    </p>
                    <p className="text-white text-xs font-serif ml-[20px]">
                      Rp. {item.harga_hampers}
                    </p>
                    <p className=" text-center font-bold p-5 text-[#AD773D]">
                      Isi Hampers
                    </p>
                    {item.produk.map((produk, index) => (
                      <ul className="text-center">
                        <li key={index} className="text-white">
                          {produk.nama_produk}
                        </li>
                      </ul>
                    ))}
                    <button
                      type="button"
                      className="text-white inline-flex ml-[20px] items-center justify-center bg-[#AD773D] hover:bg-[#AD773D] focus:ring-4 mt-[25px] focus:ring-[#d59755] font-medium rounded-lg text-sm py-2.5 w-[10rem]"
                    >
                      <span className="inline-block">Stok</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HomePageLayout>
  );
};

export default OurMenuPage;
