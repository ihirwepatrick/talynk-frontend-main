import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import "../globals.css";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
