import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DropDown } from "@/components/SelectDropDown";
import Ionicons from "@expo/vector-icons/Ionicons";
import Post, { PostProps } from "@/components/Post";
import Colors from "@/constants/Colors";
import Typography from "@/constants/Typography";

const posts: Array<PostProps> = [
  {
    username: "John Doe",
    userAvatar: require("@/assets/images/Ellipse 4 (1).png"),
    postImage: require("@/assets/images/post.png"),
    caption: "This is a dummy post",
    likes: 10,
    timeAgo: "2 days ago",
    comments: ["sdsoids", "dsdjsdksklds"],
    shared: 5,
  },
  {
    username: "Jane Doe",
    userAvatar: require("@/assets/images/Ellipse 4 (1).png"),
    postImage: require("@/assets/images/post.png"),
    caption: "This is another dummy post",
    likes: 20,
    timeAgo: "5 days ago",
    comments: ["sdsoids", "dsdjsdksklds"],
    shared: 5,
  },
  {
    username: "Bob Smith",
    userAvatar: require("@/assets/images/Ellipse 4 (1).png"),
    postImage: require("@/assets/images/post.png"),
    caption: "This is a third dummy post",
    likes: 30,
    timeAgo: "1 week ago",
    comments: ["sdsoids", "dsdjsdksklds"],
    shared: 5,
  },
];
const TabsIndex = () => {
  return (
    <View className="flex-1 bg-black p-2">
      <HomeHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mt-1 flex-1 mb-20"
      >
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </ScrollView>
    </View>
  );
};

export default TabsIndex;

type TimeFilter = "Last month" | "Last week" | "Today" | "All time";
type PostFilter = "Videos" | "Photos" | "Popular" | "All Posts";

export const HomeHeader = () => {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("All time");
  const [postFilter, setPostFilter] = useState<PostFilter>("Videos");
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const timeOptions: TimeFilter[] = [
    "Last month",
    "Last week",
    "Today",
    "All time",
  ];
  const filterOptions: PostFilter[] = [
    "Videos",
    "Photos",
    "Popular",
    "All Posts",
  ];

  return (
    <View className="px-4 py-2">
      {/* Logo section */}
      <View className="flex-row items-center justify-between mb-4">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require("@/assets/images/logo_talynk.png")}
            className="h-7 w-7"
            resizeMode="contain"
          />
          <Text
            style={{ fontFamily: Typography.fonts.semiBold }}
            className="text-white text-xl"
          >
            Tal<Text style={{ color: Colors.primary.main }}>ynk</Text>
          </Text>
        </View>

        <View className="flex-row items-center space-x-3">
          <TouchableOpacity>
            <Image
              source={require("@/assets/images/Ellipse 4 (1).png")}
              className="h-8 w-8 rounded-full"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: Colors.background.secondary }}
            className="items-center justify-center h-8 w-8 rounded-full"
          >
            <Ionicons
              name="notifications-outline"
              size={20}
              color={Colors.text.primary}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Filter buttons */}
      <View className="flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() => setShowTimeDropdown(!showTimeDropdown)}
          style={{ backgroundColor: "#18181B" }}
          className="flex-[0.48] flex-row items-center justify-between py-3 px-4 rounded-xl border border-zinc-800"
        >
          <Ionicons name="menu" size={18} color={Colors.text.primary} />
          <Text
            style={{ fontFamily: Typography.fonts.medium }}
            className="text-white flex-1 ml-2"
          >
            {timeFilter}
          </Text>
          <Ionicons name="chevron-down" size={18} color={Colors.text.primary} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowFilterDropdown(!showFilterDropdown)}
          style={{ backgroundColor: "#18181B" }}
          className="flex-[0.48] flex-row items-center justify-between py-3 px-4 rounded-xl border border-zinc-800"
        >
          <Ionicons name="menu" size={18} color={Colors.text.primary} />
          <Text
            style={{ fontFamily: Typography.fonts.medium }}
            className="text-white flex-1 ml-2"
          >
            {postFilter}
          </Text>
          <Ionicons name="chevron-down" size={18} color={Colors.text.primary} />
        </TouchableOpacity>
      </View>

      {/* Dropdowns */}
      {showTimeDropdown && (
        <View
          style={{ backgroundColor: Colors.background.secondary }}
          className="absolute top-[90px] left-4 w-[48%] rounded-xl border border-zinc-800 overflow-hidden z-20"
        >
          {timeOptions.map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() => {
                setTimeFilter(option);
                setShowTimeDropdown(false);
              }}
              className="py-3 px-4"
              style={{
                backgroundColor:
                  timeFilter === option
                    ? Colors.background.tertiary
                    : "transparent",
              }}
            >
              <Text
                style={{ fontFamily: Typography.fonts.medium }}
                className="text-white"
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {showFilterDropdown && (
        <View
          style={{ backgroundColor: Colors.background.secondary }}
          className="absolute top-[90px] right-4 w-[48%] rounded-xl border border-zinc-800 overflow-hidden z-20"
        >
          {filterOptions.map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() => {
                setPostFilter(option);
                setShowFilterDropdown(false);
              }}
              className="py-3 px-4"
              style={{
                backgroundColor:
                  postFilter === option
                    ? Colors.background.tertiary
                    : "transparent",
              }}
            >
              <Text
                style={{ fontFamily: Typography.fonts.medium }}
                className="text-white"
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
