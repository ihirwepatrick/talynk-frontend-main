import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type ProfileHeaderProps = {
  name: string;
};

const ProfileHeader = ({ name }: ProfileHeaderProps) => {
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between px-4 py-2">
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Text className="text-white text-lg font-semibold">{name}</Text>

      <TouchableOpacity>
        <Ionicons name="ellipsis-vertical" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;
