import { useState } from "react";
import { useNowPlayingMovies } from "../../Plugin/API/api";
//Type
import { RenderCaseroul } from "../RenderFeature/renderCaseroul";
import { Trailer } from "./Trailer/page";
import { Trending } from "./Trending/page";
import { Celebrities } from "./Celebities/page";
//Setting slider
const Homepage = () => {
    const [page, setPage] = useState<number>(1)

    const {data, isLoading} = useNowPlayingMovies(page)
    
    return (
        <div className="w-full m-auto sm:w-2/4">
            <RenderCaseroul data={data}/>
            <Trending/>
            <Trailer/>
            <Celebrities/>
        </div>
    )
}

export default Homepage


