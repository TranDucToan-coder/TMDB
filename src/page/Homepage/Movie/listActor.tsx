import { useState, useEffect } from "react"
import { getListActorOfFilm } from "../../../Plugin/API/api"
import type { ResponseActor } from "../../../type"
//Style
import style from '../css/Celebrities.module.css'
interface props {
    id: string
}
const ListActor = ({ id }: props) => {
    const [dataActor, setDataActor] = useState<ResponseActor | null>(null)
    const getData = async () => {
        if (!id) return;
        const responseActor = await getListActorOfFilm(id);
        if (responseActor) {
            console.log(responseActor)
            setDataActor(responseActor)
        }
    }
    useEffect(() => {
        getData();
    }, [id])
    return (
        <div>
            <p>Cast</p>
            {dataActor?.cast ? (
                dataActor.cast?.map((item) => (
                    <div key={item?.id}>
                        <img src={`https://image.tmdb.org/t/p/w200${item?.profile_path}`}></img>
                        <p>{item?.character}</p>
                    </div>
                ))
            ) : (
                 <p>Loading</p>
            )}
           <h3>FullCast& Crew</h3>
        </div>
    )
}
export default ListActor