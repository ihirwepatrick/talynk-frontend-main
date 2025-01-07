import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { BackWithLogo } from "@/components/Back";
import { useRouter } from "expo-router";

const Success = () => {
  const router = useRouter();
  function handleContinue() {
    router.navigate("/(tabs)");
  }
  return (
    <View className="bg-black flex-1 ">
      <BackWithLogo />
      <Image
        source={require("@/assets/images/success.png")}
        className="mt-20 mx-auto w-[190px] h-[195px]"
      />

      <Text className="text-center w-full text-2xl font-semibold text-sky-500 mt-3">
        You are all set
      </Text>
      <Text className="mt-4 text-white font-light max-w-[60%] text-center mx-auto">
        You're account is ready , let's better your experience
      </Text>
      <TouchableOpacity
        className="w-full bg-sky-600 rounded-lg py-2 mt-auto mb-10 self-center max-w-[80%]"
        onPress={handleContinue}
      >
        <Text className="text-center text-white text-lg font-semibold">
        Go to my account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Success;
