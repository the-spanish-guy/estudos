import { Dimensions, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width - 20,
    marginLeft: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Constants.statusBarHeight + 20,
  },
  jumbotron: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#E9EBF8",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
  },
  text: {
    color: "#0C216D",
    fontWeight: "800",
    fontSize: 24,
  },
  title: {
    fontSize: 18,
    color: "#E2428C",
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: { color: "#0C216D", fontSize: 16 },
});
