import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#000",
          borderColor: "#000",
          height: 60,
          padding: 0,
          margin: 0,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="home" // Add icon name prop
              size={19} // Add size prop
              color={color}
              focused={focused}
              label="home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="forYou"
        options={{
          tabBarLabel: "for you",
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="people-sharp" // Add icon name prop
              size={19} // Add size prop
              color={color}
              focused={focused}
              label="explore"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="upload"
        options={{
          tabBarLabel: "upload",
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <View className="mt-5 items-center">
              <View
                className={`bg-white  rounded-full h-10 w-10 mb-0 flex items-center justify-center`}
              > 
              <Entypo name="plus" size={22} color="#2563eb" />
              </View>
              <Text className="text-[8px] text-white whitespace-nowrap w-14 text-center mt-1">
                Upload video
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "search",
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="search" // Add icon name prop
              size={19} // Add size prop
              color={color}
              focused={focused}
              label="search"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "profile",
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="person" // Add icon name prop
              size={19} // Add size prop
              color={color}
              focused={focused}
              label="My account"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

interface TabIconProps {
  name: keyof typeof Ionicons.glyphMap;
  size: number;
  color: string;
  focused: boolean;
  label: string;
}

export function TabIcon({ name, size, color, focused, label }: TabIconProps) {
  return (
    <View className="mt-5 items-center">
      <View
        className={`${
          focused ? "bg-zinc-800" : " bg-black"
        }  rounded-full h-10 w-10 mb-0 flex items-center justify-center`}
      >
        <Ionicons
          name={name}
          size={size}
          color={color}
          style={{ opacity: focused ? 1 : 0.5 }}
          className="ml-0.5"
        />
      </View>
      <Text className="text-[8px] text-white whitespace-nowrap w-12 text-center mt-0.5">
        {label}
      </Text>
    </View>
  );
}
