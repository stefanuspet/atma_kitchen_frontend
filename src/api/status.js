import useClient from ".";

export const GetTransaksi = async () => {
  try {
      const res = await useClient.get('/statusTransaksi', {
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
      });
      return res.data;
  } catch (error) {
      console.error(error);
      throw error;
  }
};

export const getStatusById = async (id) => {
  try {
    const res = await useClient.get(`/statusTransaksi/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response ? error.response.data : error.message;
  }
};

export const StatusUpdate = async (id, formData) => {
  try {
      const res = await useClient.put(`/statusTransaksi/${id}`, formData, {
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
      return {
          success: false,
          data: {},
          error: error.response ? error.response.data : error.message,
      };
  }
};
