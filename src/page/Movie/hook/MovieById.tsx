import { useQuery } from "@tanstack/react-query";
import { InstanceAxios } from "../../../Plugin/API/DefUrl";

export const useMovie = (id: string) => {
  return useQuery({
    queryKey: ["detail_movie", id],
    queryFn: async () => {
      if (!id) return null;
      const res = await InstanceAxios.get(`/movie/${id}`)
      return res.data
    },
    refetchOnWindowFocus: false
  })
}