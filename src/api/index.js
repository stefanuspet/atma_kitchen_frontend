import axios from "axios";

export const BASE_URL = "http://127.0.0.1:8000";
export const getProdukImage = (image) => {
  return `${BASE_URL}/storage/produk/${image}`;
};

export const getProdukPenitipImage = (image) => {
  return `${BASE_URL}/storage/produk_penitip/${image}`;
};

const useClient = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export default useClient;
