import axios from "axios";

const baseUrl = "https://localhost:5001/";

export const getdata = async () => {
  try {
    const { data } = await axios.get(baseUrl + "Companies");
    return data;
  } catch (error) {
    throw error;
  }
};
