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

export const GetJarakPengiriman = async () => {
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

export const JarakPengirimanUpdate = async (id, formData) => {
  try {
    const res = await useClient.put(`/transaksi/${id}`, formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return {
      success: true,
      data: res.status,
    };
  } catch (error) {
    return error.response.data;
  }
};

export const getJarakPengirimanById = async (id) => {
  try {
    const res = await useClient.get(`/transaksi/${id}`, {
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
