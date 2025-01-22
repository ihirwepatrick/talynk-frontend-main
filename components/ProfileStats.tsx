import React from "react";
import { View, Text } from "react-native";
import Colors from "@/constants/Colors";

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
          style={{ color: Colors.text.primary }}
          className="text-xl font-bold"
        >
          {posts}
        </Text>
        <Text style={{ color: Colors.text.secondary }} className="text-sm">
          Posts
        </Text>
      </View>

      <View className="items-center">
        <Text
          style={{ color: Colors.text.primary }}
          className="text-xl font-bold"
        >
          {subscribers}
        </Text>
        <Text style={{ color: Colors.text.secondary }} className="text-sm">
          Subscribers
        </Text>
      </View>

      <View className="items-center">
        <Text
          style={{ color: Colors.text.primary }}
          className="text-xl font-bold"
        >
          {formatNumber(views)}
        </Text>
        <Text style={{ color: Colors.text.secondary }} className="text-sm">
          Views
        </Text>
      </View>
    </View>
  );
};

export default ProfileStats;
