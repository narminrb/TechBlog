import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 1000,
});


export const getCards = async (url, cb) => { 
  try {
    const res = await axiosInstance.get(url); 
    cb(res.data); 
  } catch (error) {
    console.error("Error fetching cards:", error);
  }
};

export const getCardsById = async(url,id,cb) =>{
  return await axiosInstance.get(`${url}/${id}`).then((response) => {
    cb(response.data);
  });
}

export const postCard = async(url,data,cb) => {
  return await axiosInstance.post(url, data).then((response) => {
    cb(response.data);
  });
}