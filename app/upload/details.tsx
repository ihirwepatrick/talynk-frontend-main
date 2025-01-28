import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Switch,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Typography from "@/constants/Typography";

export default function PostDetailsScreen() {
  const router = useRouter();
  const [caption, setCaption] = useState("");
  const [disableComments, setDisableComments] = useState(false);
  const [hideLikeCount, setHideLikeCount] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    "BLACK", "WHITE", "GREY", "YELLOW",
    "BLUE", "PURPLE", "GREEN", "RED", "PINK",
    "ORANGE", "GOLD", "SILVER"
  ];

  return (
    <View className="flex-1 bg-black">
      <ScrollView>
        {/* Header */}
        <View className="flex-row justify-between items-center px-4 pt-14 pb-4">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="close" size={28} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-medium">New Post</Text>
          <TouchableOpacity>
            <Text className="text-blue-500 font-medium">Share</Text>
          </TouchableOpacity>
        </View>

        {/* Video Preview & Caption */}
        <View className="px-4">
          <View className="flex-row mb-4">
            <Image
              source={require("../../assets/images/thumbnail.jpg")}
              className="w-20 h-20 rounded-lg bg-zinc-900"
            />
            <TextInput
              placeholder="Write a caption..."
              placeholderTextColor="gray"
              multiline
              value={caption}
              onChangeText={setCaption}
              className="flex-1 text-white ml-3 text-base"
              maxLength={100}
            />
          </View>
          <Text className="text-gray-400 text-right">
            {caption.length}/100 words maximum
          </Text>
        </View>

        {/* Category Selection */}
        <View className="px-4 mt-6">
          <Text className="text-white/60 font-medium uppercase text-sm mb-3">
            Category
          </Text>
          <View className="flex-row flex-wrap">
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                onPress={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full mr-2 mb-2 ${
                  selectedCategory === category
                    ? "bg-blue-500"
                    : "bg-zinc-800"
                }`}
              >
                <Text className="text-white text-sm">{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Post Settings */}
        <View className="px-4 mt-6">
          <Text className="text-white/60 font-medium uppercase text-sm mb-3">
            Post Settings
          </Text>
          
          <View className="bg-zinc-900 rounded-xl">
            <View className="flex-row justify-between items-center p-4 border-b border-zinc-800">
              <View>
                <Text className="text-white text-base">Disable comments</Text>
                <Text className="text-gray-400 text-sm">
                  Turn off commenting on this post
                </Text>
              </View>
              <Switch
                value={disableComments}
                onValueChange={setDisableComments}
                trackColor={{ false: "#3f3f46", true: "#2563eb" }}
                thumbColor="white"
              />
            </View>

            <View className="flex-row justify-between items-center p-4">
              <View>
                <Text className="text-white text-base">Hide like count</Text>
                <Text className="text-gray-400 text-sm">
                  Hide the number of likes on this post
                </Text>
              </View>
              <Switch
                value={hideLikeCount}
                onValueChange={setHideLikeCount}
                trackColor={{ false: "#3f3f46", true: "#2563eb" }}
                thumbColor="white"
              />
            </View>
          </View>
        </View>

        {/* Terms Confirmation */}
        <View className="px-4 mt-6 mb-8">
          <TouchableOpacity className="flex-row items-center">
            <Ionicons name="checkbox-outline" size={24} color="white" />
            <Text className="text-white ml-2 flex-1">
              I confirm that my post complies with Talynk's terms and regulations
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View className="px-4 py-4 border-t border-zinc-900">
        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-zinc-800 py-3 rounded-xl mb-3"
        >
          <Text className="text-white text-center font-medium">Discard</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue-500 py-3 rounded-xl">
          <Text className="text-white text-center font-medium">Submit Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 