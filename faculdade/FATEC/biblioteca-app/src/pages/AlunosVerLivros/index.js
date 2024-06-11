import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, FlatList, Button, TouchableOpacity, Alert, Image, ActivityIndicator } from 'react-native'
import moment from 'moment'
import { FontAwesome } from "@expo/vector-icons";
import api from '../../services/api'

import styles from './styles'

export default function AlunosVerLivros({ route }, navigation) {
  const [text, setText] = useState('');
  const [status, setStaus] = useState('');
  const [livros, setLivros] = useState([]);

  const { id_aluno } = route.params

  async function getLivros() {
    const response = await api.get(`/emprestado/${id_aluno}/aluno`).catch((e) => console.log(e));
    // console.log('testando aqui: ', response.data)

    setLivros(response.data)
    // console.log('aqui: ', livros)
  }

  async function devolverLivro(livro) {
    const { id_LIVRO: id_livro } = livro
    const { id_ESTOQUE: id_estoque} = livro.estoques[0]
    try {
      const data = {
        id_aluno,
        id_estoque
      }

      await api.put(`/estoque/${id_livro}/atualiza/${1}`).catch((e) => console.log(e))
      await api.post('/emprestado/devolvido', data)

      // navigation.goBack()
      
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    getLivros()
  }, [livros])

  function verificaLivrosParaDevolver() {
    // console.log('verificando', dataToShow)
    if (!(livros !== null) || !(livros.length !== 0)) {
      return (
        <View style={styles.error}>
          <FontAwesome name="exclamation-triangle" size={80} color="#C2C2C2"/>
          <Text>Este aluno não tem livros emprestados!</Text>
        </View>
      )
    }
    return (
        <View style={styles.container}>
          <FlatList
            data={livros}
            keyExtractor={(index) => index}
            horizontal={false}
            style={styles.view_livro_content}
            showsVerticalScrollIndicator={false}
            renderItem={ ({ item: livro }) => (
              <View style={styles.livros_content}>
                <Image style={styles.imge_livro} source={{ uri: livro.item.livros.IMAGE_LIVRO_URL}} />
                <View style={styles.content_txt}>
                  <Text style={styles.alunos_nomes}>{livro.item.livros.NOME_LIVRO}</Text>
                  <View style={{ flexDirection: "row", justifyContent:  "space-between" }}>
                    <Text>{moment(livro.ENTRADA).format('DD-MM-YYYY')}</Text>
                    <TouchableOpacity onPress={() => devolverLivro(livro.item.livros)}>
                      <FontAwesome name="undo" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
    )
  }
  
  return(
    // setTimeout(() => {
      verificaLivrosParaDevolver()
    // }, 1000)
  )
}