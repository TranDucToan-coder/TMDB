import { useState, useEffect } from "react";
import { getKeywordFilm } from "../../Plugin/API/api";
import type { ResponseKeyword, Movie } from "../../type";
//Css
import style from '../Homepage/css/Keyword.module.css'
import { useMovie } from "./hook/MovieById";
//type
interface Props {
    id: string
}
const Keyword = ({ id }: Props) => {
    const [data, setData] = useState<ResponseKeyword | null>(null);
    const [dataMovie, setDataMovie] = useState<Movie | null>(null);
    const {data: responseDetailMovie} = useMovie(id ?? "")
    const getData = async () => {
        const response = await getKeywordFilm(id);
        const responseMovie = await responseDetailMovie
        if (response) {
            setData(response);
        }
        if(responseMovie){
            setDataMovie(responseMovie);
        }
    }
    useEffect(() => {
        getData();
    }, [id])
    return (
        <div className={style.wrapper}>
            <h3>Original Name</h3>
            <p>{dataMovie?.original_title}</p>
            <h3>Status</h3>
            <p>{dataMovie?.status}</p>
            <h3>Network</h3>
            <div className={style.production_companies}>
                {dataMovie?.production_companies.map((item) => (
                    <img src={`https://image.tmdb.org/t/p/w500${item.logo_path}`}></img>
                ))}
            </div>
            <h3>Original language</h3>
            {dataMovie?.original_language === "ja" ? (
                <p>Japanese</p>
            ) : (
                <p>USA</p>
            )}
            <h3>Keywords</h3>
            <div className={style.listKeyword}>
                {data?.keywords.map((item) => (
                    <button key={item?.id}>
                        {item?.name}
                    </button>
                ))}
            </div>
        </div>
    )
}
export default Keyword