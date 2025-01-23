import React, { useState, useCallback } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileStats from "@/components/ProfileStats";
import ProfileInfo from "@/components/ProfileInfo";
import ProfileAvatar from "@/components/ProfileAvatar";
import ProfileActions from "@/components/ProfileActions";
import Colors from "@/constants/Colors";
import ProfileTabs from "@/components/ProfileTabs";
import PostView from "@/components/PostView";
import { approvedPosts } from "@/components/ProfileTabs";

const Profile = () => {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const handlePostPress = useCallback((postId: string) => {
    setSelectedPostId(postId);
    setIsModalVisible(true);
  }, []);

  const handleClosePostView = useCallback(() => {
    setIsModalVisible(false);
    // Reset selectedPostId after modal is closed
    setTimeout(() => setSelectedPostId(null), 300);
  }, []);

  return (
    <SafeAreaView
      style={{ backgroundColor: Colors.background.primary }}
      className="flex-1"
    >
      <ProfileHeader name="Jane Smith" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View>
          <View className="flex-row items-start mt-4">
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
          <ProfileTabs onPostPress={handlePostPress} />
        </View>
      </ScrollView>
      <PostView
        visible={isModalVisible}
        posts={approvedPosts}
        initialPostId={selectedPostId || ""}
        onClose={handleClosePostView}
      />
      {/* We'll add other components here as we build them */}
    </SafeAreaView>
  );
};

export default Profile;
