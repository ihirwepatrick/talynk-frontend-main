import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

interface Suggestion {
  id: string;
  name: string;
  avatar: any;
}

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock recent searches
  const recentSearches = ["Dance", "Football", "Acting"];

  // Mock suggestions
  const suggestions: Suggestion[] = [
    {
      id: "1",
      name: "John Smith",
      avatar: require("../../assets/images/user.png"),
    },
    {
      id: "2",
      name: "John Smith",
      avatar: require("../../assets/images/user.png"),
    },
    {
      id: "3",
      name: "John Smith",
      avatar: require("../../assets/images/user.png"),
    },
    {
      id: "4",
      name: "John Smith",
      avatar: require("../../assets/images/user.png"),
    },
  ];

  return (
    <View className="flex-1 bg-black pt-12">
      {/* Search Input */}
      <View className="px-4 mb-6">
        <View className="flex-row items-center bg-zinc-900 rounded-full px-4 py-2">
          <Ionicons name="search" size={20} color="white" />
          <TextInput
            placeholder="Search"
            placeholderTextColor="gray"
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="flex-1 text-white text-base ml-2"
          />
        </View>
      </View>

      <ScrollView>
        {/* Recent Searches */}
        <View className="px-4 mb-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-white/60 font-medium uppercase text-sm">
              Recent Searches
            </Text>
            <TouchableOpacity>
              <Text className="text-blue-500 text-sm">View All</Text>
            </TouchableOpacity>
          </View>

          {recentSearches.map((search, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center justify-between py-3"
            >
              <View className="flex-row items-center">
                <Ionicons name="time-outline" size={20} color="white" />
                <Text className="text-white ml-3">{search}</Text>
              </View>
              <Ionicons name="close" size={20} color="gray" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Suggestions */}
        <View className="px-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-white/60 font-medium uppercase text-sm">
              Suggestions
            </Text>
            <TouchableOpacity>
              <Text className="text-blue-500 text-sm">View All</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row flex-wrap justify-between">
            {suggestions.map((suggestion) => (
              <TouchableOpacity
                key={suggestion.id}
                className="w-[48%] mb-4 bg-zinc-900 rounded-xl overflow-hidden"
              >
                <Image
                  source={suggestion.avatar}
                  className="w-full h-40"
                  resizeMode="cover"
                />
                <View className="p-2 flex-row items-center">
                  <Image
                    source={suggestion.avatar}
                    className="w-6 h-6 rounded-full"
                  />
                  <Text className="text-white ml-2 font-medium">
                    {suggestion.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
