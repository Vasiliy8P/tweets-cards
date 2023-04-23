import axios from "axios";

axios.defaults.baseURL = "https://640d0e31b07afc3b0da6e662.mockapi.io";

export const getTweetsApi = async (page) => {
    const response = await axios.get(`/tweets?page=${page}&limit=3`);
    return response.data;
}