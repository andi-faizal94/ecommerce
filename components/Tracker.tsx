import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  img: any;
  header: string | undefined;
  price: string | undefined;
  color: string | undefined;
}

const Tracker = ({ img, header, color, price }: Props) => {
  return (
    <View className="flex flex-row justify-between items-center mx-2 border-2 border-[#F4F4F4] p-10">
      <View
        className="rounded-lg"
        style={{
          width: 64,
          height: 64,
          backgroundColor: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={img}
          style={{
            resizeMode: "contain",
            width: 40,
            height: 40,
          }}
        />
      </View>
      <View>
        <Text>{header}</Text>
      </View>
      <View>
        <AntDesign name="checkcircleo" size={24} color="#4CD964" />
      </View>
    </View>
  );
};

export default Tracker;
