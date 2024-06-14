import React, { useState, useEffect } from "react";
import { FaPrint } from "react-icons/fa";
import LaporanPenjualanBulanan from "../../components/ownerComp/LaporanPenjualanBulanan";
import LaporanPenggunaanBahanBaku from "../../components/ownerComp/LaporanPenggunaanBahanBaku";

const LaporanPageOwner = () => {
  const [routerCom, setRouterCom] = useState(true);

  useEffect(() => {
    console.log("routerCom changed to:", routerCom);
  });

  const handleChangerRoute = (e) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    if (id === "laporanPenjualanBulanan") {
      setRouterCom(true);
    } else if (id === "laporanPengunaanBahanBaku") {
      setRouterCom(false);
    }
  };

  // return (
  //   <div className="container mx-auto">
  //     <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-items-center">
  //       <div className="cursor-pointer hover:bg-red-700 bg-red-600 w-64 h-24 rounded-lg text-white flex justify-between px-5 gap-2 items-center">
  //         <h1 className="font-medium text-lg">
  //           Cetak Semua Laporan Penjualan Bulanan
  //         </h1>
  //         <FaPrint className="text-2xl" />
  //       </div>   
  //       <div
  //         onClick={handleChangerRoute}
  //         id="laporanPenjualanBulanan"
  //         className="cursor-pointer hover:bg-green-700 bg-green-600 w-64 h-24 rounded-lg text-white flex justify-between px-5 gap-2 items-center"
  //       >
  //         <h1 className="font-medium text-lg">
  //           Cetak Laporan Penjualan Bulanan
  //         </h1>
  //         <FaPrint className="text-2xl" />
  //       </div>
  //       <div
  //         id="laporanPengunaanBahanBaku"
  //         onClick={handleChangerRoute}
  //         className="cursor-pointer hover:bg-yellow-700 bg-yellow-600 w-64 h-24 rounded-lg text-white flex justify-between px-5 gap-2 items-center"
  //       >
  //         <h1 className="font-medium text-lg">
  //           Cetak Laporan Penggunaan Bahan Baku
  //         </h1>
  //         <FaPrint className="text-2xl" />
  //       </div>
  //     </div>
  //     <div className="pt-5">{renderComponent()}</div>
  //   </div>
  // );
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-items-center">
        <div
          id="laporanPenjualanBulanan"
          onClick={handleChangerRoute}
          className="cursor-pointer hover:bg-yellow-700 bg-yellow-600 w-64 h-24 rounded-lg text-white flex justify-between px-5 gap-2 items-center"
        >
          <h1 className="font-medium text-lg">
            Cetak Laporan Penjualan Bulanan
          </h1>
          <FaPrint className="text-2xl" />
        </div>
        <div
          onClick={handleChangerRoute}
          id="laporanPengunaanBahanBaku"
          className="cursor-pointer hover:bg-green-700 bg-green-600 w-64 h-24 rounded-lg text-white flex justify-between px-5 gap-2 items-center"
        >
          <h1 className="font-medium text-lg">
            Cetak Laporan Penggunaan Bahan Baku
          </h1>
          <FaPrint className="text-2xl" />
        </div>
      </div>
      {routerCom ? <LaporanPenjualanBulanan /> : <LaporanPenggunaanBahanBaku />}
    </div>
  );
};

export default LaporanPageOwner;
