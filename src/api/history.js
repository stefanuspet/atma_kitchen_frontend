import useClient from ".";
// const token = localStorage.getItem("token");

export const getHistory = async () => {
    try {
        const res = await useClient.get("/customers/history", {
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

export const searchHistory = async (search) => {
    try {
        const res = await useClient.get(`/customers/history/search/${search}`, {
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
