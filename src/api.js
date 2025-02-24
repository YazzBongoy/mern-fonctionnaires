import axios from "axios";

const API_URL = "http://localhost:5000/api/fonctionnaires";

export const getFonctionnaires = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addFonctionnaire = async (fonctionnaire) => {
  const response = await axios.post(API_URL, fonctionnaire);
  return response.data;
};
