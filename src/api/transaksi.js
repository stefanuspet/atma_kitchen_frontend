import useClient from ".";

export const addCheckout = async (data) => {
  try {
    const res = await useClient.post("/checkout", data, {
      headers: {
        "Content-Type": "application/json",
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

// update poin

export const updatePoin = async (data) => {
  try {
    const res = await useClient.put("/poin_user", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

// get all transaksi
export const getTransaksi = async () => {
  try {
    const res = await useClient.get("/detail_transaksi_all", {
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

//addproduktodetailtransaksi
export const addProdukToDetailTransaksi = async (data, id) => {
  try {
    const res = await useClient.post(`/addProdukToDetail/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};