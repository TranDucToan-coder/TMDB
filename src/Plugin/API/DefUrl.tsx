import axios from "axios";

export const InstanceAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 3000,
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTQ5MzMxNzk0MjFmMjZlOGY0ODgwNzMxOTQ0NTAzYyIsIm5iZiI6MTcyNDc1NzM1Ny45NDksInN1YiI6IjY2Y2RiNTZkODU1ZDMxYzhlYTQ1NGI1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ADyNEQyUi84VzKuuloT9-W1Fju7KVYwYu9Mzd3NDCBA',
    "Content-Type" : 'application/json',
  },
})

export const InstanceAxiosEmbed = axios.create({
  baseURL: 'https://phimapi.com/tmdb/',
  timeout: 3000,
})

export const URL_IMAGE_TMDB = "https://image.tmdb.org/t/p/w200"
