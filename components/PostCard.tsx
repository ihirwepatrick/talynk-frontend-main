import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Typography from "@/constants/Typography";

type PostCardProps = {
  username: string;
  timestamp: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  userAvatar: string;
  onOptionsPress?: () => void;
  onLikePress?: () => void;
  onCommentPress?: () => void;
  onBookmarkPress?: () => void;
};

const PostCard = ({
  username,
  timestamp,
  imageUrl,
  caption,
  likes,
  comments,
  userAvatar,
  onOptionsPress,
  onLikePress,
  onCommentPress,
  onBookmarkPress,
}: PostCardProps) => {
  const { width } = Dimensions.get("window");

  return (
    <View className="mb-4">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-2">
        <View className="flex-row items-center">
          <Image
            source={{ uri: userAvatar }}
            className="w-8 h-8 rounded-full"
          />
          <Text
            style={{
              color: Colors.text.primary,
              fontFamily: Typography.fonts.medium,
            }}
            className="ml-3"
          >
            {username}
          </Text>
          <Text
            style={{
              color: Colors.text.secondary,
              fontFamily: Typography.fonts.regular,
              fontSize: Typography.sizes.sm,
            }}
            className="ml-2"
          >
            • {timestamp}
          </Text>
        </View>
        <TouchableOpacity onPress={onOptionsPress}>
          <Ionicons
            name="ellipsis-horizontal"
            size={20}
            color={Colors.text.primary}
          />
        </TouchableOpacity>
      </View>

      {/* Image */}
      <Image
        source={{ uri: imageUrl }}
        style={{ width, height: width }}
        className="bg-zinc-900"
      />

      {/* Actions */}
      <View className="flex-row items-center justify-between px-4 pt-3">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={onLikePress} className="mr-4">
            <Ionicons
              name="heart-outline"
              size={24}
              color={Colors.text.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onCommentPress} className="mr-4">
            <Ionicons
              name="chatbubble-outline"
              size={22}
              color={Colors.text.primary}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onBookmarkPress}>
          <Ionicons
            name="bookmark-outline"
            size={22}
            color={Colors.text.primary}
          />
        </TouchableOpacity>
      </View>

      {/* Likes & Comments Count */}
      <View className="px-4 pt-2">
        <Text
          style={{
            color: Colors.text.primary,
            fontFamily: Typography.fonts.medium,
          }}
        >
          {likes.toLocaleString()} likes
        </Text>
      </View>

      {/* Caption */}
      <View className="px-4 pt-1">
        <Text style={{ color: Colors.text.primary }}>
          <Text
            style={{
              fontFamily: Typography.fonts.medium,
            }}
          >
            {username}{" "}
          </Text>
          <Text
            style={{
              fontFamily: Typography.fonts.regular,
            }}
          >
            {caption}
          </Text>
        </Text>
      </View>

      {/* Comments Link */}
      <TouchableOpacity className="px-4 pt-1" onPress={onCommentPress}>
        <Text
          style={{
            color: Colors.text.secondary,
            fontFamily: Typography.fonts.regular,
          }}
        >
          View all {comments} comments
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostCard;
