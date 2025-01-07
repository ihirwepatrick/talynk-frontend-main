import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";

const SuccessModal = ({see}:{see:boolean}) => {

  return (
    <Modal
      isVisible={see}
      className="bg-black h-[400px] justify-start pt-12   border rounded-lg border-gray-400  "
      style={styles.modal}
    >
      <View className="items-center gap-2 pt-12 w-[280px] self-center">
        <Image source={require("@/assets/images/success.png")}   className="h-[100px] w-[100px]" />
        <Text className="text-2xl text-blue-500 text-center font-semibold mt-2 ">
          Successful
        </Text>
        <Text className="text-xs text-blue-500 text-center font-semibold mt-1 mb-3">
          please wait ...
        </Text>
        <Text className="text-white text-light  text-xs max-w-[150px] self-center text-center mb-8">
          You will be directed to the homepage in a few seconds
        </Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    maxWidth:280,
    maxHeight:300,
    marginVertical: "auto",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SuccessModal;
