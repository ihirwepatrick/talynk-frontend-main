import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Colors from "@/constants/Colors";
import Typography from "@/constants/Typography";
import PostGrid, { Post } from "./PostGrid";
import PendingPostCard from "./PendingPostCard";

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

const pendingPosts = [
  {
    id: "7",
    imageUrl: "https://picsum.photos/200/200?random=7",
    type: "video",
    caption: "The caption on the post....",
    timestamp: "2 Days ago",
    duration: "2:32",
  },
  {
    id: "8",
    imageUrl: "https://picsum.photos/200/200?random=8",
    caption: "Another pending post",
    timestamp: "1 Day ago",
  },
  {
    id: "9",
    imageUrl: "https://picsum.photos/200/200?random=9",
    caption: "Yet another post",
    timestamp: "5 Hours ago",
  },
];

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState<Tab>("approved");
  const [isLoading, setIsLoading] = useState(false);

  const handlePostPress = (postId: string) => {
    console.log(`Post ${postId} pressed`);
  };

  const handleEditPost = (postId: string) => {
    console.log("Edit post:", postId);
  };

  const handleCancelPost = (postId: string) => {
    console.log("Cancel post:", postId);
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

      {activeTab === "approved" ? (
        <View className="mt-4">
          <PostGrid
            posts={approvedPosts}
            onPostPress={handlePostPress}
            isLoading={isLoading}
          />
        </View>
      ) : (
        <View className="mt-4 px-4">
          {pendingPosts.map((post) => (
            <PendingPostCard
              key={post.id}
              imageUrl={post.imageUrl}
              caption={post.caption}
              timestamp={post.timestamp}
              duration={post.type === "video" ? post.duration : undefined}
              onEdit={() => handleEditPost(post.id)}
              onCancel={() => handleCancelPost(post.id)}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default ProfileTabs;
