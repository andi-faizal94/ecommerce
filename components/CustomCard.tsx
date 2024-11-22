import { Fontisto, Octicons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const CustomCard = () => {
  return (
    <View className="flex justify-center items-center w-40 h-[183px] bg-white rounded-xl ml-5 relative">
      <Image
        source={require("../assets/images/image-3.png")}
        style={{
          resizeMode: "contain",
          width: 80,
          height: 80,
        }}
      />
      <View className="absolute top-1 right-1">
        <Pressable className="p-2 rounded-2xl " onPress={() => console.log("")}>
          <Octicons name="heart" size={24} color="#FFA451" />
        </Pressable>
      </View>
      <View>
        <Text className="mt-2">Honey lime combo</Text>
      </View>
      <View className="flex flex-row justify-between w-[85%] pt-2 ">
        <Text>2000</Text>
        <Pressable className="p-2 rounded-2xl " onPress={() => console.log("")}>
          <Fontisto name="plus-a" size={10} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default CustomCard;
