import Btn_WatchList from '../../Plugin/Custom/Watchlist';
import style from './css/ListMovie.module.css'
import { Link, useNavigate } from "react-router-dom";

interface PropsItem {
    id: number,
    poster_path: string,
    title: string
}
const Item = ({ id, poster_path, title }: PropsItem) => {
    return (
        <Link to={`/movie/${id}`} className={style.wrapper_item}>
            <div className={style.poster}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
                <span className={style.btn_watchList}>
                    <Btn_WatchList id={id}></Btn_WatchList>
                </span>
            </div>
            <div className={style.title}>
                <p className={style.titleFilm}>{title}</p>
            </div>
        </Link>
    )
}
export default Item