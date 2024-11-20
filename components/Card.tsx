import { View, Text, Image } from "react-native";
import React from "react";

interface Props {
  img: any;
  header: string | undefined;
  text: string | undefined;
  price: string | undefined;
}

const Card = ({ img, header, text, price }: Props) => {
  return (
    <View className="flex flex-row justify-around mx-2 border-2 border-[#F4F4F4] p-10">
      <View className="bg-[#FEF0F0]">
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
        <Text>{text}</Text>
      </View>
      <View>
        <Text>{price}</Text>
      </View>
    </View>
  );
};

export default Card;
