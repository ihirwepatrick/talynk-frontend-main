import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Colors from "@/constants/Colors";
import Typography from "@/constants/Typography";
import PostGrid, { Post } from "./PostGrid";

type Tab = "approved" | "pending";

// Updated sample data with video type
const approvedPosts: Post[] = [
  {
    id: "1",
    imageUrl: "https://picsum.photos/200/200?random=1",
    type: "video",
  },
  { id: "2", imageUrl: "https://picsum.photos/200/200?random=2" },
  {
    id: "3",
    imageUrl: "https://picsum.photos/200/200?random=3",
    type: "video",
  },
  { id: "4", imageUrl: "https://picsum.photos/200/200?random=4" },
  { id: "5", imageUrl: "https://picsum.photos/200/200?random=5" },
  {
    id: "6",
    imageUrl: "https://picsum.photos/200/200?random=6",
    type: "video",
  },
  { id: "7", imageUrl: "https://picsum.photos/200/200?random=7" },
  { id: "8", imageUrl: "https://picsum.photos/200/200?random=8" },
];

const pendingPosts: Post[] = [
  {
    id: "7",
    imageUrl: "https://picsum.photos/200/200?random=7",
    type: "video",
  },
  { id: "8", imageUrl: "https://picsum.photos/200/200?random=8" },
  { id: "9", imageUrl: "https://picsum.photos/200/200?random=9" },
];

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState<Tab>("approved");
  const [isLoading, setIsLoading] = useState(false);

  const handlePostPress = (postId: string) => {
    console.log(`Post ${postId} pressed`);
  };

  return (
    <View className="mt-6">
      <View className="flex-row items-center px-4 border-b-2 border-zinc-800">
        <TouchableOpacity
          onPress={() => setActiveTab("approved")}
          className="flex-1 pb-3"
        >
          <Text
            style={{
              color:
                activeTab === "approved"
                  ? Colors.text.primary
                  : Colors.text.secondary,
              fontFamily: Typography.fonts.semiBold,
              fontSize: Typography.sizes.lg,
            }}
            className="text-center"
          >
            Approved Posts
          </Text>
        </TouchableOpacity>

        <View
          style={{ backgroundColor: Colors.border.light }}
          className="h-5 w-[2px]"
        />

        <TouchableOpacity
          onPress={() => setActiveTab("pending")}
          className="flex-1 pb-3"
        >
          <Text
            style={{
              color:
                activeTab === "pending"
                  ? Colors.text.primary
                  : Colors.text.secondary,
              fontFamily: Typography.fonts.semiBold,
              fontSize: Typography.sizes.lg,
            }}
            className="text-center"
          >
            Pending
          </Text>
        </TouchableOpacity>
      </View>

      <View className="mt-4">
        {activeTab === "approved" ? (
          <PostGrid
            posts={approvedPosts}
            onPostPress={handlePostPress}
            isLoading={isLoading}
          />
        ) : (
          <PostGrid
            posts={pendingPosts}
            onPostPress={handlePostPress}
            isLoading={isLoading}
          />
        )}
      </View>
    </View>
  );
};

export default ProfileTabs;
