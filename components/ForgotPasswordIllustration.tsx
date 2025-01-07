import { View, Text, Image } from "react-native";
import React from "react";

interface forgotPasswordInterface {
  text?: string;
}

const ForgotPasswordIllustration = ({
  text = "Forgot password",
}: forgotPasswordInterface) => {
  return (
    <View className="relative">
      <View className="absolute  self-center">
        <Image source={require("@/assets/images/Lines.png")} className="h-[230px] w-[230px] absolute top-0" />
        <Image source={require("@/assets/images/person.png")} className="h-[140px] w-[190px] mt-[150px]" />
      </View>
      <Text className="text-lg text-blue-500 text-center font-semibold mt-16">{text}</Text>
    </View>
  );
};



export const ResetPasswordIllustration =({
  text = "Create new password",
}: forgotPasswordInterface) => {
  return (
    <View className="relative">
      <View className="absolute  self-center">
        <Image source={require("@/assets/images/Lines.png")} className="h-[230px] w-[230px] " />
        <Image source={require("@/assets/images/reset-password.png")} className=" absolute  w-[80px] h-[120px] mt-[150px]" />
      </View>
      <Text className="text-lg text-blue-500 text-center font-semibold mt-16">{text}</Text>
    </View>
  );
};

export default ForgotPasswordIllustration;
