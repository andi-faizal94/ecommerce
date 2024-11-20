import Card from "@/components/Card";
import React, { useState } from "react";
import {
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

const orderList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalNested, setModalNested] = useState(false);

  const router = useRouter();
  return (
    <View>
      <View className="flex flex-row justify-center items-center h-[18%] bg-[#FFA451]">
        <Text className="text-white">My Basket</Text>
      </View>
      <View className="h-[67%]">
        <Card
          img={require("../../assets/images/image-1.png")}
          header={"Quinoa fruit salad"}
          text={"2pack"}
          price={"20000"}
        />
        <Card
          img={require("../../assets/images/image-1.png")}
          header={"Quinoa fruit salad"}
          text={"2pack"}
          price={"20000"}
        />
        <Card
          img={require("../../assets/images/image-1.png")}
          header={"Quinoa fruit salad"}
          text={"2pack"}
          price={"20000"}
        />
      </View>

      <View className="flex flex-row  w-[90%] h-[15%] mx-5">
        <View className="w-1/2">
          <Text>Total</Text>
          <Text>60.000</Text>
        </View>

        <View className="w-1/2">
          <AppButton
            title="Checkout"
            size="sm"
            backgroundColor="#FF8D4D"
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          />
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View className="w-full mb-5 mt-7">
                <Text className="mb-5">Delivery Address</Text>
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
                  placeholder="10th avenue, Lekki, Lagos State"
                />
              </View>
              <View className="w-full mb-5">
                <Text className="mb-5">Number we can call</Text>

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
                  placeholder="09090605708"
                />
              </View>

              <View className="flex flex-row justify-evenly w-full mt-10">
                <Button
                  text={"Pay On Delivery"}
                  onPress={() => {
                    setModalVisible(false);
                    router.push("/(tabs)/complete-order");
                  }}
                />
                <Button
                  onPress={() => {
                    setModalNested(!modalNested);
                  }}
                  text={"Pay With Card"}
                />
              </View>
              <View className="flex flex-row "></View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalNested}
          onRequestClose={() => {
            setModalNested(!modalNested);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalViewNested}>
              <View className="w-full mb-5 mt-7 px-10">
                <Text className="mb-5">Card Holders Name</Text>
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
                  placeholder="10th avenue, Lekki, Lagos State"
                />
              </View>
              <View className="w-full mb-5 px-10">
                <Text className="mb-5">Card Number</Text>

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
                  placeholder="09090605708"
                />
              </View>

              <View className="flex flex-row justify-between w-full px-10">
                <View className="w-[40%]">
                  <Text className="mb-5">Date</Text>

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
                    placeholder="09090605708"
                  />
                </View>

                <View className="w-[40%]">
                  <Text className="mb-5">CCV</Text>

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
                    placeholder="09090605708"
                  />
                </View>
              </View>

              <View className="w-full h-[30%] flex flex-row justify-center items-center bg-[#FFA451] mt-16">
                <View>
                  <Button
                    text={"Pay On Delivery"}
                    onPress={() => {
                      setModalVisible(false);
                      router.push("/(tabs)/complete-order");
                    }}
                  />
                </View>
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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

export default orderList;
