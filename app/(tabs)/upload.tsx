import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

export default function UploadScreen() {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasAudioPermission, setHasAudioPermission] = useState(false);
  const [cameraType, setCameraType] = useState('back');
  const [isRecording, setIsRecording] = useState(false);
  const cameraRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
        const { status: audioStatus } = await Camera.requestMicrophonePermissionsAsync();
        await MediaLibrary.requestPermissionsAsync();

        setHasCameraPermission(cameraStatus === 'granted');
        setHasAudioPermission(audioStatus === 'granted');
      } catch (error) {
        console.log('Error requesting permissions:', error);
      }
    })();
  }, []);

  const toggleCameraType = () => {
    setCameraType(current => current === 'back' ? 'front' : 'back');
  };

  if (!hasCameraPermission || !hasAudioPermission) {
    return (
      <View className="flex-1 justify-center items-center bg-black">
        <Text className="text-white text-center mb-4">
          We need camera and microphone permissions
        </Text>
        <TouchableOpacity
          onPress={async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
            const { status: audioStatus } = await Camera.requestMicrophonePermissionsAsync();
            setHasCameraPermission(cameraStatus === 'granted');
            setHasAudioPermission(audioStatus === 'granted');
          }}
          className="bg-blue-500 px-6 py-3 rounded-full"
        >
          <Text className="text-white font-medium">Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleRecording = async () => {
    if (isRecording) {
      setIsRecording(false);
      cameraRef.current?.stopRecording();
    } else {
      setIsRecording(true);
      const video = await cameraRef.current?.recordAsync({
        maxDuration: 300, // 5 minutes
        quality: Camera.Constants.VideoQuality['720p'],
      });
      // Handle the recorded video
      console.log(video);
    }
  };

  return (
    <View className="flex-1 bg-black">
      <Camera 
        ref={cameraRef}
        type={cameraType}
        className="flex-1"
      >
        {/* Header */}
        <View className="flex-row justify-between items-center px-4 pt-14 pb-4">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="close" size={28} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-medium">Record Video</Text>
          <View style={{ width: 28 }} /> {/* Spacer for alignment */}
        </View>

        {/* Right Side Controls */}
        <View className="absolute right-4 top-1/3 items-center space-y-6">
          <TouchableOpacity onPress={toggleCameraType}>
            <View className="items-center">
              <Ionicons name="camera-reverse-outline" size={30} color="white" />
              <Text className="text-white text-xs mt-1">Flip</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="items-center">
              <Ionicons name="speedometer-outline" size={30} color="white" />
              <Text className="text-white text-xs mt-1">Speed</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="items-center">
              <Ionicons name="sparkles-outline" size={30} color="white" />
              <Text className="text-white text-xs mt-1">Beauty</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="items-center">
              <Ionicons name="color-filter-outline" size={30} color="white" />
              <Text className="text-white text-xs mt-1">Filters</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="items-center">
              <Ionicons name="timer-outline" size={30} color="white" />
              <Text className="text-white text-xs mt-1">Timer</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Bottom Controls */}
        <View className="absolute bottom-10 left-0 right-0">
          <Text className="text-white text-center mb-6">
            Video should be 5 minutes or less
          </Text>
          
          <View className="flex-row justify-center items-center space-x-8">
            <TouchableOpacity>
              <View className="items-center">
                <Ionicons name="happy-outline" size={30} color="white" />
                <Text className="text-white text-xs mt-1">Effects</Text>
              </View>
            </TouchableOpacity>

            {/* Record Button */}
            <TouchableOpacity 
              onPress={handleRecording}
              className={`w-20 h-20 rounded-full border-4 border-white justify-center items-center ${
                isRecording ? 'bg-red-500' : 'bg-transparent'
              }`}
            >
              <View className={`w-16 h-16 rounded-full ${
                isRecording ? 'bg-red-600' : 'bg-red-500'
              }`} />
            </TouchableOpacity>

            <TouchableOpacity>
              <View className="items-center">
                <Ionicons name="image-outline" size={30} color="white" />
                <Text className="text-white text-xs mt-1">Upload</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </View>
  );
}