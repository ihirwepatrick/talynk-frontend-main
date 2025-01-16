import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export const DropDown = ({options,placeholder}:{options:Array<string>,placeholder:string}) => {
  return (
    <SelectDropdown
      data={options}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      renderButton={(selectedItem, isOpened) => {
        return (
          <View style={styles.dropdownButtonStyle} className="bg-black">
            {!selectedItem ? (
              <Text style={[styles.dropdownButtonText, { color: "#666" }]}>
                {placeholder}
              </Text>
            ) : (
              <Text style={styles.dropdownButtonText}>{selectedItem}</Text>
            )}
            <Icon
              name={isOpened ? "chevron-up" : "chevron-down"}
              style={styles.dropdownButtonArrowStyle}
            />
          </View>
        );
      }}
      renderItem={(item, isSelected) => {
        return (
          <View
            style={{
              ...styles.dropdownItemStyle,
              ...(isSelected && { backgroundColor: "#555" }),
            }}
            className="bg-black"
          >
            <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
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
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical:8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  dropdownButtonText: {
    color: "#fff",
  },
  dropdownButtonArrowStyle: {
    fontSize: 20,
    color: "#fff",
  },
  dropdownButtonIconStyle: {
    fontSize: 20,
    marginRight: 4,
    color: "#fff",
  },
  dropdownMenuStyle: {
    backgroundColor: "#000",
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
    color: "#fff",
  },
  dropdownItemIconStyle: {
    fontSize: 20,
    marginRight: 8,
    color: "#fff",
  },

});