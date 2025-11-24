import { useState } from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../../components/ui/input-otp"

export default function OTP() {
  const demoOTP = "123456"
  const [otp, setOtp] = useState("")

  return (
    <div className="flex flex-col items-center gap-4">
      <InputOTP
        maxLength={6}
        value={otp}
        onChange={setOtp}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      <p className="text-sm text-gray-600">
        Bạn nhập: {otp || "Chưa nhập gì"}
      </p>
    </div>
  )
}
