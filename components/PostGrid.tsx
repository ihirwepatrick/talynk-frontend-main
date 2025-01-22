import React from "react";
import { View, Image, Dimensions, TouchableOpacity, ActivityIndicator, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Typography from "@/constants/Typography";

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

const PostGrid = ({ posts, onPostPress, isLoading }: PostGridProps) => {
  const screenWidth = Dimensions.get("window").width;
  const gap = 1;
  const padding = 16;
  const itemWidth = (screenWidth - padding * 2 - gap * 2) / 3;

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center py-8">
        <ActivityIndicator color={Colors.primary.main} />
      </View>
    );
  }

  if (posts.length === 0) {
    return (
      <View className="flex-1 justify-center items-center py-12">
        <Ionicons name="images-outline" size={48} color={Colors.text.secondary} />
        <Text
          style={{
            color: Colors.text.secondary,
            fontFamily: Typography.fonts.medium,
            fontSize: Typography.sizes.base,
          }}
          className="mt-2"
        >
          No posts yet
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-row flex-wrap px-4">
      {posts.map((post) => (
        <TouchableOpacity
          key={post.id}
          onPress={() => onPostPress(post.id)}
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
