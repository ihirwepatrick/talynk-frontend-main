import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { BackWithLogo } from "@/components/Back";
import { useRouter } from "expo-router";

const FacialRecognitionSplash = () => {
  const router  =useRouter();
  function handleClick(){
    router.navigate("/auth/signUp/FacialRecognition");
  }
  return (
    <View className="flex-1 bg-black">
      <BackWithLogo />
      <Text className="text-center w-full text-xl font-semibold text-blue-600 mt-3">
        Face recognition
      </Text>
      <Text className="text-white text-base text-center w-full mt-5 ">
        Don't worry you are one step away ...
      </Text>
      <Image
        source={require("@/assets/images/facialrecognition.png")}
        className="w-[78%] h-[50%] self-center"
      />
      <TouchableOpacity className="w-[80%] bg-blue-600 rounded-3xl py-2 mt-auto mb-10 self-center" onPress={handleClick}>
        <Text className="text-center text-white text-lg font-semibold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FacialRecognitionSplash;
