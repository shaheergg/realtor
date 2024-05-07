import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "91a0ad6b04mshe5831725ebe5adep1b7ecajsna221bb490b52",
    },
  });

  return data;
};
