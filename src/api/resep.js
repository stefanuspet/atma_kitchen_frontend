import useClient from ".";
const token = localStorage.getItem("token");

export const GetResep = async () => {
  try {
    const res = await useClient.get("/resep", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
        Authorization: `Bearer ${token}`,
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

export const ResepUpdate = async (id, formData) => {
  try {
    const res = await useClient.post(`/resep/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
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
        Authorization: `Bearer ${token}`,
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
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const searchResep = async (search) => {
  try {
    const res = await useClient.get(`/resep/search/${search}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.data;
  } catch (error) {
    return error.response.data;
  }
};
