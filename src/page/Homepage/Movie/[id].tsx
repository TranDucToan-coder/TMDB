import { useState, useEffect } from "react";
import { getDetailOfFilm} from "../../../Plugin/API/api";
import { useParams } from "react-router-dom";
import style from '../css/DetailFilm.module.css'
//Component
import ListActor from "./listActor";
//Type
import type { Movie } from "../../../type";

const DetailOfMovie = () => {
    const [data, setData] = useState<Movie | null>(null)
    const { id } = useParams<{ id: string }>();
    const getData = async () => {
        if (!id) return;
        const response = await getDetailOfFilm(id);
        if (response) {
            console.log(response)
            setData(response)
        }
    }
    useEffect(() => {
        getData();
    }, [id])
    return (
        <div>
            <div className={style.wrapper}>
                <img src={`https://image.tmdb.org/t/p/w500${data?.belongs_to_collection?.backdrop_path}`} loading="lazy">
                </img>
            </div>
            <div className={style.content}>
                <p>{data?.id}</p>
                {data?.belongs_to_collection?.name}
                <div>
                    <button>{data?.type}</button>
                    <div>
                        {data?.genres?.map((item) => (
                            <span key={item?.id}>{item?.name} </span>
                        ))}
                    </div>
                </div>
                <h4>Overview</h4>
                <p>{data?.tagline}</p>
                <h4></h4>
            </div>
            {id ? (
                <ListActor id={id}></ListActor>
            ) : (
                <p>Loading</p>
            )}
        </div>)
}

export default DetailOfMovie