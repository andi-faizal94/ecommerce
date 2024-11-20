import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "expo-router";

const SplaceScreen = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push("/(tabs)/welcome");
  };

  return (
    <SafeAreaView className="flex justify-center items-center min-h-full">
      <TouchableOpacity onPress={handlePress}>
        <View>
          <Image
            source={require("../../assets/images/fruit.png")}
            style={{
              resizeMode: "contain",
            }}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SplaceScreen;
