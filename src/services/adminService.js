import axios from "axios";

export const getStats = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get("http://localhost:5000/api/admin/stats", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
