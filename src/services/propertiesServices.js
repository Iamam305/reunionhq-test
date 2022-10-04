import axios from "axios";



export const fetchProperty = (params) => {
  return axios.request({
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/list",
    params,
    // params: {
    //   locationExternalIDs: "5002,6020",
    //   purpose: "for-rent",
    //   hitsPerPage: "25",
    //   page: "0",
    //   lang: "en",
    //   sort: "city-level-score",
    //   rentFrequency: "monthly",
    //   categoryExternalID: "4",
    //   priceMin: "10",
    //   priceMax: "10000",
    // },
    headers: {
      "X-RapidAPI-Key": process.env.RapidAPI_Key,
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
};
