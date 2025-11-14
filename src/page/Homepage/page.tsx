import { useState } from "react";
import { useNowPlayingMovies } from "../../Plugin/API/api";
import './css/Slick.css'
//Type
import { RenderCaseroul } from "./Feature/Caseroul";
import { Trailer } from "./Trailer/page";
import { Trending } from "./Trending/page";
//Setting slider

const settingTrailer = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,

}
const Homepage = () => {
    const [page, setPage] = useState<number>(1)

    const {data, isLoading} = useNowPlayingMovies(page)
    
    return (
        <div className="w-full m-auto sm:w-2/4">
            <RenderCaseroul data={data}/>
            <Trending />
            <Trailer/>

        </div>
    )
}


const TvShow = () => {

}
const UpComing = () => {
}

export default Homepage


