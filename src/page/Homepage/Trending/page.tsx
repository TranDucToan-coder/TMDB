import { useState } from "react"
import { useNowPlayingMovies } from "../../../Plugin/API/api"
import { RenderCaseroulNowPlaying } from "../../RenderFeature/Caseroul"
import { Switch } from "../../../components/ui/switch"
import { Label } from "../../../components/ui/label"

export const Trending = () => {
    const [page, setPage] = useState<number>(1)

    const { data: nowPalyingResponse } = useNowPlayingMovies(page)

    return (
        <div className="mt-2 mb-2 p-4 sm:p-0">
            <SwitchDemo/>
            <RenderCaseroulNowPlaying data={nowPalyingResponse} />
        </div>)
}

function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <Switch id="airplane-mode" className=""/>
      <Label htmlFor="airplane-mode">Week / Month</Label>
    </div>
  )
}