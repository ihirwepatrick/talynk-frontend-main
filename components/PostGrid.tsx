import React from "react";
import { View, Image, Dimensions, TouchableOpacity } from "react-native";

type Post = {
  id: string;
  imageUrl: string;
};

type PostGridProps = {
  posts: Post[];
  onPostPress: (postId: string) => void;
};

const PostGrid = ({ posts, onPostPress }: PostGridProps) => {
  const screenWidth = Dimensions.get("window").width;
  const gap = 1;
  const padding = 16;
  const itemWidth = (screenWidth - padding * 2 - gap * 2) / 3;

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
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PostGrid;
