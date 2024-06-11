import { StyleSheet } from 'react-native'
import Constant from 'expo-constants'


export default StyleSheet.create({
  container: {
    flex: 1,
  },
  lista_livros: {
    paddingTop: Constant.statusBarHeight + 20,
    alignItems: "center",
    marginBottom: 50
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
  }
})