import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Back from "@/components/Back";
import { MaterialIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

const Intrests = () => {
  const [allInterests] = useState([
    "Music",
    "Sports",
    "Gaming",
    "Reading",
    "Traveling",
  ]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };
  const router = useRouter();
  function handleContinue() {
    router.navigate("/auth/signUp/Success");
  }

  return (
    <View className="bg-black flex-1 p">
      <Back />
      <View className="flex-1 w-[80%] mx-auto">
        <Text className="text-xl text-white font-semibold">
          Select your interests
        </Text>
        <Text className="mt-4 text-white font-light">
          Choose your interests
        </Text>
        <View className="flex-row items-center bg-zinc-900 rounded-3xl mt-6 px-4 py-1 ">
          <MaterialIcons name="search" size={24} color="white" />
          <TextInput
            placeholder="Search interests"
            placeholderTextColor="gray"
            className="flex-1 ml-2 text-white"
          />
        </View>
        <ScrollView className="mt-10 flex-1">
          {allInterests.map((interest, index) => (
            <InterestItem
              key={index}
              text={interest}
              isSelected={selectedInterests.includes(interest)}
              onPress={() => toggleInterest(interest)}
            />
          ))}
        </ScrollView>
        <TouchableOpacity
          className="w-full bg-sky-600 rounded-lg py-2 mt-auto mb-10 self-center"
          onPress={handleContinue}
        >
          <Text className="text-center text-white text-lg font-semibold">
            continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

interface interestsItemPropsI {
  text: string;
  isSelected: boolean;
  onPress: () => void;
}

const InterestItem = ({ text, isSelected, onPress }: interestsItemPropsI) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center justify-between px-4 py-3 rounded-lg border border-zinc-700 my-1 ${
        isSelected ? "bg-zinc-100" : "bg-zinc-900"
      }`}
    >
      <Text className={`${isSelected ? "text-black" : "text-white"}`}>
        {text}
      </Text>
      {isSelected && <AntDesign name="check" size={24} color="#2563eb" />}
    </TouchableOpacity>
  );
};

export default Intrests;
