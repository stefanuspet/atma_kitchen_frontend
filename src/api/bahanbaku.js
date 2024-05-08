import useClient from ".";
// const token = localStorage.getItem("token");

export const GetBahanbaku = async () => {
    try {
        const res = await useClient.get("/bahanbaku", {
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

export const StoreBahanBaku = async (formData) => {
    try {
        const res = await useClient.post("/bahanbaku", formData, {
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

export const BahanbakuUpdate = async (id, formData) => {
    try {
        const res = await useClient.put(`/bahanbaku/${id}`, formData, {
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

export const BahanbakuDelete = async (id) => {
    try {
        const res = await useClient.delete(`/bahanbaku/${id}`, {
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

export const getBahanbakuById = async (id) => {
    try {
        const res = await useClient.get(`/bahanbaku/${id}`, {
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

export const searchBahanbaku = async (search) => {
    try {
        const res = await useClient.get(`/bahanbaku/search/${search}`, {
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
