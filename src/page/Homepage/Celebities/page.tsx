import { useEffect, useState } from "react";
import { useActor } from "../../../Plugin/API/api";

export const Celebrities = () => {
    const [page, setPage] = useState<number>(1);
    
    const { data } = useActor(page)

    const sortByPopularity = data ? data.sort((a : any, b : any) => b.popularity - a.popularity) : [];
    return(
        <div className="">
            <h2>Celebrities</h2>

        </div>
    )
}