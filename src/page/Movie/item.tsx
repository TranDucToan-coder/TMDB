import Btn_WatchList from '../../Plugin/Custom/Btn_Watchlist';
import style from './css/ListMovie.module.css'
import { Link } from "react-router-dom";

interface PropsItem {
    id: number,
    poster_path: string,
    title: string
}

const Item = ({ id, poster_path, title }: PropsItem) => {
    return (
        <Link to={`/movie/${id}`} className="relative">
            <div className="">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
                <span className="absolute bottom-0 top-0 z-50 w-1/3">
                    <Btn_WatchList id={id}></Btn_WatchList>
                </span>
            </div>
            <div className="">
                <p className="">{title}</p>
            </div>
        </Link>
    )
}
export default Item