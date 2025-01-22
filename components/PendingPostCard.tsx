import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Typography from "@/constants/Typography";

type PendingPostCardProps = {
  imageUrl: string;
  caption: string;
  timestamp: string;
  duration?: string;
  onEdit: () => void;
  onCancel: () => void;
};

const PendingPostCard = ({
  imageUrl,
  caption,
  timestamp,
  duration,
  onEdit,
  onCancel,
}: PendingPostCardProps) => {
  return (
    <View className="mb-4 bg-zinc-900 rounded-xl overflow-hidden">
      <View className="flex-row p-4">
        <Image source={{ uri: imageUrl }} className="w-24 h-24 rounded-lg" />
        <View className="flex-1 ml-4">
          <Text
            style={{
              color: Colors.text.primary,
              fontFamily: Typography.fonts.regular,
            }}
            className="mb-1"
            numberOfLines={2}
          >
            {caption}
          </Text>
          <Text
            style={{
              color: Colors.text.secondary,
              fontFamily: Typography.fonts.regular,
              fontSize: Typography.sizes.sm,
            }}
          >
            {timestamp}
          </Text>
          {duration && (
            <View className="flex-row items-center mt-1">
              <Text
                style={{
                  color: Colors.text.primary,
                  fontFamily: Typography.fonts.regular,
                  fontSize: Typography.sizes.sm,
                }}
              >
                Video: {duration}
              </Text>
            </View>
          )}
          <View className="flex-row mt-3">
            <TouchableOpacity
              onPress={onEdit}
              style={{ backgroundColor: Colors.primary.main }}
              className="flex-1 py-2 rounded-lg mr-2"
            >
              <Text
                style={{
                  color: Colors.text.primary,
                  fontFamily: Typography.fonts.medium,
                  fontSize: Typography.sizes.sm,
                }}
                className="text-center"
              >
                Edit Post
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onCancel}
              style={{ backgroundColor: Colors.background.tertiary }}
              className="flex-1 py-2 rounded-lg ml-2"
            >
              <Text
                style={{
                  color: Colors.text.primary,
                  fontFamily: Typography.fonts.medium,
                  fontSize: Typography.sizes.sm,
                }}
                className="text-center"
              >
                Cancel Post
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PendingPostCard;
