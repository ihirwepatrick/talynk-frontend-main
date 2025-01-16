import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const emojisWithIcons = [
  { title: "happy", icon: "emoticon-happy-outline" },
  { title: "cool", icon: "emoticon-cool-outline" },
  { title: "lol", icon: "emoticon-lol-outline" },
  {
    title: "frown",
    icon: "emoticon-frown-outline",
  },
];

interface phoneNumberInputProps {
  placeholder?: string;
}

const PhoneNumberInput = ({
  placeholder = "phone number",
}: phoneNumberInputProps) => {
  // const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneChange = (text: string) => {
    setPhoneNumber(text);
  };

  return (
    <View className="flex flex-row items-center w-[80vw] self-center mb-2" style={{height:35}}>
      <CountrySelectDropDown />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={handlePhoneChange}
        className=" p-0"
      />

    </View>
  );
};

export default PhoneNumberInput;

export const CountrySelectDropDown = () => {
  return (
    <SelectDropdown
      data={emojisWithIcons}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      renderButton={(selectedItem, isOpened) => {
        return (
          <View style={styles.dropdownButtonStyle}>
            {selectedItem && (
              <Icon
                name={selectedItem.icon}
                style={styles.dropdownButtonIconStyle}
              />
            )}
            <Icon
              name={isOpened ? "chevron-up" : "chevron-down"}
              style={styles.dropdownButtonArrowStyle}
            />
          </View>
        );
      }}
      renderItem={(item, index, isSelected) => {
        return (
          <View
            style={{
              ...styles.dropdownItemStyle,
              ...(isSelected && { backgroundColor: "#D2D9DF" }),
            }}
          >
            <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
            <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  );
};

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 80,
    // height: 35,
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical:8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  dropdownButtonArrowStyle: {
    fontSize: 20,
  },
  dropdownButtonIconStyle: {
    fontSize: 20,
    marginRight: 4,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    width: 125,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 4,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#151E28",
  },
  dropdownItemIconStyle: {
    fontSize: 20,
    marginRight: 8,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    height: 35,
    paddingHorizontal: 12,
    fontSize: 14,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
