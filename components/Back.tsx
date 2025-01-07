import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const Back = () => {
  const router = useRouter();
  function handleClick() {
    router.back();
  }
  return (
    <TouchableOpacity className="bg-black p-2 z-30" onPress={handleClick}>
      <Ionicons name="arrow-back" size={24} color="#2563eb" />
    </TouchableOpacity>
  );
};

export default Back;

export const BackWithLogo = () => {
  const router = useRouter();
  function handleClick() {
    router.back();
  }
  return (
    <View className=" flex-row items-center justify-between bg-black p-2 ">
      <TouchableOpacity className="bg-black border border-black " onPress={handleClick}>
        <Ionicons name="arrow-back" size={24} color="#2563eb" />
      </TouchableOpacity>
      <Image
        source={require("@/assets/images/logo.png")}
        className=" bg-black mr-[45%] "
      />
    </View>
  );
};
