import Card from "@/components/Card";
import React, { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import AppButton from "./app-button";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import { Octicons } from "@expo/vector-icons";

const AddToCart = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalNested, setModalNested] = useState(false);

  const router = useRouter();

  const onPress = () => {
    console.log("coba");
  };
  return (
    <View className="bg-[#FFA451]">
      <View className="flex flex-row justify-center items-center h-[39%]  relative">
        <View className="mt-16">
          <Image
            source={require("../../assets/images/image-8.png")}
            style={{
              resizeMode: "contain",
              width: 176,
              height: 176,
            }}
          />
        </View>
        <Pressable
          className="p-2 border-2 rounded-2xl border-[#FFA451] bg-white absolute left-5 top-20 flex flex-row justify-center items-center"
          onPress={onPress}
        >
          <Entypo name="chevron-left" size={20} color="black" />
          <Text className="text-[#010100] text-center">Go Back</Text>
        </Pressable>
      </View>
      <View className="h-[61%] rounded-t-3xl bg-white">
        <View className="mt-10">
          <Text className="text-3xl mb-5 mt-5 mx-5">Quinoa Fruit Salad</Text>

          <View className="w-full flex flex-row justify-between items-center mb-5 mt-5 mx-5">
            <View className="flex flex-row justify-between items-center w-1/4">
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>-</Text>
              </Pressable>

              <Text style={styles.textStyle}>1</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>+</Text>
              </Pressable>
            </View>
            <View className="w-1/4">
              <Text>2,1000</Text>
            </View>
          </View>
          <View className="w-full h-0.5 bg-[#F3F3F3] mb-5"></View>

          <Text className="text-lg mx-5">One Pack Contains:</Text>
          <View className="w-[39%] h-1 bg-[#FFA451] mb-5 mx-5"></View>
          <Text className="text-base mb-5 mx-5">
            Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh
            mint.
          </Text>
          <View className="w-full h-0.5 bg-[#F3F3F3] mb-10"></View>

          <Text className="text-base mb-20 mx-5">
            If you are looking for a new fruit salad to eat today, quinoa is the
            perfect brunch for you. make
          </Text>
        </View>
        {/* <View className="mx-4"> */}
        <View className="flex flex-row justify-between h-[15%]">
          <View className="ml-5">
            <Pressable
              className="p-2 border-2 border-[#FFF7F0] rounded-2xl bg-[#FFF7F0] "
              onPress={onPress}
            >
              <Octicons name="heart" size={24} color="#FFA451" />
            </Pressable>
          </View>

          <View className="w-1/2 mr-5">
            <AppButton
              title="Add To Basket"
              size="sm"
              backgroundColor="#FF8D4D"
              onPress={() => {
                router.push("/(tabs)/order-list");
              }}
            />
          </View>
        </View>
        {/* </View> */}
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
    backgroundColor: "black",
    borderRadius: 20,
    // padding: 35,
    borderWidth: 5,
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
    // position: "absolute",
    borderRadius: "50%",
    width: 30,
    height: 30,
    padding: 1,
    elevation: 2,
    backgroundColor: "black",
    // padding: 35,
    borderWidth: 1,
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

export default AddToCart;
