import { useMemo } from "react";
import { useDetailOftv, useKeywordDetailOftv } from "../../Plugin/API/api";
import type { ResponseKeyword, Movie } from "../../type";
//Css
import { RenderKeyword } from "../../Plugin/Custom/Card_Keyword";
//type
interface Props {
    id: string
}
const Keyword = ({ id }: Props) => {
    const {data: TvShow} = useDetailOftv(id)
    const {data: Keyword} = useKeywordDetailOftv(id)

    const ResponseTvShow : Movie = useMemo(() => (
        TvShow ?? []
    ),[id])

    const ResponseKeyword : ResponseKeyword = useMemo(() => (
        Keyword ?? []
    ),[id])

    return <RenderKeyword TvShow={ResponseTvShow} Keyword={ResponseKeyword}/>
}
export default Keyword