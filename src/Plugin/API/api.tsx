import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Movie } from "../../type";
import { InstanceAxios, InstanceAxiosEmbed } from "./DefUrl";



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
export const useMovie = (id: string) => {
  return useQuery({
    queryKey: ["detail_movie", id],
    queryFn: async () => {
      if (!id) return;
      try {
        const res = await InstanceAxios.get(`/movie/${id}`);
        return res.data;
      } catch (error: any) {
        if (error.response?.status === 404) {
          return null;
        }
        throw error;
      }
    },
    refetchOnWindowFocus: false
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
        dataMovie.map(async (movie: Movie) => {
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
export const useTrailer = (page: number) => {
  return useQuery({
    queryKey: ["trailer", page],
    queryFn: () => getTrailer(page),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  })
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
export const useTvShow = (page : number) => {
  return useQuery({
    queryKey: ["tvShow", page],
    queryFn: async () => {
      const response = await InstanceAxios.get(`/tv/popular?page=${page}`)
      return response.data
    }
  })
}

//Actor
export const useActor = (page : number) => {
  return useQuery({
    queryKey : ['actor', page],
    queryFn : async () => {
      const response = await InstanceAxios.get(`/person/popular`)
      return response.data;
    },
    refetchOnWindowFocus: false
  })
}
//
export const useMulti = (query : string) => {
  return useQuery({
    queryKey: ["multi", query],
    queryFn : async() => {
        const response = await InstanceAxios.get(`/search/multi`, { params: { query } })
        return response.data;
    }
  })
}
export const useEmbed = (id: string, type: string) => {
  return useQuery({
    queryKey: ["embed", id, type],
    queryFn : async() => {
        const response = await InstanceAxiosEmbed.get(`/${type}/${id}`)
        return response.data;
    }
  })
}
//Detail
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
export const useTrailerOfFilm = (id: string) => {
  return useQuery({
    queryKey: ["embed", id],
    queryFn : async() => {
        const response = await InstanceAxios.get(`/movie/${id}/videos`);
        return response.data;
    }
  })
}
export const useKeywordOfMovie = (id: string) => {
  return useQuery({
    queryKey: [`keyword_movie_${id}`, id],
    queryFn: async () =>{
      if(!id) return null;
      const response = await InstanceAxios.get(`/movie/${id}/keywords`)
      return response.data;
    },
    refetchOnWindowFocus: false
  })
}
//DetailTVShow
export const useDetailOftv = (id : string) => {
  return useQuery({
    queryKey: [`tvShow_${id}`, id],
    queryFn: async () =>{
      if(!id) return null;
      const response = await InstanceAxios.get(`/tv/${id}`)
      return response.data;
    },
    refetchOnWindowFocus: false
  })
}
export const useKeywordDetailOftv = (id : string) => {
  return useQuery({
    queryKey: [`keyword_tvShow_${id}`, id],
    queryFn: async () =>{
      if(!id) return null;
      const response = await InstanceAxios.get(`/tv/${id}/keywords`)
      return response.data;
    },
    refetchOnWindowFocus: false
  })
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