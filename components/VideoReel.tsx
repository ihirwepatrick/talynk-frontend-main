import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageSourcePropType,
  TextInput,
} from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const { height: WINDOW_HEIGHT } = Dimensions.get("window");

interface VideoReelProps {
  data: {
    videoUrl: string;
    user: {
      name: string;
      avatar: ImageSourcePropType;
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
  const player = useVideoPlayer(data.videoUrl, (player) => {
    player.loop = true;
    if (isActive) {
      player.play();
    } else {
      player.pause();
    }
  });

  return (
    <View style={{ height: WINDOW_HEIGHT }} className="bg-black">
      <VideoView
        style={{ flex: 1 }}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />

      {/* Overlay Content */}
      <View className="absolute inset-0 bg-black/10">
        {/* Right Side Actions */}
        <View className="absolute right-4 bottom-32 items-center">
          <TouchableOpacity className="items-center mb-6">
            <Ionicons name="heart-outline" size={35} color="white" />
            <Text className="text-white text-sm font-medium">
              {formatNumber(data.likes)}K
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center mb-6">
            <Ionicons name="chatbubble-outline" size={32} color="white" />
            <Text className="text-white text-sm font-medium">
              {formatNumber(data.comments)}K
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center mb-6">
            <Ionicons name="paper-plane-outline" size={32} color="white" />
            <Text className="text-white text-sm font-medium">
              {formatNumber(data.shares)}K
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center">
            <Ionicons name="bookmark-outline" size={32} color="white" />
          </TouchableOpacity>
        </View>

        {/* Bottom Content */}
        <View className="absolute bottom-4 left-4 right-16">
          <View className="flex-row items-center">
            <Image
              source={data.user.avatar}
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <Text className="text-white font-semibold ml-3 text-lg">
              {data.user.name}
            </Text>
          </View>

          <Text className="text-white mt-3 text-base">{data.caption}</Text>

          <View className="flex-row flex-wrap mt-2">
            {data.hashtags.map((tag) => (
              <Text key={tag} className="text-white mr-2 font-medium">
                #{tag}
              </Text>
            ))}
          </View>

          {/* Comments Input */}
          <View className="mt-4 flex-row items-center bg-black/30 rounded-full border border-white/20 px-4 py-2">
            <TextInput
              placeholder="Type a comment..."
              placeholderTextColor="white"
              className="flex-1 text-white text-sm"
            />
            <TouchableOpacity>
              <Ionicons name="send" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="mt-2">
            <Text className="text-white/70 text-sm">
              {data.comments} Comments
            </Text>
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
