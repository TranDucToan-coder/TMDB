import { useState,  useMemo } from "react";
import { useNowPlayingMovies } from "../../Plugin/API/api";
import { RenderListItemMovie } from "../RenderFeature/renderListMovie";
import { RenderPagination } from "../../Plugin/Paginate/paginate";
import type { MovieResponse } from "../../type";

const ListMovie = () => {
    const [page, setPage] = useState<number>(1)

    const {data} = useNowPlayingMovies(page)
    
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