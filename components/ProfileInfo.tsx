import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ProfileInfoProps = {
  totalVisits: number;
  onBoostProfile: () => void;
};

const ProfileInfo = ({ totalVisits, onBoostProfile }: ProfileInfoProps) => {
  return (
    <View className="flex-row justify-between items-center px-4 py-3">
      <View className="flex-row items-center">
        <Text className="text-white text-lg font-semibold">{totalVisits}</Text>
        <Text className="text-gray-400 text-sm ml-2">Total Profile visits</Text>
      </View>

      <TouchableOpacity
        onPress={onBoostProfile}
        className="flex-row items-center bg-zinc-800 px-4 py-2 rounded-lg"
      >
        <Ionicons name="rocket-outline" size={18} color="white" />
        <Text className="text-white ml-2">Boost Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileInfo;
