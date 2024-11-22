import { View, Text, Image, SafeAreaView, Pressable } from "react-native";
import React from "react";
import SearchInput from "@/components/SearchInput";
import { Fontisto, Octicons } from "@expo/vector-icons";
import CustomCard from "@/components/CustomCard";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="">
      <View className="flex flex-row justify-between items-center">
        <View>
          <Image
            className="ml-5"
            source={require("../../assets/images/sidebar.png")}
            style={{
              resizeMode: "contain",
              width: 21,
              height: 21,
              marginBottom: 10,
            }}
          />
        </View>
        <View>
          <Image
            className="mr-5"
            source={require("../../assets/images/image-5.png")}
            style={{
              resizeMode: "cover",
              width: 100,
              height: 100,
            }}
          />
        </View>
      </View>
      <Text className="text-3xl mb-4 w-[76%] mx-5 antialiased tracking-wide">
        Hello Tony, What fruit salad combo do you want today?
      </Text>
      <View className="mx-5">
        <SearchInput />
      </View>
      <View>
        <Text className="font-semibold text-xl antialiased tracking-wide mt-10 mb-5 mx-5">
          Recommended Combo
        </Text>

        <View className="flex flex-row justify-between overflow-scroll">
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </View>

        <View className="flex flex-row justify-around items-center">
          <Text>Hottest</Text>
          <Text>Popular</Text>
          <Text>New Combo</Text>
          <Text>Top</Text>
        </View>
        <View className="flex flex-row justify-between overflow-scroll">
          <Pressable onPress={() => router.push("/(tabs)/add-to-cart")}>
            <CustomCard />
          </Pressable>
          <CustomCard />
          <CustomCard />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
