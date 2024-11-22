import Tracker from "@/components/Tracker";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const TrackOrder = () => {
  const router = useRouter();

  const onPress = () => {
    router.push("/(tabs)/add-to-cart");
  };
  return (
    <View>
      <View className="flex flex-row justify-center items-center h-[18%] bg-[#FFA451] relative">
        <Text className="text-white text-2xl font-bold absolute top-20">
          Delivery Status
        </Text>
        <Pressable
          className="p-2 border-2 rounded-lg border-[#FFA451] bg-white absolute left-5 top-20 flex flex-row justify-center items-center"
          onPress={onPress}
        >
          <Entypo name="chevron-left" size={20} color="black" />
          <Text className="text-[#010100] text-center">Go Back</Text>
        </Pressable>
      </View>
      <View className="">
        <Tracker
          img={require("../../assets/images/image-9.png")}
          header={"Quinoa fruit salad"}
          price={"20000"}
          color={`#FFFAEB`}
        />
        <View className="relative flex justify-center items-center">
          <View className="h-8 w-2 rounded-sm bg-[#FFA451] absolute left-20"></View>
        </View>
        <Tracker
          img={require("../../assets/images/image-10.png")}
          header={"Quinoa fruit salad"}
          price={"20000"}
          color={`#F1EFF6`}
        />
        <View className="relative flex justify-center items-center">
          <View className="h-8 w-2 rounded-sm bg-[#FFA451] absolute left-20"></View>
        </View>
        <View className="flex flex-row justify-between items-center mx-2 border-2 border-[#F4F4F4] p-10">
          <View
            className="rounded-lg"
            style={{
              width: 64,
              height: 64,
              backgroundColor: "#FEF0F0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/images/image-11.png")}
              style={{
                resizeMode: "contain",
                width: 40,
                height: 40,
              }}
            />
          </View>
          <View>
            <Text>Order Is Being Delivered</Text>
            <Text>Your delivery agent is coming</Text>
          </View>
          <View className="flex flex-row justify-center items-center bg-[#FFA451] rounded-3xl w-10 h-10 p-2">
            <Feather className="" name="phone-call" size={15} color="white" />
          </View>
        </View>
        <View className="relative flex flex-col justify-center items-center">
          <View className="h-8 w-2 rounded-sm bg-[#FFA451] absolute left-20"></View>
          <View className="h-8 w-2 rounded-sm bg-[#FFA451] absolute left-20"></View>
          <View className="h-8 w-2 rounded-sm bg-[#FFA451] absolute left-20"></View>
        </View>
      </View>

      <View className="flex justify-center items-center mt-7 mb-7">
        <Image
          source={require("../../assets/images/image-12.png")}
          style={{
            resizeMode: "cover",
            width: 327,
            height: 128,
          }}
        />
      </View>

      <View>
        <View className="relative flex flex-col justify-center items-center">
          <View className="h-8 w-2 rounded-sm bg-[#FFA451] absolute left-20"></View>
          <View className="h-8 w-2 rounded-sm bg-[#FFA451] absolute left-20"></View>
          <View className="h-8 w-2 rounded-sm bg-[#FFA451] absolute left-20"></View>
        </View>
        <View className="flex flex-row justify-between items-center mx-2 border-2 border-[#F4F4F4] p-10">
          <View
            className="rounded-lg"
            style={{
              width: 64,
              height: 64,
              // backgroundColor: "#FEF0F0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="checkcircleo" size={24} color="#4CD964" />
          </View>
          <View>
            <Text>Order Is Being Delivered</Text>
            <Text>Your delivery agent is coming</Text>
          </View>
          <View className="flex flex-row justify-center items-center bg-[#fff] rounded-3xl w-10 h-10 p-2">
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={24}
              color="#FFA451"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "relative",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(15px)",
  },
  modalView: {
    width: "100%",
    height: "50%",
    margin: 1,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalViewNested: {
    width: "100%",
    height: "60%",
    margin: 1,
    backgroundColor: "white",
    borderRadius: 20,
    // padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    position: "absolute",
    borderRadius: "50%",
    width: 50,
    height: 50,
    padding: 10,
    elevation: 2,
    top: -60,
    display: "flex",
    justifyContent: "center",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#fff",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default TrackOrder;
