import { useState, useEffect, useMemo, useContext } from "react";
import { useSearchTvShow, useTvShow } from "../../Plugin/API/api";
import { RenderListItemTvShow } from "../RenderFeature/renderListMovie"
import { RenderPagination } from "../../Plugin/Paginate/paginate";
import type { MovieResponse } from "../../type";
import { SearchContext } from "../../Plugin/Context/SearchContext";

const ListTV_Show = () => {
    const [page, setPage] = useState<number>(1)
    const {query, setQuery} = useContext(SearchContext);
    const { data } = query ? useSearchTvShow(page, query) : useTvShow(page);

    const ResponseData: MovieResponse = data

    const totalPages = ResponseData?.total_pages

    return (
        <div className="w-full m-auto sm:w-2/4">
            <RenderListItemTvShow data={ResponseData} />
            <RenderPagination page={page} setPage={setPage} totalPages={totalPages}></RenderPagination>
        </div>
    )
}
export default ListTV_Show