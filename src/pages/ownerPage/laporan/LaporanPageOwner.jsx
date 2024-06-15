import React, { useState, useEffect } from "react";
import { FaPrint } from "react-icons/fa";
import LaporanStokBahanBaku from "../../../components/ownerComp/LaporanStokBahanBaku";
import LaporanBulananPerProduk from "../../../components/ownerComp/LaporanBulananPerProduk";

const LaporanPageOwner = () => {
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
    </div>
  );
};

export default LaporanPageOwner;
