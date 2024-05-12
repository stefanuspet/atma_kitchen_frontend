import useClient from "./index";

export const login = async (formData) => {
  try {
    const res = await useClient.post("/login", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        accept: "application/json",
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const register = async (formData) => {
  try {
    const res = await useClient.post("/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        accept: "application/json",
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getProfile = async () => {
  try {
    const res = await useClient.get("/customers/profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data.customer;
  } catch (error) {
    return error.data;
  }
}

export const ProfileUpdate = async (id, formData) => {
  try {
      const res = await useClient.put(`/customers/profile/${id}`, formData, {
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

export const getProfileById = async (id) => {
  try {
      const res = await useClient.get(`/customers/profile/${id}`, {
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

export const forgotPassword = async (formData) => {
  try {
    const res = await useClient.post("/customers/requestforget", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
}

export const resetPassword = async (token, formData) => {
  try {
    const res = await useClient.post(`/customers/verify/${token}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
}

export const logout = async () => {
  try {
    const res = await useClient.get("/logout", {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
