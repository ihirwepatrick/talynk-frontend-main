import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { CameraType } from "expo-camera";
import * as FaceDetector from "expo-face-detector";
import type { DetectionResult } from "expo-face-detector";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const FacialRecognition = () => {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [progress, setProgress] = useState(0);
  const [faceDetected, setFaceDetected] = useState(false);
  const [facing, setFacing] = useState<CameraType>("back");

  if (!permission) {
    return (
      <View>
        <Text>Requesting camera permission...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>No access to camera</Text>
        <TouchableOpacity onPress={requestPermission}>
          <Text>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleFacesDetected = ({ faces }: DetectionResult) => {
    if (faces.length > 0) {
      setFaceDetected(true);
      setProgress((prev) => Math.min(prev + 2, 100));
    } else {
      setFaceDetected(false);
    }
  };

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: "transparent",
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: "flex-end",
      alignItems: "center",
    },
    text: {
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
    },
  });

  return (
    <View className="flex-1 bg-white">
      <TouchableOpacity
        className="bg-white p-2 z-30"
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text className="text-center w-full text-2xl font-semibold text-sky-500 mt-3">
        Face recognition
      </Text>

      <Text className="text-black text-base text-center w-full mt-3 max-w-[80%] mx-auto">
        Please put your phone in front of your face
      </Text>

      <View className="h-[300px] w-full mt-5">
        <View style={styles.container}>
          <CameraView style={styles.camera} facing={facing}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={toggleCameraFacing}
              >
                <Text style={styles.text}>Flip Camera</Text>
              </TouchableOpacity>
            </View>
          </CameraView>
        </View>
      </View>

      <Text className="text-sky-500 text-3xl font-semibold text-center self-center mt-10">
        {progress}%
      </Text>
      <Text className="text-base text-gray-600 text-center w-full mt-3">
        {faceDetected
          ? "Face detected - Please stay still..."
          : "No face detected"}
      </Text>

      <TouchableOpacity
        className="w-[80%] bg-sky-500 rounded-3xl py-2 mt-auto mb-10 self-center"
        onPress={() => router.navigate("/auth/signUp/Intrests")}
        disabled={progress < 100}
      >
        <Text className="text-center text-white text-lg font-semibold">
          {progress < 100 ? "Processing..." : "Finish"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FacialRecognition;
