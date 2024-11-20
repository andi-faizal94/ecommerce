import { View, Text, Image } from "react-native";
import React from "react";
import AppButton from "./app-button";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const CompleteOrder = () => {
  const router = useRouter();
  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-52 mb-10">
        <Image
          source={require("../../assets/images/image-7.png")}
          style={{
            resizeMode: "contain",
            width: 164,
            height: 164,
          }}
        />
      </View>
      <View className="mb-5">
        <Text className="text-center text-2xl font-bold">
          Congratulations !!!
        </Text>
      </View>
      <View>
        <Text className="text-center">Your order have been taken and</Text>
      </View>
      <View>
        <Text className="text-center">is being attended to</Text>
      </View>
      <View className="mt-14 mx-32">
        <AppButton
          title="Checkout"
          size="sm"
          backgroundColor="#FF8D4D"
          // onPress={() => {
          //   setModalVisible(!modalVisible);
          // }}
        />
      </View>
      <View className="mt-14 mx-16">
        <Button
          text={"Continue shopping"}
          onPress={() => router.push("/(tabs)/complete-detail")}
        />
      </View>
    </View>
  );
};

export default CompleteOrder;
