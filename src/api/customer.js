import useClient from ".";

export const DetailProduk = async (id) => {
  try {
    const res = await useClient.get(`/produk_user/${id}`, {
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

// get produk by id
export const getProdukById = async (id) => {
  try {
    const res = await useClient.get(`/produk_user/${id}`, {
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