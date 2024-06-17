import useClient from ".";

export const GetTransaksicus = async () => {
  try {
    const res = await useClient.get("/transaksi_cus", {
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

export const HistoryUpdate = async (id, formData) => {
  try {
    const res = await useClient.put(`/transaksi_cus/${id}`, formData, {
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

// export const getStatusById = async (id) => {
//   try {
//     const res = await useClient.get(`/transaksi_cus/${id}`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });
//     return res.data;
//   } catch (error) {
//     return error.response ? error.response.data : error.message;
//   }
// };

export const searchHistory = async (search) => {
  try {
    const res = await useClient.get(`transaksi_cus/search/${search}`, {
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
