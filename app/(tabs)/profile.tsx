import React from "react";
import { View, SafeAreaView } from "react-native";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileStats from "@/components/ProfileStats";
import ProfileInfo from "@/components/ProfileInfo";
import ProfileAvatar from "@/components/ProfileAvatar";
import Colors from "@/constants/Colors";

const Profile = () => {
  const handleBoostProfile = () => {
    // Handle boost profile action
    console.log("Boost profile clicked");
  };

  const handleEditAvatar = () => {
    console.log("Edit avatar clicked");
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: Colors.background.primary }}
      className="flex-1"
    >
      <ProfileHeader name="Jane Smith" />
      <View className="mt-4">
        <View className="flex-row items-start">
          <ProfileAvatar
            imageUrl="https://picsum.photos/200"
            name="Jane Smith"
            onEditPress={handleEditAvatar}
          />
          <View className="flex-1">
            <ProfileStats posts={20} subscribers={20} views={4400} />
          </View>
        </View>
        <ProfileInfo totalVisits={2345} onBoostProfile={handleBoostProfile} />
      </View>
      {/* We'll add other components here as we build them */}
    </SafeAreaView>
  );
};

export default Profile;
