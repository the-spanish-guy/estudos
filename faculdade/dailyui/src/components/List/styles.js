import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    marginTop: 20,
    color: "#0C216D",
    fontWeight: "800",
    fontSize: 24,
  },
  flatList: (horizontal) => ({
    marginTop: 10,
    height: !horizontal ? "42%" : 'auto' 
  }),
  view: {
    width: 140,
    padding: 10,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: "#E9EBF8",
  },
  viewHorizontal: {
    flexDirection: "row",
    padding: 10,
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#E9EBF8",
    justifyContent: "space-between",
  },
  viewTitle: {
    color: "#E2428C",
    fontSize: 20,
    fontWeight: "bold",
  },
  viewTitleHorizontal: {
    color: "#E2428C",
    fontSize: 20,
    marginLeft: 10,
    width: "60%",
  },
  image: { width: "40%", height: 100, borderRadius: 10 },
  viewContent: {
    color: "#0C216D",
    fontSize: 16,
  },
  containerLink: {
    marginTop: 10,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: "#E2428C",
    borderRadius: 20,
    alignItems: "center",
  },
  viewLink: {
    color: "#FFFFFF",
  },
});
