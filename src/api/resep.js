import useClient from ".";

export const GetBahanBaku = async () => {
  try {
    const res = await useClient.get("/bahan_baku_search", {
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

// export const GetBahanBaku = async () => {
//   try {
//     const res = await useClient.get("/bahan_baku_search", {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });
//     return Array.isArray(res.data.data) ? res.data.data : [];
//   } catch (error) {
//     return error.response.data;
//   }
// };

// export const GetBahanBaku = async () => {
//   try {
//     const res = await useClient.get("/bahan_baku_search", {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });
//     return res.data.data.map(item => ({
//       id_bahan_baku: item.id_bahan_baku,
//       nama_bahan_baku: item.nama_bahan_baku
//     }));
//   } catch (error) {
//     return error.response.data;
//   }
// };

export const GetProduk = async () => {
  try {
    const res = await useClient.get("/produk_search", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const ResepGet = async () => {
  try {
    const res = await useClient.get("/resep", {
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

export const ResepCreate = async (formData) => {
  try {
    const res = await useClient.post("/resep", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "constent-type": "application/json", // "constent-type": "application/json
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return {
      success: true,
      data: res.status,
    }; // Mengembalikan data yang diterima dari backend
  } catch (error) {
    return error.response.data;
  }
};

// export const ResepCreate = async (formData) => {
//   try {
//     const res = await useClient.post("/resep", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });
//     return {
//       success: true,
//       data: res.status,
//     };
//   } catch (error) {
//     return error.response.data;
//   }
// };

export const ResepUpdate = async (id, formData) => {
  try {
    const res = await useClient.post(`/resep/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
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

export const ResepDelete = async (id) => {
  try {
    const res = await useClient.delete(`/resep/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getResepById = async (id) => {
  try {
    const res = await useClient.get(`/resep/${id}`, {
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

export const ResepSearch = async (search) => {
  try {
    const res = await useClient.get(`/resep/search/${search}`, {
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
