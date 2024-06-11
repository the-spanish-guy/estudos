import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, FlatList, Image } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import api from '../../services/api';
import styles from './styles'

export default function LivrosAutores({ route }) {

  const [livros, setLivros] = useState([])

  const { id_autor } = route.params;

  async function getLivrosDeAutores() {
    const response = await api.get(`/livro/${id_autor}/livro`).catch((e) => console.log(e));

    setLivros(response.data)
  }

  useEffect(() => {
    getLivrosDeAutores()
  }, [])

  function verifyLivros() {
    if(livros.length !== 0) {
      return(
        <View style={styles.container}>
          <FlatList
            data={livros}
            keyExtractor={ livro => livro.id_LIVRO }
            horizontal={false}
            showsVerticalScrollIndicator={false}
            renderItem={ ({ item: livro }) => (
              <View style={styles.lista_livros}>
                <Image source={{ uri: livro.IMAGE_LIVRO_URL }} style={styles.cover_livro}/>
                <View>
                  <Text>Nome: {livro.NOME_LIVRO}, {livro.EDICAO_LIVRO}</Text>
                </View>
                <Text>Categoria: {livro.categorias.NOME_CATEGORIA}</Text>
                <Text>Editora: {livro.editora.NOME_EDITORA}</Text>
              </View>
            )}
          />
        </View>
      )
    }

    return (
      <View style={styles.error}>
        <FontAwesome name="exclamation-triangle" size={80} color="#C2C2C2"/>
        <Text>Não foram encontrados livros para este autor!</Text>
      </View>
    )
  }

  return(
    verifyLivros()
  )
}