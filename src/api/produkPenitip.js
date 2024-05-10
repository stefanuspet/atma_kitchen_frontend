import useClient from ".";

export const GetPenitip = async () => {
  try {
    const res = await useClient.get("/penitip_search", {
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

export const ProdukPenitipGet = async () => {
  try {
    const res = await useClient.get("/produk_penitip", {
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

export const ProdukPenitipCreate = async (formData) => {
  try {
    const res = await useClient.post("/produk_penitip", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        // "Content-Type": "application/json",
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

export const ProdukPenitipUpdate = async (id, formData) => {
  try {
    const res = await useClient.post(`/produk_penitip/${id}`, formData, {
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

export const ProdukPenitipDelete = async (id) => {
  try {
    const res = await useClient.delete(`/produk_penitip/${id}`, {
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

export const ProdukPenitipSearch = async (search) => {
  try {
    const res = await useClient.get(`/produk_penitip/search/${search}`, {
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

export const GetProdukPenitipById = async (id) => {
  try {
    const res = await useClient.get(`/produk_penitip/${id}`, {
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