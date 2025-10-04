import { useState, useEffect } from "react";
import { getDetailOfTv, getEmbedFilm, getMultiOfFilm } from "../../Plugin/API/api";
import { useParams } from "react-router-dom";
import style from '../Homepage/css/DetailFilm.module.css'
//Component
import ListActor from "../TV_show/listActor";
//Type
import { type ResponseMulti, type Movie, type ResponseEmbed } from "../../type";
import TrailerFilm from "../TV_show/Trailer";
import Keyword from "../TV_show/FactKeyword";

const DetailOfTv = () => {
    const [data, setData] = useState<Movie | null>(null)
    const [embed, setEmbed] = useState<ResponseEmbed | null>(null)
    const [multi, setMulti] = useState<ResponseMulti | null>(null)
    const { id } = useParams<{ id: string }>();
    const getData = async () => {
        if (!id) return;
        const response = await getDetailOfTv(id);
        if (response) {
            setData(response);
            const multiResponse = await getMultiOfFilm(response.name);
            if (multiResponse) {
                setMulti(multiResponse);
                const mediaType = multiResponse?.results?.[0]?.media_type;
                if (mediaType) {
                    const getEmbeb = await getEmbedFilm(id, mediaType);
                    if (getEmbeb) {
                        setEmbed(getEmbeb);
                    }
                }
            }
        }
    };
    useEffect(() => {
        getData();
    }, [id])
    const handleWatch = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.leftContent}>
                    <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} loading="lazy">
                    </img>
                </div>
                <div className={style.rightContent}>
                    <p className={style.id}><span>ID: </span>{data?.id}</p>
                    <p className={style.title}>{data?.title}</p>
                    <div className={style.type}>
                        <button>{data?.id}</button>
                        <div>
                            {data?.genres?.map((item : any) => (
                                <span key={item?.id}>{item?.name}, </span>
                            ))}
                        </div>
                    </div>
                    <p>{data?.tagline}</p>
                    <h4>Overview</h4>
                    <p className={style.overview}>{data?.overview}</p>
                </div>
            </div>
            <hr></hr>
            <div className={style.mainContent}>
                <div className={style.leftColumn}>
                    {embed?.episodes?.[0]?.server_data?.[0]?.link_embed ? (
                        <div className={style.chapter}>
                            <p>SERVER: {embed.episodes[0].server_name}</p>
                            {embed.episodes[0].server_data?.map((item, index) => (
                                <button onClick={() => handleWatch(item.link_embed)} key={index}>{index + 1}</button>
                            ))}
                        </div>
                    ) : (
                        <button disabled>None finish</button>
                    )}
                    {embed?.episodes?.[0]?.server_data?.[0]?.link_embed ? (
                        <div className={style.chapter}>
                            <p>SERVER: {embed.episodes[1].server_name}</p>
                            {embed.episodes[0].server_data?.map((item, index) => (
                                <button onClick={() => handleWatch(item.link_embed)} key={index}>{index + 1}</button>
                            ))}
                        </div>
                    ) : (
                        <button disabled>None finish</button>
                    )}
                    {id ? (<TrailerFilm id={id}></TrailerFilm>) : (
                        <p>Loading</p>
                    )}
                    {id ? (
                        <ListActor id={id}></ListActor>
                    ) : (
                        <p>Loading</p>
                    )}
                </div>
                <div className={style.rightColumn}>
                    {id && (<Keyword id={id}></Keyword>)}
                </div>
            </div>
        </div>)
}

export default DetailOfTv