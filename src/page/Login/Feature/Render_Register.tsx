import { Label } from "@radix-ui/react-label"
import { Card, CardHeader, CardContent, CardFooter } from "../../../components/ui/card"
import { Key, User } from "lucide-react"
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"


interface RegisterFormProps {
    handleChangeUsername: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: () => void
    toggleState: () => void
}
export const Render_RegisterForm = ({ handleChangeUsername, toggleState, handleSubmit } : RegisterFormProps) => (
    <Card className="w-4/4 h-130 m-auto sm:w-1/4">
        <CardHeader className="m-5"><Label className="block text-4xl font-bold text-center">Register</Label></CardHeader>
        <CardContent className="w-full mb-4">
            <div className="relative w-full">
                <Input className="w-full h-12 border-t-0 border-l-0 border-r-0 border-amber-100 focus:outline-0" onChange={handleChangeUsername}/>
                <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            </CardContent>
            <CardContent className="w-full mb-4">
            <div className="relative">
                <Input className="w-full h-12 border-t-0 border-l-0 border-r-0 border-amber-100 focus:outline-0" type="password"/>
                <Key className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
        </CardContent>
        <CardContent className="w-full mb-8">
            <div className="flex justify-center">
                <Button className="w-6/7 h-12 cursor-pointer rounded-2xl" type="submit" onClick={handleSubmit}>Sign up</Button>
            </div>
        </CardContent>
        <CardFooter>
            <CardContent className="w-full">
                <p className="flex justify-center cursor-pointer" onClick={toggleState}>Already had account?</p>
            </CardContent>
        </CardFooter>
    </Card>
)