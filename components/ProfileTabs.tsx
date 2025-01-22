import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Colors from "@/constants/Colors";
import Typography from "@/constants/Typography";

type Tab = "approved" | "pending";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState<Tab>("approved");

  return (
    <View className="mt-6">
      <View className="flex-row items-center px-4 border-b-2 border-zinc-800">
        <TouchableOpacity
          onPress={() => setActiveTab("approved")}
          className="flex-1 pb-3"
        >
          <Text
            style={{
              color:
                activeTab === "approved"
                  ? Colors.text.primary
                  : Colors.text.secondary,
              fontFamily: Typography.fonts.semiBold,
              fontSize: Typography.sizes.lg,
            }}
            className="text-center"
          >
            Approved Posts
          </Text>
        </TouchableOpacity>

        <View
          style={{ backgroundColor: Colors.border.light }}
          className="h-5 w-[2px]"
        />

        <TouchableOpacity
          onPress={() => setActiveTab("pending")}
          className="flex-1 pb-3"
        >
          <Text
            style={{
              color:
                activeTab === "pending"
                  ? Colors.text.primary
                  : Colors.text.secondary,
              fontFamily: Typography.fonts.semiBold,
              fontSize: Typography.sizes.lg,
            }}
            className="text-center"
          >
            Pending
          </Text>
        </TouchableOpacity>
      </View>

      <View className="p-4">
        {activeTab === "approved" ? (
          <Text style={{ color: Colors.text.secondary }}>
            Approved content will appear here
          </Text>
        ) : (
          <Text style={{ color: Colors.text.secondary }}>
            Pending content will appear here
          </Text>
        )}
      </View>
    </View>
  );
};

export default ProfileTabs;
