import React, { useMemo, useState } from "react"
import { useTrailer } from "../../../Plugin/API/api"
import { RenderCaseroulTrailer } from "../Feature/Caseroul"

export const Trailer = () => {
    const [page, setPage] = useState<number>(1)

    const { data: responseTrailer, isLoading } = useTrailer(page)

    const ResponseTrailer = useMemo(
        () => (
            responseTrailer ?? []
        ), [responseTrailer])
    
    if(isLoading) return <p>Loading</p>
    return (
        <RenderCaseroulTrailer data={ResponseTrailer}></RenderCaseroulTrailer>
    )
}