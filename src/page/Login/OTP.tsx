import { useEffect, useState } from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../components/ui/input-otp"
import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { useLocation, useNavigate } from "react-router-dom"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { toast } from "sonner"

export default function OTP() {
  const demoOTP = "123456"
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''))

  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state;

  const handleSubmit = () => {
    if (otp.join('') === demoOTP) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/")
    } else {
      toast("Invalid OTP")
      return
    }

  }
  useEffect(() => {
  }, [otp])
  return (
    <div className="flex items-center h-[85vh] flex-col">
      <Card className="w-4/4 h-130 m-auto sm:w-1/4">
        <CardHeader className="block text-4xl font-bold text-center m-5">OTP</CardHeader>
        <CardContent className="w-full flex flex-col justify-center flex-1 mb-16">
          <InputOTP
            className=""
            maxLength={6}
            minLength={1}
            value={otp.join('')}
            onChange={(e) => setOtp(e.split(''))}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          >
            <InputOTPGroup className="w-full flex justify-center gap-1">
              <InputOTPSlot
                index={0}
                className="w-1/4 h-20 gap-2 text-4xl border"
              />
              <InputOTPSlot
                index={1}
                className="w-1/4 h-20 gap-2 text-4xl border"
              />
              <InputOTPSlot
                index={2}
                className="w-1/4 h-20 gap-2 text-4xl border"
              />
              <InputOTPSlot
                index={3}
                className="w-1/4 h-20 gap-2 text-4xl border"
              />
              <InputOTPSlot
                index={4}
                className="w-1/4 h-20 gap-2 text-4xl border"
              />
              <InputOTPSlot
                index={5}
                className="w-1/4 h-20 gap-2 text-4xl border"
              />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-sm text-gray-600 flex justify-center">
            Bạn nhập: {otp.join('') || "Chưa nhập gì"}
          </p>
        </CardContent>
        <CardFooter>
          <CardContent className="w-full mb-8">
            <div className="flex justify-center">
              <Button className="w-6/7 h-12 cursor-pointer rounded-2xl" type="submit" onClick={handleSubmit}>Submit</Button>
            </div>
          </CardContent>
        </CardFooter>
      </Card>
    </div>
  )
}
