import useClient from ".";
// const token = localStorage.getItem("token");

export const GetKaryawan = async () => {
  try {
    const res = await useClient.get("/karyawan_search", {
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

export const GajiGet = async () => {
  try {
    const res = await useClient.get("/gaji", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data.data;
  } catch (error) {
    return error.data;
  }
};

export const GajiCreate = async (formData) => {
  try {
    const res = await useClient.post("/gaji", formData, {
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

export const GajiUpdate = async (id, formData) => {
  try {
    const res = await useClient.put("/gaji/${id}", formData, {
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

export const GajiDelete = async (id) => {
  try {
    const res = await useClient.delete("/gaji/${id}", {
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

export const getGajiById = async (id) => {
  try {
    const res = await useClient.get("/gaji/${id}", {
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

export const GajiSearch = async (search) => {
  try {
    const res = await useClient.get("/gaji/search/${search}", {
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
