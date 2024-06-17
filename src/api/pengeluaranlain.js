import useClient from ".";

export const GetPengeluaranLain = async () => {
  try {
    const res = await useClient.get("/pengeluaranlain", {
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

export const StorePengeluaranLain = async (formData) => {
  try {
    const res = await useClient.post("/pengeluaranlain", formData, {
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

export const PengeluaranLainUpdate = async (id, formData) => {
  try {
    const res = await useClient.put(`/pengeluaranlain/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "content-type": "application/json",
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

export const PengeluaranLainDelete = async (id) => {
  try {
    const res = await useClient.delete(`/pengeluaranlain/${id}`, {
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

export const getPengeluaranLainById = async (id) => {
  try {
    const res = await useClient.get(`/pengeluaranlain/${id}`, {
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

export const searchPengeluaranLain = async (search) => {
  try {
    const res = await useClient.get(`/pengeluaranlain/search/${search}`, {
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
