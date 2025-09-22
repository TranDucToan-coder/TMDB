import React, { useState, useEffect } from "react";
import { getListMovie, getListMovie_popular, getTrailer, getDataUpcoming, getActor } from "../../Plugin/API/api";
import style from './css/Homepage.module.css'
import style2 from './css/Trending.module.css'
import style3 from './css/Trailer.module.css'
import style4 from './css/Celebrities.module.css'
import './css/Slick.css'
//Slider
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Item from "./item";
//Type
interface Movie {
    id: number,
    title: string,
    original_title: string,
    backdrop_path: string,
    poster_path: string,
    release_date: string,
    popularity: number,
    vote_average: number,
    vote_count: number,
    //Video
    iso_639_1: string,
    iso_3166_1: string,
    key: string,
    name: string,
    official: boolean,
    published_at: string,
    site: string,
    size: number,
    type: string
}
interface MovieResponse {
    results: Movie[];
}
interface Actor {
    id: number,
    gender: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    known_for: {
        backdrop_path : string,
        id: number,
        title: string,
        original_title: string,
        overview: string,
        poster_path: string,
        media_type: string,
        original_language: string,
        release_date: string,
        vote_average: number,
        vote_count: number
    }
}
interface ActorResponse {
    results : Actor[];
}
//Setting slider
const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
}
const settingTrending = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
}
const settingTrailer = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,

}
const Homepage = () => {
    const [data, setData] = useState<MovieResponse | null>(null)
    const [page, setPage] = useState<number>(1)

    const getData = async () => {
        const response = await getListMovie(page);
        if (response) {
            setData(response)
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className={style.wrapper}>
            {<Slider {...settings} className={style.slick}>
                {data?.results.map((movie) => (
                    <Link to={`/Movie/${movie.id}`}>
                    <div className={style.item}>
                        <img className={style.backdrop} src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}></img>
                        <div className={style.overlay}></div>
                        <div className={style.description}>
                            <img className={style.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
                            <div className={style.title}>
                                <button><img src="/play-svgrepo-com.svg" alt="" /></button>
                                <div>
                                    <p className={style.name}>{movie?.original_title}</p>
                                    <p className={style.trailer}>Watch the trailer</p>
                                    <div className={style.vote}>
                                        <p><span><img src="./vote-empty-svgrepo-com.svg" alt="" /></span>{movie?.vote_average}</p>
                                        <p><span><img src="./wishlist-svgrepo-com.svg" alt="" /></span>{movie?.vote_count}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                ))}
            </Slider>}
            <Trending />
            <Trailer></Trailer>
            <Celebrities></Celebrities>
        </div>
    )
}
const Trailer = () => {
    const [data, setData] = useState<MovieResponse | null>(null)
    const [page, setPage] = useState<number>(1)

    const getData = async () => {
        const response = await getTrailer(page);
        if (response) {
            setData({ results: response })
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className={style3.trailer}>
            <h2>Trailer</h2>
            {data ? (
                <Slider {...settingTrailer} className={style3.slick}>
                {data?.results.map((movie) => (
                    <div key={movie.id}>
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${movie?.key}`}
                            title="YouTube trailer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>
                ))}
            </Slider>
            ) : (
                <div>Loading</div>
            )}
        </div>
    )
}
const Trending = () => {
    const [data, setData] = useState<MovieResponse | null>(null)
    const [page, setPage] = useState<number>(1)
    const getData = async () => {
        const response = await getListMovie_popular(page);
        if (response) {
            setData(response)
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className={style2.trending}>
            <div className={style2.titleTrending}>
                <p>Trending</p>
                <button>
                    <p>Today</p>
                    <p>This Week</p>
                </button>
            </div>
            <Slider {...settingTrending} className={style2.slick}>
                {data?.results.map((movie) => (
                    <Link to={`/Movie/${movie.id}`}>
                        <Item poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date}></Item>
                    </Link>
                ))}
            </Slider>
        </div>)
}
const TvShow = () => {

}
const UpComing = () => {
}
const Celebrities = () => {
    const [data, setData] = useState<ActorResponse | null>(null)
    const [page, setPage] = useState<number>(1);
    const getData = async() => {
        const response = await getActor(page);
        if(response){
            console.log(response)
            setData(response);
        }
        else{
            setData(null);
        }
    }
    useEffect(() => {
        getData();
    },[])
    const sortByPopularity = data?.results ? data.results.sort((a, b) => b.popularity - a.popularity) : [];
    return(
        <div className={style4.wrapper}>
            <h2>Celebrities</h2>
            <Slider {...settingTrending}>
                {sortByPopularity.map((item) => (
                <div className={style4.item}>
                    <div className={style4.wrapper_image}>
                        <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} loading="lazy"></img>
                    </div>
                    <p>{item.name}</p>
                </div>
            ))}
            </Slider>
        </div>
    )
}
export default Homepage