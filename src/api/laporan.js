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

export const GetLaporanPresensiDanGajiPegawai = async () => {
  try {
    const res = await useClient.get('/laporan/presensi-dan-gaji-pegawai', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      responseType: 'blob', // This is important for handling binary data
    });

    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'employee_report.pdf'); // File name
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  } catch (error) {
    return error.response.data;
  }
};

export const GetPemasukanDanPengeluaranBulanan = async (month, year) => {
  try {
    const res = await useClient.get(
      `/laporan/pemasukan-dan-pengeluaran-bulanan/${month}/${year}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        responseType: 'blob',
      },
    );

    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'monthly_report.pdf'); // File name
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  } catch (error) {
    return error.response.data;
  }
};

export const GetRekapTransaksiPenitip = async (month, year) => {
  try {
    const res = await useClient.get(
      `/laporan/rekap-transaksi-penitip/${month}/${year}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        responseType: 'blob',
      },
    );

    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'rekap_transaksi_penitip.pdf'); // File name
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  } catch (error) {
    return error.response.data;
  }
};
