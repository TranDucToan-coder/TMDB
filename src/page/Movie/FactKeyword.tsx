import { useState, useEffect, useMemo } from "react";
import { getKeywordOfMovie, useKeywordDetailOftv, useMovie } from "../../Plugin/API/api";
import type { ResponseKeyword, Movie } from "../../type";
//Css
import { RenderKeyword } from "../../Plugin/Custom/Card_Keyword";
//type
interface Props {
    id: string
}
const Keyword = ({ id }: Props) => {
      const {data: Movie} = useMovie(id)
        const {data: Keyword} = getKeywordOfMovie(id)
    
        const ResponseMovie : Movie = useMemo(() => (
            Movie ?? []
        ),[id])
    
        const ResponseKeyword : ResponseKeyword = useMemo(() => (
            Keyword ?? []
        ),[id])
    return <RenderKeyword TvShow={ResponseMovie} Keyword={ResponseKeyword}/>
}
export default Keyword