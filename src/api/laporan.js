import useClient from ".";

export const cetakLaporanPenjualanBulanan = async (data) => {
    try {
        const response = await useClient.post('/laporan_penjualan_bulanan', data, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res.data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const cetakLaporanPenggunaanBahanBaku = async (month, year) => {
    try {
        const response = await useClient.post('/laporan_penggunaan_bahan_baku', {
            month: month,
            year: year
        }, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};