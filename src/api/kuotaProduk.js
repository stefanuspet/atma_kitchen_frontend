import useClient from ".";

// show kuota by`id
export const getKuotaById = async (id, data) => {
  try {
    const res = await useClient.post(
      `/kuota_produksi/produk/${id}`,
      {
        tanggal: data,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};

// show kuota by tanggal
export const getKuotaByDate = async (tanggal) => {
  try {
    const res = await useClient.get(`/kuota_produksi/tanggal/${tanggal}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return {
      success: true,
      data: res,
    };
  } catch (error) {
    return error;
  }
};
