import { Dimensions, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  daily: {
    color: "#e3548c",
    fontSize: 40,
  },
  ui: {
    color: "#b3faf6",
    fontSize: 40,
  },
  logo: {
    marginTop: Constants.statusBarHeight + 20,
  },
  form: {
    marginTop: Constants.statusBarHeight + 20,
    width: Dimensions.get("window").width - 20,
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    marginTop: 16,
    marginRight: Dimensions.get("window").width - 130,
  },
  input: {
    backgroundColor: "#E9EBF8",
    color: "#445AA9",
    width: Dimensions.get("window").width - 80,
    marginTop: 6,
    padding: 8,
    borderRadius: 8,
  },

  btn: {
    width: Dimensions.get("window").width - 80,
    alignItems: "center",
    justifyContent: "center",
  },
  btnLogin: {
    marginTop: 40,
    height: 48,
    backgroundColor: "#e3548c",
    borderRadius: 10,
  },
  btnRegister: {
    marginTop: 10,
  },
  labelBtnLogin: {
    fontSize: 20,
    color: "#FFFFFF"
  },
  labelBtnRegister: {
    fontSize: 16,
    color: "#445AA9",
  },
});
