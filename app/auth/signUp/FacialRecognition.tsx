import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Back from "@/components/Back";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const FacialRecognition = () => {
  const router = useRouter();
  function handleClick() {
    router.back();
  }

  function handleContinue() {
    router.navigate("/auth/signUp/Intrests");
  }
  return (
    <View className="flex-1 bg-white">
      <TouchableOpacity className="bg-white p-2 z-30" onPress={handleClick}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text className="text-center w-full text-2xl font-semibold text-sky-500 mt-3">
        Face recognition
      </Text>

      <Text className="text-black text-base text-center w-full mt-3  max-w-[80%] mx-auto">
        Please put your phone in front of your face
      </Text>
      <Image
        source={require("@/assets/images/facial-recognition.png")}
        className="h-[228px] w-[233px] self-center mt-10"
      />
      <Text className="text-sky-500 text-3xl font-semibold text-center self-center mt-10">
        0%
      </Text>
      <Text className=" text-base text-gray-600 text-center w-full mt-3 ">
        Verifying your face ...
      </Text>
      <TouchableOpacity
        className="w-[80%] bg-sky-500 rounded-3xl py-2 mt-auto mb-10 self-center"
        onPress={handleContinue}
      >
        <Text className="text-center text-white text-lg font-semibold">
          finish
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FacialRecognition;
