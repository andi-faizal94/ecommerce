import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import AppButton from "./appButton";
import { useRouter } from "expo-router";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";

const Authentication = () => {
  const router = useRouter();

  // const handlePress = () => {
  //   router.push("/(tabs)/splaceScreen");
  // };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="min-h-full">
        <View className="h-2/3 w-full bg-[#FFA451] flex justify-center items-center  relative">
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
              source={require("../../assets/images/f-basket.png")}
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
        <View className="mx-5">
          <Text className="text-[#27214D] mx-5 mt-10 mb-5">
            What is yourname?
          </Text>

          <View className="mx-5">
            <TextInput
              style={{
                height: 50,
                borderColor: "gray",
                borderWidth: 1,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                padding: 10,
              }}
              // style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Tony"
            />
          </View>

          <View className="mx-5 mt-5">
            <AppButton
              title="Lets Continue"
              size="sm"
              backgroundColor="#FF8D4D"
              // onPress={handlePress}
            />
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default Authentication;
