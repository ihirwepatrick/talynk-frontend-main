import React from "react";
import { View, SafeAreaView } from "react-native";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileStats from "@/components/ProfileStats";
import ProfileInfo from "@/components/ProfileInfo";

const Profile = () => {
  const handleBoostProfile = () => {
    // Handle boost profile action
    console.log("Boost profile clicked");
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ProfileHeader name="Jane Smith" />
      <View className="mt-4">
        <ProfileStats posts={20} subscribers={20} views={4400} />
        <ProfileInfo totalVisits={2345} onBoostProfile={handleBoostProfile} />
      </View>
      {/* We'll add other components here as we build them */}
    </SafeAreaView>
  );
};

export default Profile;
