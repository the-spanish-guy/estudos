import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, FlatList, Button, TouchableOpacity, Alert, Image, ActivityIndicator } from 'react-native'
import moment from 'moment'
import { FontAwesome } from "@expo/vector-icons";
import api from '../../services/api'

import styles from './styles'

export default function AlunosEmprestar({ route }) {
  const [text, setText] = useState('');
  const [status, setStaus] = useState('');
  const [livros, setLivros] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const { id_aluno } = route.params
    console.log({id_aluno})
  
  async function insereAutor(nome_aluno, status_aluno) {
    await api.post('/aluno', {nome_aluno, status_aluno})
    .catch(({response}) => {
      if(response.status === 409) {
        Alert.alert('Conflict', response.data.msg)
      }
    })
    setText('');
    setStaus('');
  }

  async function getLivros() {
    const response = await api.get('/livro').catch((e) => console.log(e));

    setLivros(response.data)
  }

  async function emprestarLivro({ id_LIVRO: id_livro, estoques }) {
    const id_estoque = estoques[0].id_ESTOQUE
    console.log({id_aluno, id_estoque, id_livro})
    const data = {
      id_aluno,
      id_estoque
    }

    try {
      await api.post('/emprestado', data)
      await api.put(`/estoque/${id_livro}/empresta`);
      
    } catch ({ response }) {
      if(response.status === 409) {
        Alert.alert('Conflict', response.data.msg)
        return;
      }
    }
  }

  function showSpinner() {
    if(isLoading) {
      return (
        <ActivityIndicator size="small" color="#046270" />
      )
    }
  }

  useEffect(() => {
    getLivros()
  }, [livros])

  function verifyEstoque(livro) {
    if(livro.estoques.length !== 0) {
      return(
      <View style={{ flexDirection: "row", justifyContent:  "space-between" }}>
        <Text style={styles.alunos_nomes}>und: {livro.estoques.map((und) => und.UND_ITEM)}</Text>
        <TouchableOpacity style={{flexDirection: "row"}} onPress={() => emprestarLivro(livro)}>
          <Text style={{fontSize: 14, marginRight: 8}}>Emprestar</Text>
          <FontAwesome name="share" size={20} color="black" />
        </TouchableOpacity>
      </View>
      )
    }
    return (
      <View style={{ flexDirection: "row", justifyContent:  "space-between" }}>
        <Text style={[styles.alunos_nomes, {color: '#cecece'} ]}>und: 0</Text>
      </View>
    )
  }
  
  return(
    <View style={styles.container}>
      <FlatList
        data={livros}
        keyExtractor={ livro => livro.id_LIVRO }
        horizontal={false}
        style={styles.view_livro_content}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item: livro }) => (
          <View style={styles.livros_content}>
            <Image style={styles.imge_livro} source={{ uri: livro.IMAGE_LIVRO_URL}} />
            <View style={styles.content_txt}>
              <Text style={styles.alunos_nomes}>{livro.NOME_LIVRO}</Text>
                {
                  verifyEstoque(livro)
                }
            </View>

          </View>
        )}
      />

    </View>
  )
}