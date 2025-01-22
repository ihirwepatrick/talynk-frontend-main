import React from "react";
import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { useRouter } from "expo-router";

export type Post = {
  id: string;
  imageUrl: string;
  type?: "video" | "image";
};

type PostGridProps = {
  posts: Post[];
  onPostPress: (postId: string) => void;
  isLoading?: boolean;
};

const EmptyState = () => (
  <View className="flex-1 justify-center items-center py-12">
    <Ionicons name="camera-outline" size={64} color={Colors.text.secondary} />
    <Text
      style={{
        color: Colors.text.primary,
        fontFamily: Typography.fonts.semiBold,
        fontSize: Typography.sizes.lg,
      }}
      className="mt-4"
    >
      No posts Yet
    </Text>
    <Text
      style={{
        color: Colors.text.secondary,
        fontFamily: Typography.fonts.regular,
        fontSize: Typography.sizes.sm,
        textAlign: "center",
      }}
      className="mt-2 max-w-[250px]"
    >
      Take the first step and show the world you can do!
    </Text>
  </View>
);

const PostGrid = ({ posts, onPostPress, isLoading }: PostGridProps) => {
  const router = useRouter();
  const screenWidth = Dimensions.get("window").width;
  const gap = 1;
  const padding = 16;
  const itemWidth = (screenWidth - padding * 2 - gap * 2) / 3;

  const handlePostPress = (postId: string) => {
    router.push({
      pathname: "/posts/[id]",
      params: { id: postId },
    });
    onPostPress(postId);
  };

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center py-8">
        <ActivityIndicator color={Colors.primary.main} />
      </View>
    );
  }

  if (posts.length === 0) {
    return <EmptyState />;
  }

  return (
    <View className="flex-row flex-wrap px-4">
      {posts.map((post) => (
        <TouchableOpacity
          key={post.id}
          onPress={() => handlePostPress(post.id)}
          style={{
            width: itemWidth,
            height: itemWidth,
            marginRight: gap,
            marginBottom: gap,
          }}
        >
          <Image
            source={{ uri: post.imageUrl }}
            className="w-full h-full rounded-md"
          />
          {post.type === "video" && (
            <View className="absolute top-2 right-2 bg-black/50 rounded-full p-1">
              <Ionicons name="play" size={12} color={Colors.text.primary} />
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PostGrid;
