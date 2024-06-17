import useClient from ".";

export const GetTransaksicus = async () => {
    try {
      const res = await useClient.get("/transaksi_cus", {
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

export const searchHistory = async (search) => {
    try {
        const res = await useClient.get(`transaksi_cus/search/${search}`, {
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
