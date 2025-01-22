import React from "react";
import { View, Text } from "react-native";

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
    <View className="flex-row justify-between px-8 py-4 bg-zinc-900 rounded-xl mx-4">
      <View className="items-center">
        <Text className="text-white text-xl font-bold">{posts}</Text>
        <Text className="text-gray-400 text-sm">Posts</Text>
      </View>

      <View className="items-center">
        <Text className="text-white text-xl font-bold">{subscribers}</Text>
        <Text className="text-gray-400 text-sm">Subscribers</Text>
      </View>

      <View className="items-center">
        <Text className="text-white text-xl font-bold">
          {formatNumber(views)}
        </Text>
        <Text className="text-gray-400 text-sm">Views</Text>
      </View>
    </View>
  );
};

export default ProfileStats;
