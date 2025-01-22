import React from "react";
import { View, Text } from "react-native";
import Colors from "@/constants/Colors";
import Typography from "@/constants/Typography";

type ProfileStatsProps = {
  posts: number;
  subscribers: number;
  views: number;
};

const ProfileStats = ({ posts, subscribers, views }: ProfileStatsProps) => {
  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  };

  return (
    <View
      style={{ backgroundColor: Colors.background.secondary }}
      className="flex-row justify-between px-8 py-4 rounded-xl mx-4"
    >
      <View className="items-center">
        <Text
          style={{
            color: Colors.text.primary,
            fontFamily: Typography.fonts.bold,
            fontSize: Typography.sizes.xl,
          }}
        >
          {posts}
        </Text>
        <Text
          style={{
            color: Colors.text.secondary,
            fontFamily: Typography.fonts.regular,
            fontSize: Typography.sizes.sm,
          }}
        >
          Posts
        </Text>
      </View>

      <View className="items-center">
        <Text
          style={{
            color: Colors.text.primary,
            fontFamily: Typography.fonts.bold,
            fontSize: Typography.sizes.xl,
          }}
        >
          {subscribers}
        </Text>
        <Text
          style={{
            color: Colors.text.secondary,
            fontFamily: Typography.fonts.regular,
            fontSize: Typography.sizes.sm,
          }}
        >
          Subscribers
        </Text>
      </View>

      <View className="items-center">
        <Text
          style={{
            color: Colors.text.primary,
            fontFamily: Typography.fonts.bold,
            fontSize: Typography.sizes.xl,
          }}
        >
          {formatNumber(views)}
        </Text>
        <Text
          style={{
            color: Colors.text.secondary,
            fontFamily: Typography.fonts.regular,
            fontSize: Typography.sizes.sm,
          }}
        >
          Views
        </Text>
      </View>
    </View>
  );
};

export default ProfileStats;
