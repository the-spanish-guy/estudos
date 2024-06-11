import { StyleSheet } from 'react-native'
import Constant from 'expo-constants'


export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    paddingTop: Constant.statusBarHeight + 20,
    fontSize: 40,
  },
  cover_livro: {
    width: 300,
    height: 300,
    borderWidth: 1,
    borderRadius: 10
  },
  btn_add: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(97, 184, 242, 1)',
    borderRadius: 50,
    position: "absolute",
    bottom: 10,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    alignSelf: "center",
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: "#EDF2F0",
    padding: 10,
    backgroundColor: "#fff",
    margin: 10,
    color: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  select: {
    height: 50,
    width: '80%',
    marginTop: 10,
    marginBottom: 10
  },
})