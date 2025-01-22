import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";

type ProfileHeaderProps = {
  name: string;
};

const ProfileHeader = ({ name }: ProfileHeaderProps) => {
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between px-4 py-2">
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={Colors.text.primary} />
      </TouchableOpacity>

      <Text
        style={{ color: Colors.text.primary }}
        className="text-lg font-semibold"
      >
        {name}
      </Text>

      <TouchableOpacity>
        <Ionicons
          name="ellipsis-vertical"
          size={24}
          color={Colors.text.primary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;
