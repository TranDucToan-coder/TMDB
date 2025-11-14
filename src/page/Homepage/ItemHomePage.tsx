interface Props {
    poster_path : string,
    title : string,
    release_date : string
}
const Item = ({poster_path, title, release_date} : Props) => {    
    return (
        <div className="group">
            <img className="w-full" src={`https://image.tmdb.org/t/p/w500${poster_path}`}></img>
            <div className="mt-1">
                <button className="border rounded-xl p-2 group-hover:border-amber-300 transition-all duration-300" >Trailer</button>
                <p className="text-pretty" >{title}</p>
                <p className="text-teal-300" >{release_date}</p>
            </div>
        </div>
    )
}
export default Item