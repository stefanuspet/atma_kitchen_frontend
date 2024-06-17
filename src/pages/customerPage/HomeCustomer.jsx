import React from "react";
import HomeCustomerLayout from "../../Layout/HomeCustomerLayout";
import Logo from "../../assets/images/logo.png";
import Vector from "../../assets/images/Vector.png";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const HomeCustomer = () => {
  return (
    <HomeCustomerLayout>
      <div className="container mx-auto w-full h-screen flex justify-center items-center">
        <div>
          <img src={Logo} alt="Logo" width={300} height={300} />
        </div>
      </div>

      <div className="w-full bg-white bg-opacity-70 text-black">
        <div className="container mx-auto py-28">
          <div className="flex justify-center">
            <img src={Vector} width={200} height={200} alt="icon" />
          </div>
          <p className="text-center px-28 text-3xl pt-10">
            Atma Kitchen adalah sebuah usaha baru di bidang kuliner, yang
            dimiliki oleh Bu Margareth Atma Negara, seorang selebgram yang
            sangat suka mencoba makanan yang sedang hits. Karena hobinya
            tersebut, Bu Margareth terinspirasi untuk membuat usaha di bidang
            kuliner, dimana ia akan menjual aneka kue premium, dan akan segera
            dibuka di Yogyakarta.{" "}
          </p>
        </div>
      </div>
      <div className="w-full bg-[#1B1B33] mt-10 bg-opacity-70 text-white">
        <div className="container mx-auto py-28 flex gap-20">
          <div className="w-full flex justify-center items-center">
            <img src={Logo} alt="icon" width={300} />
          </div>
          <div className="px-10">
            <p className="text-3xl">
              Atma Kitchen Menyajikan #Cake & sajian lezat untuk semua
              kalangan.Sejuta rasa untuk #BerbagiSemangatBukan #TokoCake
              biasaMampir & jadi #SahabatSejatiku
            </p>
            <div className="flex justify-between pt-10 text-xl py-20 ">
              <div className="flex gap-6">
                <FaInstagram className="text-3xl" />
                <p className="text-xl">atmakitchen__</p>
              </div>
              <div className="flex gap-6">
                <FaWhatsapp className="text-3xl" />
                <p className="text-xl">082275347984</p>
              </div>
            </div>
            <div className="flex gap-6 text-justify">
              <FaLocationDot className="text-3xl" />
              <p className="text-xl">
                Caturtunggal, Depok 55281, Sleman, Daerah Istimewa Yogyakarta,
                Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </HomeCustomerLayout>
  );
};

export default HomeCustomer;