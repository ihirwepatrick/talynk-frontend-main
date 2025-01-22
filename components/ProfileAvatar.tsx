import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

type ProfileAvatarProps = {
  imageUrl: string;
  name: string;
  onEditPress: () => void;
};

const ProfileAvatar = ({ imageUrl, name, onEditPress }: ProfileAvatarProps) => {
  return (
    <View className="mx-4">
      <View className="relative">
        <Image
          source={{ uri: imageUrl }}
          className="w-20 h-20 rounded-full"
          style={{ borderColor: Colors.border.light, borderWidth: 2 }}
        />
        <TouchableOpacity
          onPress={onEditPress}
          style={{ backgroundColor: Colors.background.tertiary }}
          className="absolute bottom-0 right-0 p-1 rounded-full"
        >
          <Ionicons name="pencil" size={14} color={Colors.text.primary} />
        </TouchableOpacity>
      </View>
      <Text
        style={{ color: Colors.text.primary }}
        className="text-center mt-2 font-semibold"
      >
        {name}
      </Text>
    </View>
  );
};

export default ProfileAvatar;
