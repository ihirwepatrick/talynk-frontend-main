import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Back from "@/components/Back";
import ForgotPasswordIllustration from "@/components/ForgotPasswordIllustration";
import Fontisto from "@expo/vector-icons/Fontisto";

import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";

const ForgotPasswordIndex = () => {
  const [contactTypeState, setContactTypeState] = useState<"email" | "phone">(
    "email"
  );
  const router = useRouter();

  function handleContinue() {
    router.navigate("/auth/forgotPassword/OtpVerification");
  }

  return (
    <View className="bg-black flex-1 ">
      <Back />
      <ForgotPasswordIllustration />
      <ContactDetails type={contactTypeState} />
      <TouchableOpacity
        className="w-full bg-sky-600 rounded-2xl py-2 mt-3 mb-5 self-center max-w-[84%]"
        onPress={handleContinue}
      >
        <Text className="text-center text-white text-lg font-semibold">
          continue
        </Text>
      </TouchableOpacity>
      <View className="mb-5">
        {contactTypeState === "email" ? (
          <>
            <Text
              className="text-white text-sm font-semibold text-center"
              onPress={() => setContactTypeState("phone")}
            >
              use <Text className="text-sm text-blue-600"> Phone number </Text>
              instead
            </Text>
          </>
        ) : (
          <>
            <Text
              className="text-white text-sm font-semibold text-center"
              onPress={() => setContactTypeState("email")}
            >
              use <Text className="text-sm text-blue-600"> email number </Text>
              instead
            </Text>
          </>
        )}
      </View>
    </View>
  );
};

const ContactDetails = ({ type }: { type: "email" | "phone" }) => {
  return (
    <View className="mt-auto mb-10 px-8">
      {type === "email" ? (
        <>
          <View>
            <Text className="text-white text-light  text-sm">
              Please enter your email address and we will send you an otp code
              in the next step to reset yout password
            </Text>
            <View className="flex-row items-center bg-zinc-900 rounded-xl mt-6 px-4 py-2 ">
              <Fontisto name="email" size={24} color="#fff" />
              <Text className="text-white text-sm font-semibold ml-4">
                Email
              </Text>
            </View>
          </View>
        </>
      ) : (
        <>
          <View>
            <Text className="text-white text-light text-sm ">
              Please enter your email address and we will send you an otp code
              in the next step to reset your password
            </Text>
            <View className="flex-row items-center bg-zinc-900 rounded-xl mt-6 px-4 py-2 ">
              <Entypo name="phone" size={24} color="#fff" />
              <Text className="text-white text-base font-semibold ml-4">
                phone
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default ForgotPasswordIndex;
