import { Lock } from "lucide-react"
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "../../components/ui/empty"
import { Button } from "../../components/ui/button"
import { Link } from "react-router-dom"

export const NoPermision = () => (
    <Empty className="flex items-center justify-center h-[85vh]">
        <EmptyHeader>
            <EmptyMedia variant="icon" className="w-1/3">
                <Lock size={192} />
            </EmptyMedia>
            <EmptyTitle>Unauthorized (401)</EmptyTitle>
            <EmptyDescription>You haven't enough permission to access this content</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
            <Link to="/"><Button>Return homepage</Button></Link>
        </EmptyContent>
    </Empty>
)