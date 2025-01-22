import React from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { Post } from "@/components/PostGrid";

// Sample data - replace with real data later
const posts = [
  {
    id: "1",
    imageUrl: "https://picsum.photos/800/800?random=1",
    caption: "The caption on the post....",
    timestamp: "2 Days ago",
    type: "video",
    duration: "2:32",
    likes: 234,
    comments: 45,
  },
  // ... add more posts
];

const PostView = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { width } = Dimensions.get("window");

  const initialScrollIndex = posts.findIndex((post) => post.id === id);

  const renderPost = ({ item: post }: { item: Post }) => (
    <View style={{ width }} className="bg-black">
      <SafeAreaView>
        <View className="px-4 py-2 flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex-row items-center"
          >
            <Ionicons name="arrow-back" size={24} color={Colors.text.primary} />
            <Text
              style={{
                color: Colors.text.primary,
                fontFamily: Typography.fonts.semiBold,
                fontSize: Typography.sizes.lg,
              }}
              className="ml-2"
            >
              Posts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="ellipsis-vertical"
              size={24}
              color={Colors.text.primary}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <Image
        source={{ uri: post.imageUrl }}
        style={{ width, height: width }}
        className="bg-zinc-900"
      />

      <View className="p-4">
        <Text
          style={{
            color: Colors.text.primary,
            fontFamily: Typography.fonts.regular,
          }}
          className="mb-2"
        >
          {post.caption}
        </Text>

        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <TouchableOpacity className="flex-row items-center mr-4">
              <Ionicons
                name="heart-outline"
                size={24}
                color={Colors.text.primary}
              />
              <Text
                style={{
                  color: Colors.text.primary,
                  fontFamily: Typography.fonts.medium,
                }}
                className="ml-1"
              >
                {post.likes}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Ionicons
                name="chatbubble-outline"
                size={22}
                color={Colors.text.primary}
              />
              <Text
                style={{
                  color: Colors.text.primary,
                  fontFamily: Typography.fonts.medium,
                }}
                className="ml-1"
              >
                {post.comments}
              </Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              color: Colors.text.secondary,
              fontFamily: Typography.fonts.regular,
              fontSize: Typography.sizes.sm,
            }}
          >
            {post.timestamp}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-black">
      <FlatList
        data={posts as Post[]}
        renderItem={renderPost}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={initialScrollIndex}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />
    </View>
  );
};

export default PostView;
