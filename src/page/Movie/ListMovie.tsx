import { useState, useEffect, useMemo } from "react";
import { useNowPlayingMovies } from "../../Plugin/API/api";
import style from './css/ListMovie.module.css'
import RenderListMovie from "../Hooks/renderListMovie";
import { RenderPagination } from "../../Plugin/Paginate/paginate";
import type { MovieResponse } from "../../type";

const ListMovie = () => {
    const [page, setPage] = useState<number>(1)

    const {data, isLoading} = useNowPlayingMovies(page)

    const ResponseData : MovieResponse = useMemo(() => (
        data || []
    ),[])
    const totalPages = ResponseData.total_pages

    return (
        <div className="w-full m-auto sm:w-2/4">
            <RenderListMovie data={data}/>
            <RenderPagination page={page} setPage={setPage} totalPages={totalPages}></RenderPagination>
        </div>
    )
}
export default ListMovie