import { useState,  useMemo, useContext } from "react";
import { useNowPlayingMovies, useSearchMmovie } from "../../Plugin/API/api";
import { RenderListItemMovie } from "../RenderFeature/renderListMovie";
import { RenderPagination } from "../../Plugin/Paginate/paginate";
import type { MovieResponse } from "../../type";
import { SearchContext } from "../../Plugin/Context/SearchContext";

const ListMovie = () => {
    const [page, setPage] = useState<number>(1)
    const {query} = useContext(SearchContext);
    const { data } = query ? useSearchMmovie(query, page) : useNowPlayingMovies(page)
    
    const ResponseData : MovieResponse = useMemo(() => (
        data || []
    ),[])
    const totalPages = ResponseData.total_pages

    return (
        <div className="w-full m-auto sm:w-2/4">
            <RenderListItemMovie data={data}/>
            <RenderPagination page={page} setPage={setPage} totalPages={totalPages}/>
        </div>
    )
}
export default ListMovie