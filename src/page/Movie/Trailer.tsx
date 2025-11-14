import { useState, useEffect } from "react";
import { getTrailerOfFilm } from "../../Plugin/API/api";
import type { ResponseVideo } from "../../type";
//Slick
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Type
interface props {
    id: string
}
//Css
import style from '../Homepage/css/Trailer.module.css'
import '../Homepage/css/Slick.css'
const setting = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive : [{
        breakpoint : 768,
        settings: {
            slidesToShow : 1,
            slidesToScroll: 1,
        }
    }]
}
const TrailerFilm = ({ id }: props) => {
    const [data, setData] = useState<ResponseVideo | null>(null);
    const getData = async () => {
        const response = await getTrailerOfFilm(id);
        if (response) {
            setData(response)
        }
    }
    const lenght = data?.length;
    useEffect(() => {
        getData();
    }, [id])
    return (
        <div className={style.wrapper}>
            <h2>Trailer: <span>{lenght} video</span></h2>
            <Slider {...setting} className={style.slick}>
            </Slider>
        </div>
    )
}
export default TrailerFilm
