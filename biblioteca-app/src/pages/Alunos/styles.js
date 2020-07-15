import { StyleSheet } from 'react-native'
import Constant from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  container_txt: {
    paddingTop: Constant.statusBarHeight + 40,
    width: '98%',
    flexDirection: "row",
    alignItems: "center"
  },
  add:{
    width: 50,
    height: 50,
    backgroundColor: '#61B8F2',
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btn_add:{
    // marginTop:6,
  },
  txt: {
    width: '80%',
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
  container_autor: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    width: '98%',
  },
  txt_autores: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#000',
  },
  autor_content: {
    alignContent: "center",
    width: '80%',
  },
  alunos_nomes:{
    fontSize: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    color: '#000',
    paddingBottom: 12
  },
})