import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { Post } from "./PostGrid";

type PostViewProps = {
  visible: boolean;
  posts: Post[];
  initialPostId: string;
  onClose: () => void;
};

const PostView = ({
  visible,
  posts,
  initialPostId,
  onClose,
}: PostViewProps) => {
  const { width } = Dimensions.get("window");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (visible) {
      setIsReady(true);
    } else {
      // Reset ready state after modal closes
      const timeout = setTimeout(() => {
        setIsReady(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsReady(false);
    onClose();
  }, [onClose]);

  const getItemLayout = useCallback(
    (_data: unknown, index: number) => ({
      length: width,
      offset: width * index,
      index,
    }),
    [width]
  );

  const initialScrollIndex = posts.findIndex(
    (post) => post.id === initialPostId
  );

  const renderPost = useCallback(
    ({ item: post }: { item: Post }) => (
      <View style={{ width }} className="bg-black">
        <SafeAreaView>
          <View className="px-4 py-2 flex-row items-center justify-between">
            <TouchableOpacity
              onPress={handleClose}
              className="flex-row items-center"
            >
              <Ionicons name="close" size={24} color={Colors.text.primary} />
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
          {post.caption && (
            <Text
              style={{
                color: Colors.text.primary,
                fontFamily: Typography.fonts.regular,
              }}
              className="mb-2"
            >
              {post.caption}
            </Text>
          )}

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
                  {post.likes || 0}
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
                  {post.comments || 0}
                </Text>
              </TouchableOpacity>
            </View>

            {post.timestamp && (
              <Text
                style={{
                  color: Colors.text.secondary,
                  fontFamily: Typography.fonts.regular,
                  fontSize: Typography.sizes.sm,
                }}
              >
                {post.timestamp}
              </Text>
            )}
          </View>
        </View>
      </View>
    ),
    [width]
  );

  if (!visible || !isReady) return null;

  return (
    <Modal
      visible={true}
      animationType="fade"
      statusBarTranslucent
      onRequestClose={handleClose}
      hardwareAccelerated
      presentationStyle="fullScreen"
    >
      <View className="flex-1 bg-black">
        <FlatList
          data={posts}
          renderItem={renderPost}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={initialScrollIndex}
          getItemLayout={getItemLayout}
          removeClippedSubviews={false}
          windowSize={3}
          maxToRenderPerBatch={3}
          initialNumToRender={1}
          keyExtractor={(item) => item.id}
          extraData={initialPostId}
        />
      </View>
    </Modal>
  );
};

export default PostView;
