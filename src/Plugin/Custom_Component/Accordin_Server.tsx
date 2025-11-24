import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../components/ui/accordion"
import { Button } from "../../components/ui/button"
import type { ResponseEmbed } from "../../type"

interface EmbedProps {
    embed: ResponseEmbed,
    handleWatch: (embed: any) => void
}
export const Render_AccodinServer = ({ embed, handleWatch }: EmbedProps) => (
    <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold">SERVER</AccordionTrigger>
            <AccordionContent>
                {embed?.episodes?.[0]?.server_data?.[0]?.link_embed ? (
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold">SERVER: {embed.episodes[0].server_name}</p>
                        <div className="flex flex-wrap justify-start gap-2">
                            {embed.episodes[0].server_data.map((item, index) => (
                                <Button onClick={() => handleWatch(item.link_embed)} className="border rounded-xs hover:bg-red-200 transition-all duration-300">
                                    Tập {index + 1}
                                </Button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="">
                        <Button disabled>None finish</Button>
                    </div>
                )}
            </AccordionContent>
        </AccordionItem>
    </Accordion>
)