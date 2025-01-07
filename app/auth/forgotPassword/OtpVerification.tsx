import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Back from "@/components/Back";
import { useRouter } from "expo-router";

const OtpVerification = () => {
  const [otp, setOtp] = React.useState(["", "", "", ""]);
  const [currentInput, setCurrentInput] = React.useState(0);
  const inputRefs = React.useRef<(TextInput | null)[]>([]);

  const router = useRouter();
  function handleContinue() {
    router.navigate("/auth/forgotPassword/ResetPassword");
  }
  return (
    <View className="bg-black flex-1 px-5">
      <Back />
      <Text className="text-2xl text-blue-500 text-center font-semibold mt-8 mb-8">
        OPT code verification
      </Text>
      <Text className="text-white text-light  text-base max-w-[90%] self-center">
        We have sent an OTP code to your email bella***b@gmail.com. Enter the
        OTP below to verify.
      </Text>

      <View className="flex-row justify-evenly  items-center space-x-4 mt-8">
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            className="w-16 h-16 bg-zinc-900 border border-blue-500 rounded-lg text-blue-500 text-center text-xl"
            maxLength={1}
            onChangeText={(text) => {
              const newOtp = [...otp];
              newOtp[index] = text;
              setOtp(newOtp);
              if (text && index < 3) {
                inputRefs.current[index + 1]?.focus();
                setCurrentInput(index + 1);
              }
            }}
            ref={(ref) => {
              inputRefs.current[index] = ref;
            }}
          />
        ))}
      </View>

      <Text className="text-white text-light  text-sm mt-5 max-w-[80%] text-center">
        resend code in 5s
      </Text>

      <TouchableOpacity
        className="w-full bg-sky-600 rounded-lg py-2 mt-auto mb-10 self-center "
        onPress={handleContinue}
      >
        <Text className="text-center text-white text-lg font-semibold">
          Confirm
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpVerification;
