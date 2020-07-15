import { StyleSheet } from 'react-native'
import Constant from 'expo-constants'
import { ceil } from 'react-native-reanimated'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  view_livro_content: {
    paddingTop: Constant.statusBarHeight,
    alignContent: "center",
    width: '96%',
  },
  livros_content:{
    flexDirection: "row",
    padding: 8,
    height: 100,
    borderRadius: 10
    // paddingBottom: 12
  },
  content_txt:{
    marginLeft: 12,
    alignContent: "center",
    justifyContent: "space-around",
    width: '60%',
  },
  imge_livro:{
    width: 80,
    height: 80,
    borderRadius: 12
  },
  alunos_nomes: {
    fontSize: 18,
    color: '#000',
  },
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
})