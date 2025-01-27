import React, { useState, useRef, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import {
  Camera,
  CameraType,
  CameraView,
  VideoQuality,
  useCameraPermissions,
} from "expo-camera";

import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import Colors from "@/constants/Colors";

export default function UploadScreen() {
  const [type, setType] = useState(0);
  const [permission, requestPermission] = useCameraPermissions();
  const [isRecording, setIsRecording] = useState(false);
  const router = useRouter();
  const cameraRef = useRef<any>(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 justify-center items-center bg-black">
        <Text className="text-white text-center mb-4">
          We need your permission to show the camera
        </Text>
        <TouchableOpacity
          onPress={requestPermission}
          className="bg-blue-500 px-6 py-3 rounded-full"
        >
          <Text className="text-white font-medium">Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const toggleCameraType = () => {
    setType((current) => (current === 0 ? 1 : 0));
  };

  const handleRecording = async () => {
    if (!cameraRef.current) return;

    if (isRecording) {
      setIsRecording(false);
      await cameraRef.current.stopRecording();
    } else {
      setIsRecording(true);
      try {
        const video = await cameraRef.current.recordAsync();
        console.log("video recorded", video);
      } catch (error) {
        console.log(error);
        setIsRecording(false);
      }
    }
  };

  return (
    <View className="flex-1 bg-black">
      <CameraView
        ref={cameraRef}
        className="flex-1"
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        {/* Top Header */}
        <View className="flex-row justify-between items-center px-4 pt-2">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="close" size={28} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-medium">Record Video</Text>
          <View style={{ width: 28 }} /> {/* Spacer */}
        </View>

        {/* Bottom Section */}
        <View className="absolute bottom-20 left-0 right-0">
          {/* Record Button and Labels */}
          <View className="flex-row justify-center items-end mb-8">
            <View className="items-center mx-8">
              <Ionicons name="happy-outline" size={26} color="white" />
              <Text className="text-white text-xs mt-1">Effects</Text>
            </View>

            {/* Record Button */}
            <TouchableOpacity
              onPress={handleRecording}
              className={`w-20 h-20 rounded-full border-4 border-white justify-center items-center ${
                isRecording ? "bg-red-500" : "bg-transparent"
              }`}
            >
              <View
                className={`w-16 h-16 rounded-full ${
                  isRecording ? "bg-red-600" : "bg-red-500"
                }`}
              />
            </TouchableOpacity>

            <View className="items-center mx-8">
              <Ionicons name="image-outline" size={26} color="white" />
              <Text className="text-white text-xs mt-1">Upload</Text>
            </View>
          </View>
        </View>

        {/* Right Side Controls */}
        <View className="absolute right-4 top-1/4 items-center space-y-8">
          <TouchableOpacity>
            <View className="items-center">
              <Ionicons name="camera-reverse" size={26} color="white" />
              <Text className="text-white text-xs mt-1">Flip</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="items-center">
              <Ionicons name="speedometer" size={26} color="white" />
              <Text className="text-white text-xs mt-1">Speed</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="items-center">
              <Ionicons name="color-filter" size={26} color="white" />
              <Text className="text-white text-xs mt-1">Filters</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="items-center">
              <Ionicons name="timer" size={26} color="white" />
              <Text className="text-white text-xs mt-1">Timer</Text>
            </View>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}
