import { useState, useEffect } from "react";
import { useTvShow } from "../../Plugin/API/api";
import RenderListMovie from "../Hooks/renderListMovie";
import { RenderPagination } from "../../Plugin/Paginate/paginate";

const ListTV_Show = () => {
    const [page, setPage] = useState<number>(1)

    const {data : ResponseTv} = useTvShow(page);
    const total_pages = ResponseTv
    return (
        <>
        <RenderListMovie data={ResponseTv}/>
        <RenderPagination page={page} setPage={setPage} totalPages={total_pages}></RenderPagination>
        </>
    )
}
export default ListTV_Show