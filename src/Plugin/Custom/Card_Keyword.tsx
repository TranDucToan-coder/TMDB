import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card"
import type { Movie, ResponseKeyword } from "../../type"
import { URL_IMAGE_TMDB } from "../API/DefUrl"

export const RenderKeyword = ({ TvShow, Keyword }: { TvShow: Movie, Keyword: ResponseKeyword }) => (
    <div className="w-full m-auto sm:w-1/2 p-4">

        <RenderOtherInformation TvShow={TvShow}/>
        <RenderDirector TvShow={TvShow}/>
        <RenderCompanyProduction TvShow={TvShow} />

    </div>
)
const RenderOtherInformation = ({TvShow} : {TvShow: Movie}) => (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>OTHER INFORMATION</AccordionTrigger>
                <AccordionContent>
                    <Card>
                        <CardHeader>
                            <CardTitle>Original Name</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                            <CardAction>{TvShow?.original_name}</CardAction>
                        </CardHeader>
                        <CardContent className="flex justify-between items-center">
                            <CardTitle>Vote Avarage</CardTitle>
                            <CardAction>{(TvShow?.vote_average).toFixed(1)}</CardAction>
                        </CardContent>
                        <CardContent className="flex justify-between items-center">
                            <CardTitle>Vote Count</CardTitle>
                            <CardAction>{TvShow?.vote_count} votes</CardAction>
                        </CardContent>
                        <CardContent className="flex justify-between items-center">
                            <CardTitle>Total Episode</CardTitle>
                            <CardAction>{TvShow?.number_of_episodes}</CardAction>
                        </CardContent>
                        <CardContent className="flex justify-between items-center">
                            <CardTitle>Current Episode</CardTitle>
                            <CardAction>
                                EP: {TvShow?.next_episode_to_air ? (TvShow?.next_episode_to_air?.episode_number) : TvShow?.number_of_episodes}
                            </CardAction>

                        </CardContent>
                        <CardContent className="flex justify-between items-center">
                            <div>
                                <CardTitle>Next Episode</CardTitle>
                                <CardDescription>{TvShow?.next_episode_to_air?.air_date}</CardDescription>
                            </div>
                            <CardAction>EP: {TvShow?.next_episode_to_air ? TvShow?.next_episode_to_air?.episode_number : "End"}</CardAction>
                        </CardContent>
                    </Card>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
)
const RenderCompanyProduction = ({ TvShow }: { TvShow: Movie }) => (
    <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>PRODUCTION COMPANIES</AccordionTrigger>
            <AccordionContent>
                <Card className="mt-4 bg-yellow-300">
                    <CardContent className="flex flex-wrap justify-between w-full">
                        {TvShow.production_companies.map((company) => (
                            <div className="w-1/2 flex items-center justify-center mb-4">
                                <img src={`${URL_IMAGE_TMDB}/${company.logo_path}`} />
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </AccordionContent>
        </AccordionItem>
    </Accordion>

)

const RenderDirector = ({ TvShow }: { TvShow: Movie }) => (
    <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>CREATOR</AccordionTrigger>
            <AccordionContent>
                <Card>
                {TvShow?.created_by?.map((item) => (
                    <CardHeader>
                        <CardTitle>{item.name}</CardTitle>
                        <div className="w-1/4"><img src={`${URL_IMAGE_TMDB}/${item.profile_path}`}/></div>
                    </CardHeader>
                ))}
            </Card>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
)