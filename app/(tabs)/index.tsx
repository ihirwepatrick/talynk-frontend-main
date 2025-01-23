import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DropDown } from "@/components/SelectDropDown";
import Ionicons from "@expo/vector-icons/Ionicons";
import Post, { PostProps } from "@/components/Post";

const posts: Array<PostProps> = [
  {
    username: "John Doe",
    userAvatar: require("@/assets/images/Ellipse 4 (1).png"),
    postImage: require("@/assets/images/post.png"),
    caption: "This is a dummy post",
    likes: 10,
    timeAgo: "2 days ago",
    comments:["sdsoids",'dsdjsdksklds'],
    shared:5
  },
  {
    username: "Jane Doe",
    userAvatar: require("@/assets/images/Ellipse 4 (1).png"),
    postImage: require("@/assets/images/post.png"),
    caption: "This is another dummy post",
    likes: 20,
    timeAgo: "5 days ago",
    comments:["sdsoids",'dsdjsdksklds'],
    shared:5
  },
  {
    username: "Bob Smith",
    userAvatar: require("@/assets/images/Ellipse 4 (1).png"),
    postImage: require("@/assets/images/post.png"),
    caption: "This is a third dummy post",
    likes: 30,
    timeAgo: "1 week ago",
    comments:["sdsoids",'dsdjsdksklds'],
    shared:5
  },
];
const TabsIndex = () => {
  return (
    <View className="flex-1 bg-black p-2">
      <HomeHeader />
      <ScrollView showsVerticalScrollIndicator={false} className="mt-1 flex-1 mb-20">
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </ScrollView>
    </View>
  );
};

export default TabsIndex;

export const HomeHeader = () => {
  return (
    <View>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Image
            source={require("@/assets/images/logo_talynk.png")}
            className="h-8 w-8"
            resizeMode="contain"
          />
          <Image
            source={require("@/assets/images/talynk_text.png")}
            className="h-8 w-24 ml-1"
            resizeMode="contain"
          />
        </View>
        
        <View className="flex-row items-center gap-3">
          <TouchableOpacity>
            <Image
              source={require("@/assets/images/Ellipse 4 (1).png")}
              className="h-10 w-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center h-10 w-10 rounded-full bg-[#252629]">
            <FontAwesome name="bell" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      
      <View className="mt-4 flex-row items-center justify-between gap-8">
        <View className="px-2  border-white border rounded-xl flex-row items-center">
          <Ionicons name="filter" size={15} color="white" className="" />
          <DropDown
            options={["Option 1", "Option 2", "Option 3"]}
            placeholder="filter"
          />
        </View>
        <View className="bg-[#252629] rounded-xl flex-1 py-0.5 flex-row items-center justify-between pl-4 ">
          <Text className="text-white">All posts</Text>
          <View className="px-2  border-white border rounded-xl flex-row items-center bg-black">
            <Ionicons name="filter" size={15} color="white" className="" />
            <DropDown
              options={["Option 1", "Option 2", "Option 3"]}
              placeholder="filter"
            />
          </View>
        </View>
      </View>
    </View>
  );
};
