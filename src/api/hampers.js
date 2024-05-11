import useClient from ".";

export const HampersGet = async () => {
  try {
    const res = await useClient.get("/hampers", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const HampersCreate = async (formData) => {
  try {
    const res = await useClient.post("/hampers", formData, {
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

export const HampersUpdate = async (id, formData) => {
  try {
    const res = await useClient.put(`/hampers/${id}`, formData, {
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

export const HampersDelete = async (id) => {
  try {
    const res = await useClient.delete(`/hampers/${id}`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const HampersSearch = async (search) => {
  try {
    const res = await useClient.get(`/hampers/search/${search}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const HampersDetail = async (id) => {
  try {
    const res = await useClient.get(`/hampers/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const HampersProduk = async (id, formData) => {
  try {
    const res = await useClient.post(`/hampers/addproduk/${id}`, formData, {
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
export const HampersProdukDelete = async (id, idProduk) => {
  try {
    const res = await useClient.delete(`/hampers/${id}/${idProduk}`, {
      headers: {
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
