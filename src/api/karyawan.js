import useClient from ".";

export const GetKaryawan = async () => {
  try {
    const res = await useClient.get("/karyawan", {
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

export const KaryawanCreate = async (formData) => {
  try {
    const res = await useClient.post("/karyawan", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
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

export const KaryawanUpdate = async (id, formData) => {
  try {
    const res = await useClient.put(`/karyawan/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
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

export const KaryawanDelete = async (id) => {
  try {
    const res = await useClient.delete(`/karyawan/${id}`, {
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

export const getKaryawanById = async (id) => {
  try {
    const res = await useClient.get(`/karyawan/${id}`, {
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

export const searchKaryawan = async (search) => {
  try {
    const res = await useClient.get(`/karyawan/search/${search}`, {
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
