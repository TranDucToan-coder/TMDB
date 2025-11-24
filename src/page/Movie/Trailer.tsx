import { useCallback, useMemo } from "react";
import { useTrailerOfFilm } from "../../Plugin/API/api";
import type { Video } from "../../type";
import { RenderDetail_Trailer } from "../RenderFeature/renderDetail_Trailer";
import { RenderCaseroulTrailer } from "../RenderFeature/renderCaseroul";
//Type
interface props {
    id: string
}

const TrailerFilm = ({ id }: props) => {
    const {data} = useTrailerOfFilm(id)
    const response : Video[] = useMemo(() => {
        return data 
    },[id])
    return <RenderCaseroulTrailer data={response}/>
}
export default TrailerFilm
