import React from "react";
import HomePageLayout from "../Layout/HomePageLayout";
import Gmail from "../assets/images/gmail.png";
import WA from "../assets/images/wa.png";
import Hours from "../assets/images/hours.png";

const Contact = () => {
  return (
    <HomePageLayout>
      <div className="container mx-auto w-full h-screen flex flex-col justify-center items-center">
        <div className="text-9xl font-serif text-white">KONTAK</div>
        <h1 className="text-7xl font-serif text-white">Atma Kitchen</h1>
      </div>
      <div className="w-full bg-white bg-opacity-50 text-black">
        <div className="container flex mx-auto py-28">
          <div className="bg-white w-80 h-80 ml-[15rem] rounded-[30px] mb-[] flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl font-serif mb-4 ">CONTACT US</h1>
            <img src={Gmail} alt="Gmail" width={50} height={50} />
            <p className="font-black mb-3">@atmakitchen__13</p>
            <img
              src={WA}
              alt="WA"
              width={50}
              height={50}
              className="mt-3 mb-3"
            />
            <p className="font-bold">+62812345678910</p>
            <p className="font-bold">+62812347458910</p>
            <p className="font-bold">+62812347458888</p>
          </div>
          <div className="bg-white w-80 h-80 ml-[7.5rem] rounded-[30px] flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl font-serif mb-4">OPENING HOURS</h1>
            <img
              src={Hours}
              alt="Hours"
              width={50}
              height={50}
              className="mb-7"
            />
            <p className="font-serif">Senin - Sabtu</p>
            <p className="font-serif">07.00 - 21.00</p>
            <p className="font-serif">WIB</p>
          </div>
        </div>
      </div>
    </HomePageLayout>
  );
};

export default Contact;
