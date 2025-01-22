import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Typography from "@/constants/Typography";

type ProfileActionsProps = {
  onEditProfile: () => void;
  onShareProfile: () => void;
};

const ProfileActions = ({
  onEditProfile,
  onShareProfile,
}: ProfileActionsProps) => {
  return (
    <View className="flex-row justify-between px-4 mt-4">
      <TouchableOpacity
        onPress={onEditProfile}
        style={{ backgroundColor: Colors.button.primary }}
        className="flex-1 flex-row items-center justify-center py-2.5 rounded-xl mr-2"
      >
        <Ionicons name="pencil-outline" size={18} color={Colors.text.primary} />
        <Text
          style={{
            color: Colors.text.primary,
            fontFamily: Typography.fonts.medium,
            fontSize: Typography.sizes.base,
          }}
          className="ml-2"
        >
          Edit Profile
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onShareProfile}
        style={{ backgroundColor: Colors.button.primary }}
        className="flex-1 flex-row items-center justify-center py-2.5 rounded-xl ml-2"
      >
        <Ionicons
          name="share-social-outline"
          size={18}
          color={Colors.text.primary}
        />
        <Text
          style={{
            color: Colors.text.primary,
            fontFamily: Typography.fonts.medium,
            fontSize: Typography.sizes.base,
          }}
          className="ml-2"
        >
          Share Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileActions;
