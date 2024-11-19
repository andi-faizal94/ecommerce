import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import AppButton from "./appButton";
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push("/(tabs)/authentication");
  };
  return (
    <View className="min-h-full">
      <View className="h-[60%]  w-full bg-[#FFA451] flex justify-center items-center  relative">
        <View className="absolute right-8 top-60">
          <Image
            source={require("../../assets/images/f-drop.png")}
            style={{
              resizeMode: "contain",
              width: 50,
              height: 37,
            }}
          />
        </View>
        <View className="mb-5r mt-44">
          <Image
            source={require("../../assets/images/fruits.png")}
            style={{
              resizeMode: "contain",
              width: 301,
              height: 261,
              // marginTop: 10,
            }}
          />
        </View>
        <View>
          <Image
            source={require("../../assets/images/ellipse.png")}
            style={{
              resizeMode: "contain",
              width: 301,
              height: 12,
              marginTop: 5,
            }}
          />
        </View>
      </View>
      <View>
        <Text className="text-[#27214D] mx-5 mt-10">
          Get The Freshest Fruit Salad Combo
        </Text>
        <Text className="text-[#5D577E] mx-5 mt-5 mb-10">
          We deliver the best and freshest fruit salad in town. Order for a
          combo today!!!
        </Text>
        <View className="mx-5">
          <AppButton
            title="Lets Continue"
            size="sm"
            backgroundColor="#FF8D4D"
            onPress={handlePress}
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
