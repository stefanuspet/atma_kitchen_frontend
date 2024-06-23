import React, { useState, useEffect } from "react";
import HomePageLayout from "../../Layout/HomePageLayout";
import { getProdukById } from "../../api/customer";
import { getProdukImage } from "../../api";
import { getPoint } from "../../api/poin";
import { getKuotaByDate } from "../../api/kuotaProduk";
import {
  addCheckout,
  updatePoin,
  addProdukToDetailTransaksi,
} from "../../api/transaksi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { deleteCart, deleteCartById } from "../../api/Cart";

const Checkout = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [dataloyang, setDataloyang] = useState([]);
  const [harga, setHarga] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [point, setPoint] = useState(0);
  const [potonganPoin, setPotonganPoin] = useState(0);
  const [perolehanpoint, setPerolehanPoint] = useState(0);
  const [kuotaproduk, setKuotaProduk] = useState([]);
  const [KuotaToShow, setKuotaToShow] = useState([]);
  const [jenisPengiriman, setJenisPengiriman] = useState([
    { id: 1, nama: "Pickup" },
    { id: 2, nama: "Delivery" },
    { id: 3, nama: "Ojol" },
  ]);

  const [metodePembayaran, setMetodePembayaran] = useState([
    { id: 1, nama: "Transfer" },
    { id: 2, nama: "Cash" },
  ]);

  const [formData, setFormData] = useState({
    tanggal_ambil: "",
    jenis_pengiriman: "",
    metode_pembayaran: "",
    poin: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (formData.poin === "") {
      formData.poin = 0;
    }
  };

  const datalocal = localStorage.getItem("checkout");
  const rawData = JSON.parse(datalocal);
  useEffect(() => {
    const promises = rawData.map((item) => {
      dataloyang.push(item.data);
      return getProdukById(item.data.produk_id);
    });

    Promise.all(promises).then((results) => {
      console.log(results, "results");
      setData(results);
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await getKuotaByDate(formData.tanggal_ambil).then((res) => {
        setKuotaProduk(res.data.data);
      });
    };
    fetchData();
  }, [formData.tanggal_ambil]);

  // get kuota produk
  useEffect(() => {
    getPoint().then((res) => {
      setPoint(res.poins[0].jumlah_poin);
    });
  }, []);

  useEffect(() => {
    setHarga(localStorage.getItem("totalPrice"));
    setSubTotal(localStorage.getItem("totalPrice"));
  }, []);

  useEffect(() => {
    if (formData.poin) {
      const total = formData.poin * 100;
      setPotonganPoin(total);
    } else {
      setPotonganPoin(0);
    }
  }, [formData.poin]);

  const calculatePoints = (total) => {
    if (total >= 500000) {
      return 75;
    } else if (total >= 200000) {
      return 30;
    } else if (total >= 13000) {
      return 1;
    }
    return 0;
  };

  useEffect(() => {
    setPerolehanPoint(calculatePoints(subTotal));
  }, [harga, subTotal]);

  // hitung harga ketika sudah input poin
  useEffect(() => {
    const total = subTotal - potonganPoin;
    setHarga(total);
  }, [potonganPoin, subTotal]);

  // handle delete cart
  const handleDeleteAllCart = () => {
    data.map((item) => {
      deleteCartById(item.id_produk).then((res) => {
        console.log(res, "berhasil delete");
      });
    });

    console.log("berhasil delete all cart");
  };

  console.log(data, "data produk");

  const handleCheckout = () => {
    // if total point is more than user point
    if (formData.poin > point) {
      return toast.error("Poin yang anda masukan melebihi poin anda");
    }

    // if tanggal kurang dari saat ini
    const date = new Date();
    const today = date.toISOString().split("T")[0];
    if (formData.tanggal_ambil < today) {
      return toast.error("Tanggal yang anda pilih sudah lewat");
    }

    // if inputan kosong
    if (
      formData.tanggal_ambil === "" ||
      formData.jenis_pengiriman === "" ||
      formData.metode_pembayaran === ""
    ) {
      return toast.error("Inputan tidak boleh kosong");
    }

    const data = {
      tanggal_ambil: formData.tanggal_ambil,
      jenis_pengiriman: formData.jenis_pengiriman,
      metode_pembayaran: formData.metode_pembayaran,
      potongan_poin: formData.poin,
      harga_total: subTotal,
    };
    console.log(data, "dataaa");
    addCheckout(data).then((res) => {
      console.log(res.data.data, "berhasil checkout");
      toast.success("Pesanan Berhasil Dibuat");
      //deleteq cart
      // if data has more than 1 produk
      // data.map((item, index) => {
      //   console.log(item, "item fetchs");
      //   addProdukToDetailTransaksi(
      //     data[index].id_produk,
      //     res.data.data.id
      //   ).then((res) => {
      //     console.log(res, "berhasil add produk to detail transaksi");
      //   });
      // });
      localStorage.removeItem("checkout");
      localStorage.removeItem("totalPrice");

      var poin = point - formData.poin;
      poin += perolehanpoint;

      const dataPoin = {
        jumlah_poin: poin,
      };

      updatePoin(dataPoin).then((res) => {
        console.log(res, "berhasil update poin");
      });

      handleDeleteAllCart();

      navigate("/transaksi");
    });
  };

  return (
    <HomePageLayout>
      <div className="constainer mx-auto w-full min-h-lvh mt-44 px-36">
        <div className="bg-white bg-opacity-90 w-full p-8 rounded-lg ">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <p>Daftar Produk Yang akan di checkout</p>
          {/* map */}
          {data.map((item, index) => (
            <div className="flex justify-stretch items-center mt-5" key={index}>
              <div className="w-full h-44 bg-[#1d1d5e] rounded-lg text-[#AD773D]">
                <div className="flex items-center p-4 gap-10 justify-between w-full">
                  <div className="w-36 h-36">
                    <img
                      src={getProdukImage(item.image)}
                      alt=""
                      className="object-cover rounded-lg w-full h-full"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">{item.nama_produk}</h1>
                    <p className="text-lg">{item.harga}</p>
                    {/* {dataloyang[index].loyang === "setengah" ? (
                      <>
                        <p className="text-lg">{item.harga_setengah_loyang}</p>
                        <p className="text-lg">Setengah Loyang</p>
                      </>
                    ) : (
                      <>
                        <p className="text-lg">{item.harga_satu_loyang}</p>
                        <p className="text-lg">satu loyang</p>
                      </>
                    )} */}
                  </div>
                  <div>
                    <p className="font-semibold p-2">
                      Jumlah Produk Yang dibeli
                    </p>
                    <div className="flex items-center p-2 bg-slate-50 bg-opacity-15 w-fit mx-auto rounded-lg">
                      <span className="mx-4 text-xl font-bold">
                        X {dataloyang[index].jumlah_produk}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg">
                      {dataloyang[index].jumlah_produk * item.harga}
                    </p>
                    {/* {dataloyang[index].loyang === "setengah" ? (
                      <>
                      </>
                    ) : (
                      <>
                        <p className="text-lg">
                          {item.harga_satu_loyang *
                            dataloyang[index].jumlah_produk}
                        </p>
                      </>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="bg-orange-400 rounded-lg overflow-hidden mt-10">
            <div className="mt-5 w-full  text-[#1d1d5e] p-10 ">
              <div className="flex w-full justify-between gap-10 items-center">
                <form action="" className="w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="tanggal_ambil"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tanggal Ambil
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="tanggal_ambil"
                      onChange={handleChange}
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="jenis_pengiriman"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Jenis Pengiriman
                    </label>
                    <select
                      onChange={handleChange}
                      name="jenis_pengiriman"
                      id="jenis_pengiriman"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    >
                      <option value="">Jenis Pengiriman</option>
                      {/* maps metode pengirman */}
                      {jenisPengiriman.map((item, index) => (
                        <option key={index} value={item.nama}>
                          {item.nama}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="Jenis_Pengiriman"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Metode Pembayaran
                    </label>
                    <select
                      onChange={handleChange}
                      name="metode_pembayaran"
                      id="metode_pembayaran"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    >
                      <option value="">Metode Pembayaran</option>
                      {/* map */}
                      {metodePembayaran.map((item, index) => (
                        <option key={index} value={item.nama}>
                          {item.nama}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="tanggal_ambil"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Poin Yang akan digunakan
                    </label>
                    <input
                      onKeyUp={handleChange}
                      name="poin"
                      type="number"
                      id="poin"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      required
                    />
                  </div>
                </form>
                <div className="bg-white bg-opacity-65 w-1/2 p-5 h-fit rounded-lg">
                  <h1 className="text-center text-xl font-bold">Informasi</h1>
                  <div className="p-5">
                    <p>Poin Anda Saat ini : {point}</p>
                    <p>Kouta Produk Pada tanggal Yang anda pilih : </p>
                    <p>Perolehan Poin Dari pesanan ini : {perolehanpoint}</p>
                  </div>
                </div>
              </div>
              <hr className="border-[#1d1d5e] pb-5 mt-5" />
              <div>
                <h1 className="font-bold text-2xl">Rincian Pesanan</h1>
                <div className="py-3 text-xl font-medium">
                  <p>Tanggal Ambil : {formData.tanggal_ambil}</p>
                  <p>Subtotal Produk : Rp {subTotal}</p>
                  <p>potongan Poin : Rp {potonganPoin}</p>
                  <p>Metode Pembayaran : {formData.metode_pembayaran}</p>
                  <p>Jenis Pengiriman : {formData.jenis_pengiriman}</p>
                  <p>Total Pembayaran : Rp {harga}</p>
                </div>
              </div>
            </div>
            <div className="bg-orange-500 w-full p-10">
              <div className="flex justify-end items-center gap-10">
                <h1 className="font-bold text-3xl">Total Harga : Rp {harga}</h1>
                <button
                  onClick={handleCheckout}
                  className="bg-blue-950 py-2 px-4 rounded-xl text-white"
                >
                  Buat Pesanan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomePageLayout>
  );
};

export default Checkout;
