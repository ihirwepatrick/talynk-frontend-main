import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileStats from "@/components/ProfileStats";
import ProfileInfo from "@/components/ProfileInfo";
import ProfileAvatar from "@/components/ProfileAvatar";
import ProfileActions from "@/components/ProfileActions";
import Colors from "@/constants/Colors";
import ProfileTabs from "@/components/ProfileTabs";

const Profile = () => {
  const handleBoostProfile = () => {
    // Handle boost profile action
    console.log("Boost profile clicked");
  };

  const handleEditAvatar = () => {
    console.log("Edit avatar clicked");
  };

  const handleEditProfile = () => {
    console.log("Edit profile clicked");
  };

  const handleShareProfile = () => {
    console.log("Share profile clicked");
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: Colors.background.primary }}
      className="flex-1"
    >
      <ProfileHeader name="Jane Smith" />
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <ProfileActions
            onEditProfile={handleEditProfile}
            onShareProfile={handleShareProfile}
          />
          <ProfileTabs />
        </View>
      </ScrollView>
      {/* We'll add other components here as we build them */}
    </SafeAreaView>
  );
};

export default Profile;
