import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Typography from "@/constants/Typography";

type ProfileInfoProps = {
  totalVisits: number;
  onBoostProfile: () => void;
};

const ProfileInfo = ({ totalVisits, onBoostProfile }: ProfileInfoProps) => {
  return (
    <View className="flex-row justify-between items-center px-4 py-3">
      <View className="flex-row items-center">
        <Text
          style={{
            color: Colors.text.primary,
            fontFamily: Typography.fonts.semiBold,
            fontSize: Typography.sizes.lg,
          }}
        >
          {totalVisits}
        </Text>
        <Text
          style={{
            color: Colors.text.secondary,
            fontFamily: Typography.fonts.regular,
            fontSize: Typography.sizes.sm,
          }}
          className="ml-2"
        >
          Total Profile visits
        </Text>
      </View>

      <TouchableOpacity
        onPress={onBoostProfile}
        style={{ backgroundColor: Colors.background.tertiary }}
        className="flex-row items-center px-4 py-2 rounded-lg"
      >
        <Ionicons name="rocket-outline" size={18} color={Colors.text.primary} />
        <Text
          style={{
            color: Colors.text.primary,
            fontFamily: Typography.fonts.medium,
            fontSize: Typography.sizes.base,
          }}
          className="ml-2"
        >
          Boost Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileInfo;
