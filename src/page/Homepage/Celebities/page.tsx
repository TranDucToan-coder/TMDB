import { useState } from "react";
import { useActor } from "../../../Plugin/API/api";
import { RenderCaseroulCelebrities } from "../../RenderFeature/renderCaseroul";
import type { ResponseActor } from "../../../type";
import { RenderErrorPage } from "../../../Plugin/Custom_Page/ErrorPage";

export const Celebrities = () => {
    const [page, setPage] = useState<number>(2);
    
    const { data : responseActor, isError } = useActor(page)

    console.log(responseActor);
    if (isError) return <RenderErrorPage/>
    return(
        <div className="">
            <h2>Celebrities</h2>
            <RenderCaseroulCelebrities data={responseActor}/>
        </div>
    )
}