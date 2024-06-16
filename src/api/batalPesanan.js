import useClient from ".";

export const GetTransaksi = async () => {
    try {
        const res = await useClient.get('/transaksi', {
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

export const GetPembatalan = async () => {
    try {
        const res = await useClient.get('/transaksi/pembatalan', {
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

export const BatalkanTransaksi = async (id) => {
    try {
        const res = await useClient.delete(`/transaksi/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const UpdateStatusPembayaran = async (id) => {
    try {
        const res = await useClient.put(`/transaksi/batalkan/${id}`, {}, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};