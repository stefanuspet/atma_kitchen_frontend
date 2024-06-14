import useClient from ".";

export const GetTransaksi = async () => {
  try {
      const res = await useClient.get('/transaksi', {
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
      });
      return res.data;
  } catch (error) {
      console.error(error);
      throw error;
  }
};

export const getStatusById = async (id) => {
  try {
    const res = await useClient.get(`/transaksi/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data.data;
  } catch (error) {
    // return error.response.data;
    return error.response ? error.response.data : error.message;
  }
};

export const StatusUpdate = async (id, formData) => {
  try {
      const res = await useClient.put(`/transaksi/${id}/status`, formData, {
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
      });
      return {
          success: true,
          data: res.data,
      };
  } catch (error) {
      return {
          success: false,
          data: {},
          error: error.response ? error.response.data : error.message,
      };
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
