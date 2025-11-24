import { useMemo } from "react";
import { useDetailOftv, useKeywordDetailOftv, useKeywordOfMovie, useMovie, useTrailerOfFilm } from "../../Plugin/API/api";
import type { ResponseKeyword, Movie } from "../../type";
//Css
import { RenderKeyword } from "../../Plugin/Custom_Component/Card_Keyword";
//type
interface Props {
    id: string
}
export const KeywordTvShow = ({ id }: Props) => {
    const { data: TvShow } = useDetailOftv(id)
    const { data: Keyword } = useKeywordDetailOftv(id)

    const ResponseTvShow: Movie = useMemo(() => (
        TvShow ?? null
    ), [id])

    const ResponseKeyword: ResponseKeyword = useMemo(() => (
        Keyword ?? null
    ), [id])

    return <RenderKeyword Item={ResponseTvShow} Keyword={ResponseKeyword} />
}

export const KeywordMovie = ({ id }: Props) => {
    const { data: Movie } = useMovie(id)
    const { data: Keyword } = useKeywordOfMovie(id)

    const responseMovie = Movie ?? null;
    const responseKeyword = Keyword ?? [];

    return <RenderKeyword Item={responseMovie} Keyword={responseKeyword} />
}