import { useState, useEffect } from "react"
import { getListActorOfFilm } from "../../Plugin/API/api"
import type { ResponseActor } from "../../type"
//Style
import style from '../Homepage/css/Celebrities.module.css'
//Slick
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Type
interface props {
    id: string
}
const setting = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    responsive : [{
        breakpoint : 768,
        settings : {
            slidesToShow : 4
        }
    }]
}
const ListActor = ({ id }: props) => {
    const [dataActor, setDataActor] = useState<ResponseActor | null>(null)
    const getData = async () => {
        if (!id) return;
        const responseActor = await getListActorOfFilm(id);
        if (responseActor) {
            setDataActor(responseActor)
        }
    }
    useEffect(() => {
        getData();
    }, [id])
    return (
        <div className={style.wrapperList}>
            <h2>Cast</h2>
            {dataActor?.cast ? (
                <Slider {...setting}>
                    {dataActor.cast?.map((item) => (
                        <div className={style.item} key={item?.id}>
                            <div className={style.wrapper_image}>
                                {item.profile_path ? (
                                    <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} loading="lazy"></img>
                                ) : (
                                    <img src={`./public/default_av.jpg`} loading="lazy"></img>
                                )}
                            </div>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </Slider>
            ) : (
                <p>Loading</p>
            )}
            <h3>FullCast& Crew</h3>
        </div>
    )
}
export default ListActor