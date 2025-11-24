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
import { Label } from "../../components/ui/label"
import TrailerFilm from "../../page/Movie/Trailer"
import type { Movie, ResponseKeyword, ResponseVideo, Video } from "../../type"
import { URL_IMAGE_TMDB } from "../API/DefUrl"

export const RenderKeyword = ({ Item, Keyword}: { Item: Movie, Keyword: ResponseKeyword}) => (
    <div className="w-full m-auto sm:w-1/2 p-4">
        <RenderOtherInformation Item={Item} />
        <RenderDirector Item={Item} />
        <RenderCompanyProduction Item={Item} />

    </div>
)
const RenderOtherInformation = ({ Item }: { Item: Movie }) => (
    <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>OTHER INFORMATION</AccordionTrigger>
            <AccordionContent>
                <Card>
                    <CardHeader>
                        <CardTitle>Original Name</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                        <CardAction>{Item?.original_name}</CardAction>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center">
                        <CardTitle>Vote Avarage</CardTitle>
                        <CardAction>{(Item?.vote_average).toFixed(1)}</CardAction>
                    </CardContent>
                    <CardContent className="flex justify-between items-center">
                        <CardTitle>Vote Count</CardTitle>
                        <CardAction>{Item?.vote_count} votes</CardAction>
                    </CardContent>
                    <CardContent className="flex justify-between items-center">
                        <CardTitle>Total Episode</CardTitle>
                        <CardAction>{Item?.number_of_episodes || 1}</CardAction>
                    </CardContent>
                    <CardContent className="flex justify-between items-center">
                        <CardTitle>Current Episode</CardTitle>
                        <CardAction className="flex gap-2">
                            EP: {Item?.next_episode_to_air ? (Item?.next_episode_to_air?.episode_number) : <Label>1</Label>}
                        </CardAction>

                    </CardContent>
                    <CardContent className="flex justify-between items-center">
                        <div>
                            <CardTitle>Next Episode</CardTitle>
                            <CardDescription>{Item?.next_episode_to_air?.air_date}</CardDescription>
                        </div>
                        <CardAction>EP: {Item?.next_episode_to_air ? Item?.next_episode_to_air?.episode_number : "End"}</CardAction>
                    </CardContent>
                </Card>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
)

const RenderCompanyProduction = ({ Item }: { Item: Movie }) => (
    <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>PRODUCTION COMPANIES</AccordionTrigger>
            <AccordionContent>
                <Card className="mt-4 bg-yellow-300">
                    <CardContent className="flex flex-wrap justify-between w-full">
                        {Item.production_companies.map((company) => (
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

const RenderDirector = ({ Item }: { Item: Movie }) => (
    <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>CREATOR</AccordionTrigger>
            <AccordionContent>
                <Card>
                    {Item?.created_by?.map((item) => (
                        <CardHeader>
                            <CardTitle>{item.name}</CardTitle>
                            <div className="w-1/4"><img src={`${URL_IMAGE_TMDB}/${item.profile_path}`} /></div>
                        </CardHeader>
                    ))}
                </Card>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
)

const RenderListActor = ({ }: {}) => (
    <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>Actor</AccordionTrigger>
            <AccordionContent>
                <Card>

                    <CardHeader>

                    </CardHeader>
                </Card>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
)