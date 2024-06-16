import useClient from ".";

export const GetTransaksi = async () => {
  try {
    const res = await useClient.get("/transaksi", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const GetKonfirmasiPembayaran = async () => {
  try {
    const res = await useClient.get("/konfirmasi_pembayaran", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const KonfirmasiPembayaranUpdate = async (id, formData) => {
  try {
    const res = await useClient.put(`/konfirmasi_pembayaran/${id}`, formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return {
      success: true,
      data: res.data.data,
    };
  } catch (error) {
    return error.response.data;
  }
};

export const getKonfirmasiPembayaranById = async (id) => {
  try {
    const res = await useClient.get(`/konfirmasi_pembayaran/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data.data;
  } catch (error) {
    return error.response.data;
  }
};

// export const JarakPengirimanDelete = async (id) => {
//   try {
//     const res = await useClient.delete(`/jarak_pengiriman/${id}`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });
//     return res.data;
//   } catch (error) {
//     return error.response.data;
//   }
// };
// export const searchJarakPengiriman = async (search) => {
//   try {
//     const res = await useClient.get(`/jarak_pengiriman/search/${search}`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });
//     return res.data.data;
//   } catch (error) {
//     return error.response.data;
//   }
// };