import type { Movie, MovieResponse } from "../../type"
import { MovieItem, TvShowItem } from "./RenderItem";

export const RenderListItemMovie = ({ data }: { data: MovieResponse }) => {
    return (
        <div className="">
            {data?.results?.length ? (
                <div className="flex flex-wrap">
                    {data?.results.map((item: Movie) => (
                        <div key={item.id} className="w-1/2 p-4 rounded-2xl relative sm:w-1/4">
                            <MovieItem id={item.id} poster_path={item?.poster_path} title={item.title ?? item.original_name} />
                        </div>
                    ))}
                </div>) : (
                <p>Loading</p>
            )}
        </div>
    )
}

export const RenderListItemTvShow = ({ data }: { data: MovieResponse }) => {
    return (
        <div className="">
            {data?.results?.length ? (
                <div className="flex flex-wrap">
                    {data?.results.map((item: Movie) => (
                        <div key={item.id} className="w-1/2 p-4 rounded-2xl relative sm:w-1/4">
                            <TvShowItem id={item.id} poster_path={item?.poster_path} title={item.title ?? item.original_name} />
                        </div>
                    ))}
                </div>) : (
                <p>Loading</p>
            )}
        </div>
    )
}