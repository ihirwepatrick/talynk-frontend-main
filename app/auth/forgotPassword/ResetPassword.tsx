import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Back from "@/components/Back";
import { ResetPasswordIllustration } from "@/components/ForgotPasswordIllustration";
import PasswordInput from "@/components/PasswordInput";
import { useRouter } from "expo-router";
import SuccessModal from "@/components/modals/SuccesModal";

const ResetPassword = () => {
  const [newPasswordState, setNewPasswordState] = useState<string>("");
  const [newPasswordConfirmState, setNewPasswordConfirmState] =
    useState<string>("");
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  useState<string>("");

  function handleContinue() {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(()=>{},2000)
      router.navigate("/(tabs)")
    }, 3000);
  }

  return (
    <View className="bg-black flex-1">
      <Back />
      <ResetPasswordIllustration />
      <View className="mt-auto mb-5">
        <Text className="text-sm text-white  max-w-[80%] mx-auto text-start border border-black ">
          New password
        </Text>
        <PasswordInput
          onChangeText={(val) => {
            setNewPasswordState(val);
          }}
          value={newPasswordState}
          isDarkMode={true}
        />
      </View>
      <View className="mt-2 mb-5">
        <Text className="text-sm text-white  max-w-[80%] mx-auto text-start border border-black ">
          COnfirm New password
        </Text>
        <PasswordInput
          onChangeText={(val) => {
            setNewPasswordConfirmState(val);
          }}
          value={newPasswordConfirmState}
          isDarkMode={true}
        />
      </View>

      <TouchableOpacity
        className="w-full bg-sky-600 rounded-3xl py-1 mt-5 mb-10 self-center max-w-[80%] "
        onPress={handleContinue}
      >
        <Text className="text-center text-white text-lg font-semibold">
          Confirm
        </Text>
      </TouchableOpacity>
      <SuccessModal see={isVisible} />
    </View>
  );
};

export default ResetPassword;
