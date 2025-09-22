import React, { useState, useEffect } from "react";
import { getDetailOfFilm } from "../../../Plugin/API/api";
import { useParams } from "react-router-dom";
import style from '../css/DetailFilm.module.css'
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
    belongs_to_collection: {
        name: string,
        backdrop_path: string
    }
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
const DetailOfMovie = () => {
    const [data, setData] = useState<Movie | null>(null)
    const { id } = useParams<{id : string}>();
    const getData = async() => {
        if (!id) return;
        const response = await getDetailOfFilm(id);
        if(response){
            console.log(response)
            setData(response)
        }
    }
    useEffect(() => {
        getData();
    },[id])
    return(
    <div>
        <div className={style.wrapper}>
            <img src={`https://image.tmdb.org/t/p/w500${data?.belongs_to_collection?.backdrop_path}`} loading="lazy">
        </img>
    </div>
       <div className={style.content}>
         <p>{data?.id}</p>
        {data?.belongs_to_collection.name}
       </div>
    </div>)
}
export default DetailOfMovie