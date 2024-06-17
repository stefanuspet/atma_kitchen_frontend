import useClient from '.';

export const GetPenitip = async () => {
  try {
    const res = await useClient.get('/penitip', {
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

export const PenitipCreate = async (formData) => {
  try {
    const res = await useClient.post('/penitip', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
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

export const PenitipUpdate = async (id, formData) => {
  try {
    const res = await useClient.put(`/penitip/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Content-Type ': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
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

export const PenitipDelete = async (id) => {
  try {
    const res = await useClient.delete(`/penitip/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const GetPenitipById = async (id) => {
  try {
    const res = await useClient.get(`/penitip/${id}`, {
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

export const SearchPenitip = async (query) => {
  try {
    const res = await useClient.get(`/penitip/search/${query}`, {
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
