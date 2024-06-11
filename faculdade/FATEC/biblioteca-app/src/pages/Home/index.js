import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, FlatList, Image } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import api from '../../services/api';
import styles from './styles'

export default function Home({ navigation }) {

  const [livros, setLivros] = useState([])

  async function getLivros() {
    const response = await api.get('/livro').catch((e) => console.log(e));

    setLivros(response.data)
  }

  useEffect(() => {
    getLivros()
  }, [livros])

  return(
    <View style={styles.container}>
      <FlatList
        data={livros}
        keyExtractor={ livro => livro.id_LIVRO }
        horizontal={false}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item: livro }) => (
          <View style={styles.lista_livros}>
            <Image source={{ uri: livro.IMAGE_LIVRO_URL || 'https://i.imgur.com/RRUe0Mo.png' }} style={styles.cover_livro}/>
            <View>
              <Text>Nome: {livro.NOME_LIVRO}, Edição: {livro.EDICAO_LIVRO}</Text>
            </View>
             <Text>Autor: {livro.autores.NOME_AUTOR}</Text>
             <Text>Categoria: {livro.categorias.NOME_CATEGORIA}</Text>
             <Text>Editora: {livro.editora.NOME_EDITORA}</Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.btn_add}
        onPress={() => navigation.navigate('InsereLivro')}
      >
        <FontAwesome name="plus" size={28} color="white" />
      </TouchableOpacity>
    </View>
  )
}