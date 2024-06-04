import useClient from ".";

export const getCart = async () => {
  try {
    const res = await useClient.get("/cart", {
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

export const addToCart = async (data) => {
  try {
    const res = await useClient.post("/cart", data, {
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

export const deleteCart = async (id) => {
  try {
    const res = await useClient.delete(`/cart/${id}`, {
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

export const checkoutCart = async () => {
  try {
    const res = await useClient.post("/cart/checkout", {
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

// update
export const updateCart = async (id, data) => {
  try {
    const res = await useClient.put(`/cart/${id}`, data, {
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

// char by id
export const getCartById = async (id) => {
  try {
    const res = await useClient.get(`/cart/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return { status: res.status, data: res.data };
  } catch (error) {
    return error;
  }
};

//  delete cart by id prodyk
export const deleteCartById = async (id) => {
  try {
    const res = await useClient.delete(`/cart_produk/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return { status: res.status, data: res.data };
  } catch (error) {
    return error;
  }
};
