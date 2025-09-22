import style2 from './css/Trending.module.css'
import style from './css/Homepage.module.css'

interface Props {
    poster_path : string,
    title : string,
    release_date : string
}
const Item = ({poster_path, title, release_date} : Props) => {
    return (
        <div className={style2.item}>
            <img className={style.poster} src={`https://image.tmdb.org/t/p/w500${poster_path}`}></img>
            <div className={style2.title}>
                <button className={style.btn_trailer}>Trailer</button>
                <p className={style2.titleFilm}>{title}</p>
                <p className={style2.release_date}>{release_date}</p>
            </div>
        </div>
    )
}
export default Item