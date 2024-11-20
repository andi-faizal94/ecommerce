import React from "react";
import { Pressable, Text } from "react-native";

interface Props {
  text: string;
  onPress: () => void;
}

function Button({ text, onPress }: Props) {
  return (
    <Pressable
      className="p-4 border-2 rounded-lg border-[#FFA451] z-50 bg-white "
      onPress={onPress}
    >
      <Text className="text-[#FFA451] text-center"> {text}</Text>
    </Pressable>
  );
}

export default Button;
