import { View, Text, TouchableOpacity } from "react-native";
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
