import useClient from '.';

export const GetPenarikanSaldo = async () => {
  try {
    const res = await useClient.get('/penarikan_saldo', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const UpdateTransferedStatus = async (id) => {
  try {
    const res = await useClient.put(
      `/penarikan_saldo/${id}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    );
    return {
      success: true,
      data: res.status,
    };
  } catch (error) {
    return error.response.data;
  }
};
