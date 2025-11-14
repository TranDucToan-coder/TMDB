import { useState, useEffect } from "react";
import { useTvShow } from "../../Plugin/API/api";
import RenderListMovie from "../Hooks/renderListMovie";
import { RenderPagination } from "../../Plugin/Paginate/paginate";

const ListTV_Show = () => {
    const [page, setPage] = useState<number>(1)

    const {data : ResponseTv} = useTvShow(page);
    console.log(ResponseTv);
    const total_pages = ResponseTv
    return (
        <div className="w-full m-auto sm:w-2/4">
            <RenderListMovie data={ResponseTv}/>
            <RenderPagination page={page} setPage={setPage} totalPages={total_pages}></RenderPagination>
        </div>
    )
}
export default ListTV_Show