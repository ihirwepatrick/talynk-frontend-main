import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

type ProfileAvatarProps = {
  imageUrl: string;
  onEditPress: () => void;
};

const ProfileAvatar = ({ imageUrl, onEditPress }: ProfileAvatarProps) => {
  return (
    <View className="relative mx-4">
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
  );
};

export default ProfileAvatar;
