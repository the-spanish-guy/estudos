import { StyleSheet } from 'react-native'
import Constant from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Constant.statusBarHeight + 40,
  },
  container_txt: {
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
    width: '98%',
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: "#EDF2F0",
    padding: 10,
    backgroundColor: "#fff",
    margin: 10,
    marginLeft: -10,
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
  input_form: {
    flexDirection: "row",
    width: "98%",
    justifyContent: "space-between"
  },
  input_form_txt: {
    width: '50%',
  },
  txt_select: {
    width: '98%',
    flexDirection: "row",
    justifyContent: "space-around"
  },
  txt_label_selected: {
    color: '#7D7D7D',
    top: 14
  },
  image_upload: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    width: '98%'
  },
  btn_img: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center",
    borderRadius: 8,
    height: 50,
    padding: 10,
    width: '48%',
    backgroundColor: 'rgba(122, 202, 255, .5)',
    // cursor: 'pointer'
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
  autor_nomes:{
    fontSize: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    color: '#000'
  },
})