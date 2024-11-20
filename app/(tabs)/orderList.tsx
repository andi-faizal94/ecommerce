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
import AppButton from "./appButton";

const orderList = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
              <View className="w-full mb-5">
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
                  placeholder="Tony"
                />
              </View>
              <View className="w-full">
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
                  // style={styles.input}
                  // onChangeText={onChangeNumber}
                  // value={number}
                  placeholder="Tony"
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
