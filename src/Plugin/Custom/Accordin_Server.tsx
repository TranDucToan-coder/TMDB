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
            <AccordionTrigger>SERVER</AccordionTrigger>
            <AccordionContent>
                {embed?.episodes?.[0]?.server_data?.[0]?.link_embed ? (
                    <div className="">
                        <div><p>SERVER: {embed.episodes[0].server_name}</p></div>
                        <div className="">
                            <Button onClick={() => handleWatch(embed.episodes[0].server_data[0].link_embed)} className="border rounded-xl hover:border-red-300">
                                Xem phim
                            </Button>
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