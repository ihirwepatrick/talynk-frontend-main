import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import VideoReel from "@/components/VideoReel";
import Colors from "@/constants/Colors";

const { height: WINDOW_HEIGHT } = Dimensions.get("window");

interface ReelData {
  id: string;
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
}

export default function ForYouScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock data - replace with your API call
  const reels: ReelData[] = [
    {
      id: "1",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      user: {
        name: "John Smith",
        avatar: require("../../assets/images/user.png"),
      },
      caption: "Some Caption Text",
      likes: 115000,
      comments: 101,
      shares: 32000,
      hashtags: ["foryou", "guitar", "talent"],
    },
    {
      id: "1",
      videoUrl: require("../../assets/videos/car.mp4"),
      user: {
        name: "John Smith",
        avatar: require("../../assets/images/user.png"),
      },
      caption: "Some Caption Text",
      likes: 115000,
      comments: 101,
      shares: 32000,
      hashtags: ["foryou", "guitar", "talent"],
    },
    {
      id: "1",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      user: {
        name: "John Smith",
        avatar: require("../../assets/images/user.png"),
      },
      caption: "Some Caption Text",
      likes: 115000,
      comments: 101,
      shares: 32000,
      hashtags: ["foryou", "guitar", "talent"],
    },
    // Add more reels...
  ];

  return (
    <View className="flex-1 bg-black">
      <FlashList
        data={reels}
        renderItem={({ item, index }) => (
          <VideoReel data={item} isActive={currentIndex === index} />
        )}
        estimatedItemSize={WINDOW_HEIGHT}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={({ changed }) => {
          if (changed && changed[0].isViewable) {
            setCurrentIndex(changed[0].index ?? 0);
          }
        }}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
      />

      {/* Header */}
      <View className="absolute top-0 left-0 right-0 flex-row items-center justify-between px-4 pt-12 pb-4">
        <Text className="text-white text-lg font-medium">Following</Text>
        <View className="w-[2px] h-4 bg-gray-500 mx-3" />
        <Text className="text-white text-lg font-bold">For You</Text>
        <TouchableOpacity className="ml-auto bg-blue-500 px-4 py-2 rounded-full">
          <Text className="text-white font-medium">Sign Up To Upload</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
