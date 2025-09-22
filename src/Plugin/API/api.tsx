import axios from "axios";

const InstanceAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 3000,
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTQ5MzMxNzk0MjFmMjZlOGY0ODgwNzMxOTQ0NTAzYyIsIm5iZiI6MTcyNDc1NzM1Ny45NDksInN1YiI6IjY2Y2RiNTZkODU1ZDMxYzhlYTQ1NGI1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ADyNEQyUi84VzKuuloT9-W1Fju7KVYwYu9Mzd3NDCBA',
    "Content-Type": 'application/json',
  },
})
export async function getListMovie(page: number) {
  try {
    page = 1;
    const response = await InstanceAxios.get(`/movie/now_playing?page=${page}`)
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Lỗi khi lấy danh sách phim:", error);
    throw error;
  }
}
export async function getListMovie_popular(page: number) {
  try {
    page = 1;
    const response = await InstanceAxios.get(`/movie/popular?page=${page}`)
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Lỗi khi lấy danh sách phim:", error);
    throw error;
  }
}
export async function getTrailer(page: number) {
  try {
    page = 1;
    const response = await InstanceAxios.get(`/movie/popular?page=${page}`)
    if (response) {
      const dataMovie = response.data.results;
      const responseTrailer = await Promise.all(
        dataMovie.map(async (movie : any) => {
          const data = await InstanceAxios.get(`/movie/${movie.id}/videos?page=1`)
          const keyVideo = data?.data?.results[0].key;
          return {
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            key : keyVideo
          }
        })
      )
      return responseTrailer
    }
  } catch (error) {
    console.error("Lỗi khi lấy danh sách phim:", error);
    throw error;
  }
}
export async function getDataUpcoming(page:number) {
  try {
    page = 1;
    const response = await InstanceAxios.get(`/movie/upcoming?page=${page}`)
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Lỗi khi lấy danh sách phim:", error);
    throw error;
  }
}
export async function getActor(page : number) {
  try {
    page = 1;
    const response = await InstanceAxios.get(`/person/popular?page=${page}`)
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Lỗi khi lấy danh sách diễn viên:", error);
    throw error;
  }
}
//Detail
export async function getDetailOfFilm(id : string){
  try {
    const response = await InstanceAxios.get(`/movie/${id}`)
    if(response){
      return response.data
    }
  } catch (error) {
    console.error("Lỗi khi lấy chi tiết bộ phim:", error);
    throw error;
  }
}