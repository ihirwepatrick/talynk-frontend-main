import AuthSplashScreenImage from "@/components/authSplashScreenImage";
import IntroLogo from "@/components/IntroLogo";
import PasswordInput from "@/components/PasswordInput";
import PhoneNumberInput from "@/components/PhoneNumberInput";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const images = [
  require("@/assets/images/facebook.png"),
  require("@/assets/images/apple.png"),
  require("@/assets/images/google.png"),
];

export default function Index() {
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <View className="flex-1 bg-black">
      <AuthSplashScreenImage />
      <IntroLogo />
      <View className="mt-10">
        <PhoneNumberInput />
        <PasswordInput
          value={password}
          onChangeText={(val) => setPassword(val)}
        />
      </View>
      <TouchableOpacity className="bg-blue-600 w-10/12 self-center mt-5 p-2 rounded-3xl items-center ">
        <Text className="text-white text-base ">
          Continue with registration
        </Text>
      </TouchableOpacity>
      <View>
        <Text className="text-blue-500 text-base mt-5 text-center">
          or continue with
        </Text>
      </View>
      <View className="flex flex-row justify-evenly mt-5 px-4">
        {images.map((img, index) => (
          <TouchableOpacity
            key={index}
            className="border border-blue-500  w-20 h-14 rounded-xl items-center justify-center"
          >
            <Image source={img} className="w-6 h-6" />
          </TouchableOpacity>
        ))}
      </View>

      <View className="flex-row  mt-5 items-center justify-center  gap-2">
        <Text className="text-white text-base  text-center">
          don't have an account?
        </Text>
        <TouchableOpacity onPress={() => router.navigate("/auth/signUp")}>
          <Text className="text-blue-500 te">sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
