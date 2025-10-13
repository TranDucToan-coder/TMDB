import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const InstanceAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 3000,
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTQ5MzMxNzk0MjFmMjZlOGY0ODgwNzMxOTQ0NTAzYyIsIm5iZiI6MTcyNDc1NzM1Ny45NDksInN1YiI6IjY2Y2RiNTZkODU1ZDMxYzhlYTQ1NGI1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ADyNEQyUi84VzKuuloT9-W1Fju7KVYwYu9Mzd3NDCBA',
    "Content-Type" : 'application/json',
  },
})
const InstanceAxiosEmbed = axios.create({
  baseURL: 'https://phimapi.com/tmdb/',
  timeout: 3000,
})
export async function getListMovie(page: number) {
  try {
    const response = await InstanceAxios.get(`/movie/now_playing?page=${page}`)
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Lỗi khi lấy danh sách phim:", error);
    throw error;
  }
}
export function useNowPlayingMovies(page: number){
  return useQuery({
    queryKey : ['now_playing', page],
    queryFn : async () => {
      const res = await InstanceAxios.get(`/movie/now_playing?page=${page}`);
      return res.data;
    },
    staleTime : 3600,
  })
}
export async function getAllMovie() {
  try {
    const firstResponse = await InstanceAxios.get(`/movie/now_playing?page=1`);
    const totalPages = firstResponse.data.total_pages;
    let allResults = {...firstResponse.data.results};

    for (let page = 2; page <= totalPages; page++) {
      const response = await InstanceAxios.get(`/movie/now_playing?page=${page}`);
      if (response?.data?.results) {
        allResults = {...allResults, ...response.data.results};
      }
    }
    return { results: allResults };
  } catch (error) {
    console.error("Lỗi khi lấy danh sách phim:", error);
    return null;
  }
}

export async function getListMovie_popular(page: number) {
  try {
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
    const response = await InstanceAxios.get(`/movie/popular?page=${page}`)
    if (response) {
      const dataMovie = response.data.results;
      const responseTrailer = await Promise.all(
        dataMovie.map(async (movie: any) => {
          const data = await InstanceAxios.get(`/movie/${movie.id}/videos?page=${page}`)
          const keyVideo = data?.data?.results[1]?.key;
          return {
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            key: keyVideo
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
export async function getDataUpcoming(page: number) {
  try {
    const response = await InstanceAxios.get(`/movie/upcoming?page=${page}`)
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Lỗi khi lấy danh sách phim:", error);
    throw error;
  }
}
//Tv_series
export async function getListTv(page: number) {
  try {
    const response = await InstanceAxios.get(`/tv/airing_today?page=${page}`)
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Lỗi khi lấy danh sách phim:", error);
    throw error;
  }
}
export async function getListTV_popular(page: number) {
  try {
    const response = await InstanceAxios.get(`/tv/popular?page=${page}`)
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Lỗi khi lấy danh sách phim:", error);
    throw error;
  }
}
//Actor
export async function getActor(page: number) {
  try {
    const response = await InstanceAxios.get(`/person/popular?page=${page}`)
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Lỗi khi lấy danh sách diễn viên:", error);
    throw error;
  }
}
export async function getMultiOfFilm(query: string) {
  try {
    const response = await InstanceAxios.get(`/search/multi`, { params: { query } })
    if (response) {
      console.log(response)
      return (response.data)
    }
  } catch (error) {
    console.error("Lỗi khi lấy multi bộ phim:", error);
    throw error;
  }
}
export async function getEmbedFilm(id: string, type: string) {
  try {
    const response = await InstanceAxiosEmbed.get(`/${type}/${id}`)
    if (response) {
      console.log(response)
      return (response.data)
    }
  } catch (error) {
    console.error("Lỗi khi lấy chi tiết bộ phim:", error);
    throw error;
  }
}
//Detail
export async function getDetailOfFilm(id: string) {
  try {
    const response = await InstanceAxios.get(`/movie/${id}`)
    if (response) {
      return (response.data)
    }
  } catch (error) {
    console.error("Lỗi khi lấy chi tiết bộ phim:", error);
    throw error;
  }
}
export async function getListActorOfFilm(id: string) {
  try {
    const response = await InstanceAxios.get(`/movie/${id}/credits`)
    if (response)
      return response.data
  } catch (error) {
    console.error("Lỗi khi lấy chi tiết bộ phim:", error);
    throw error;
  }
}
export async function getTrailerOfFilm(id: string) {
  try {
    const response = await InstanceAxios.get(`/movie/${id}/videos`);
    if (response) {
      return response.data
    }
  } catch (error) {
    console.error("Lỗi khi lấy chi tiết trailer bộ phim:", error);
    throw error;
  }
}
export async function getKeywordFilm(id: string) {
  try {
    const response = await InstanceAxios.get(`/movie/${id}/keywords`);
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Lỗi khi lấy keyword bộ phim:", error);
    throw error;
  }
}
//DetailTVShow
export async function getDetailOfTv(id: string) {
  try {
    const response = await InstanceAxios.get(`/tv/${id}`)
    if (response) {
      return (response.data)
    }
  } catch (error) {
    console.error("Lỗi khi lấy chi tiết bộ phim:", error);
    throw error;
  }
}
export async function getKeywordTV(id: string) {
  try {
    const response = await InstanceAxios.get(`/tv/${id}/keywords`);
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Lỗi khi lấy keyword bộ phim:", error);
    throw error;
  }
}
export async function getListActorOfTv(id: string) {
  try {
    const response = await InstanceAxios.get(`/tv/${id}/credits`)
    if (response)
      return response.data
  } catch (error) {
    console.error("Lỗi khi lấy chi tiết bộ phim:", error);
    throw error;
  }
}
export async function getTrailerOfTv(id: string) {
  try {
    const response = await InstanceAxios.get(`/tv/${id}/videos`);
    if (response) {
      return response.data
    }
  } catch (error) {
    console.error("Lỗi khi lấy chi tiết trailer bộ phim:", error);
    throw error;
  }
}