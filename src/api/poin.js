import useClient from ".";

export const getPoint = async () => {
  try {
    const res = await useClient.get("/poin", {
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