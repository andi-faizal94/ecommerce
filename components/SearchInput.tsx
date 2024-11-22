import { Ionicons } from "@expo/vector-icons"; //
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Ionicons name="search" size={20} color="#6b7280" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search for fruit salad combos"
          placeholderTextColor="#9ca3af"
          className="text-base"
          //   value={searchText}
          //   onChangeText={setSearchText}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Image
          source={require("../assets/images/image-4.png")}
          style={{
            resizeMode: "contain",
            width: 20,
            height: 20,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  inputWrapper: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d1d5db",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#111827",
  },
  button: {
    position: "absolute",
    right: 10,
    top: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default SearchInput;
