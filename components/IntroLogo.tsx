import { View, Text, Image } from "react-native";
import React from "react";

const IntroLogo = () => {
  return (
    <View className="self-center mt-10 items-center ">
      <Image
        source={require("@/assets/images/Frame 408.png")}
        className="w-28 h-48"
      />
       <Text className="text-white text-lg text-center max-w-[60%]">
        Welcome back, you have been missed
       </Text>
    </View>
  );
};

export default IntroLogo;
