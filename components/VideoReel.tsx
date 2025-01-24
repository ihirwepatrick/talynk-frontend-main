import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const { height: WINDOW_HEIGHT } = Dimensions.get("window");

interface VideoReelProps {
  data: {
    videoUrl: string;
    user: {
      name: string;
      avatar: string;
    };
    caption: string;
    likes: number;
    comments: number;
    shares: number;
    hashtags: string[];
  };
  isActive: boolean;
}

export default function VideoReel({ data, isActive }: VideoReelProps) {
  const videoRef = React.useRef<Video>(null);

  React.useEffect(() => {
    if (isActive) {
      videoRef.current?.playAsync();
    } else {
      videoRef.current?.pauseAsync();
    }
  }, [isActive]);

  return (
    <View style={{ height: WINDOW_HEIGHT }} className="bg-black">
      <Video
        ref={videoRef}
        source={{ uri: data.videoUrl }}
        resizeMode="cover"
        isLooping
        style={{ flex: 1 }}
      />

      {/* Overlay Content */}
      <View className="absolute bottom-0 left-0 right-0 p-4">
        {/* User Info & Caption */}
        <View className="mb-4">
          <View className="flex-row items-center mb-2">
            <Image
              source={data.user.avatar}
              className="w-10 h-10 rounded-full"
            />
            <Text className="text-white font-medium ml-2">
              {data.user.name}
            </Text>
          </View>
          <Text className="text-white">{data.caption}</Text>
          <View className="flex-row flex-wrap mt-1">
            {data.hashtags.map((tag) => (
              <Text key={tag} className="text-white mr-2">
                #{tag}
              </Text>
            ))}
          </View>
        </View>

        {/* Right Side Actions */}
        <View className="absolute right-4 bottom-20">
          <TouchableOpacity className="items-center mb-4">
            <Ionicons name="heart-outline" size={32} color="white" />
            <Text className="text-white text-sm">
              {formatNumber(data.likes)}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center mb-4">
            <Ionicons name="chatbubble-outline" size={32} color="white" />
            <Text className="text-white text-sm">
              {formatNumber(data.comments)}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center mb-4">
            <Ionicons name="paper-plane-outline" size={32} color="white" />
            <Text className="text-white text-sm">
              {formatNumber(data.shares)}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center">
            <Ionicons name="bookmark-outline" size={32} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}
