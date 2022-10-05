import axios from "axios";



export const fetchProperties = (para) => {
  return axios.request({
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/list",
    params: para,
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  
};

export const getSingleProperty = (id) => {
  return axios.request({
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/detail",
    params: {externalID: `${id}`},
  
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
};
