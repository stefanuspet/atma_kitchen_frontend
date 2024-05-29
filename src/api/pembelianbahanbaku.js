import useClient from ".";

export const GetPembelianBahanBaku = async () => {
  try {
    const res = await useClient.get("/pembelian_bahan_baku", {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const GetBahanBaku = async () => {
  try {
    const res = await useClient.get("/pembelian_bahan_baku/bahanbaku", {
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

export const GetBahanBakuById = async (id) => {
  try {
    const res = await useClient.get(`/pembelian_bahan_baku/bahanbaku/${id}`, {
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

export const StorePembelianBahanBaku = async (data) => {
  try {
    const res = await useClient.post("/pembelian_bahan_baku", data, {
      headers: {
        "Content-Type": "application/json",
        "constent-type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return {
      success: true,
      data: res.data,
    };
  } catch (error) {
    return error.response.data;
  }
};

export const UpdatePembelianBahanBaku = async (id, data) => {
  try {
    const res = await useClient.put(`/pembelian_bahan_baku/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
        "constent-type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return {
      success: true,
      data: res.data,
    };
  } catch (error) {
    return error;
  }
};

export const DeletePembelianBahanBaku = async (id) => {
  try {
    const res = await useClient.delete(`/pembelian_bahan_baku/${id}`, {
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

export const GetPembelianBahanBakuById = async (id) => {
  try {
    const res = await useClient.get(`/pembelian_bahan_baku/${id}`, {
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
    return error.response.data;
  }
};
