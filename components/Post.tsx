import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Share,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export interface PostProps {
  username: string;
  userAvatar: string;
  postImage: string;
  caption: string;
  likes: number;
  timeAgo: string;
  comments: Array<string>;
  shared: number;
}

const Post: React.FC<PostProps> = ({
  username,
  userAvatar,
  postImage,
  caption,
  likes,
  timeAgo,
  comments,
  shared,
}) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [likesCount, setLikesCount] = React.useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: caption,
        title: username + "'s post",
        // url: postImage // uncomment if you have a web URL
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      }
    } catch (error) {
      console.log("Error =>", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          {/* <Image source={{ uri: userAvatar }} style={styles.avatar} /> */}
          <Image
            source={require("@/assets/images/Ellipse 4 (1).png")}
            style={styles.avatar}
          />
          <Text style={styles.username}>{username}</Text>
          {/* Time */}
          <Text style={styles.timeAgo}>{timeAgo}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Post Image */}
      {/* <Image source={{ uri: postImage }} style={styles.postImage} /> */}
      <Image
        source={require("@/assets/images/post.png")}
        style={styles.postImage}
      />

      {/* Actions */}
      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <TouchableOpacity
            onPress={handleLike}
            className="flex-row items-center"
          >
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              size={28}
              color={isLiked ? "#FF3B30" : "white"}
            />
            {/* Likes */}
            <Text style={styles.likes}>{likesCount.toLocaleString()} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionIcon}
            className="flex-row items-center"
            onPress={handleShare}
          >
            <Ionicons name="paper-plane-outline" size={24} color="white" />
            {/* comments number */}
            <Text style={styles.likes}>{shared.toLocaleString()} </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Caption */}
      <View style={styles.captionContainer}>
        <Text style={styles.captionUsername}>{username}</Text>
        <Text style={styles.caption}>{caption}</Text>
      </View>

      <View>
        <View className="w-full flex-row justify-between items-center  gap-20 ">
          <Text className="text-white underline font-semibold pl-4">
            {comments.length.toLocaleString()} comments
          </Text>
          <View className="flex-1 flex-row items-center bg-[#252629] rounded-xl px-4">
            <TextInput
              className="flex-1 py-3 text-white"
              placeholder="Add a comment"
              placeholderTextColor="white"
            />
            <TouchableOpacity>
              <Ionicons name="send" size={12} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    marginBottom: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  username: {
    color: "white",
    fontWeight: "600",
  },
  postImage: {
    width: "100%",
    height: 250,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },
  leftActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionIcon: {
    marginLeft: 16,
  },
  likes: {
    color: "white",
    fontWeight: "600",
    paddingHorizontal: 4,
  },
  captionContainer: {
    flexDirection: "row",
    paddingHorizontal: 12,
    marginBottom: 4,
  },
  captionUsername: {
    color: "white",
    fontWeight: "600",
    marginRight: 6,
  },
  caption: {
    color: "white",
    flex: 1,
  },
  timeAgo: {
    color: "#666",
    fontSize: 12,
    paddingHorizontal: 12,
  },
});

export default Post;
