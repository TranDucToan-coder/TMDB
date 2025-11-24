import React, { useMemo, useState } from "react"
import { useTrailer } from "../../../Plugin/API/api"
import { RenderCaseroulTrailer } from "../../RenderFeature/renderCaseroul"
import type { ResponseVideo, Video } from "../../../type"

export const Trailer = () => {
    const [page, setPage] = useState<number>(1)

    const { data: responseTrailer, isLoading } = useTrailer(page)

    const ResVideo : Video[] = responseTrailer || []

    if(isLoading) return <p>Loading</p>
    return <RenderCaseroulTrailer data={ResVideo}></RenderCaseroulTrailer>
}