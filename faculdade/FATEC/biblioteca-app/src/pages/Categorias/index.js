import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, FlatList, Button, TouchableOpacity, Alert } from 'react-native'
import moment from 'moment'
import { Ionicons } from "@expo/vector-icons";
import api from '../../services/api'

import styles from './styles'

export default function Categorias() {
  const [text, setText] = useState('');
  const [categorias, setCategorias] = useState([]);

  async function insereCategoria(nome_categoria) {
    await api.post('/categoria', {nome_categoria})
    .catch(({response}) => {
      if(response.status === 409) {
        Alert.alert('Conflict', response.data.msg)
      }
    })
    setText('');
  }

  async function getCategorias() {
    const response = await api.get('/categoria')

    setCategorias(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getCategorias()
  }, [text])
  
  return(
    <View style={styles.container}>
      <View style={styles.container_txt}>
        <TextInput
          onChangeText={e => setText(e)}
          placeholder="Nome do Categoria"
          style={styles.txt}
          value={text}
        />
        <TouchableOpacity style={styles.add} onPress={() => insereCategoria(text)}>
          <Ionicons name="md-add" size={32} color="white" style={styles.btn_add}/>
        </TouchableOpacity>
      </View>

      <View style={styles.container_autor}>
        <Text style={styles.txt_autores}>Nome</Text>
        <Text style={styles.txt_autores}>Data</Text>
      </View>
      <FlatList
        data={categorias}
        keyExtractor={ categoria => categoria.id_CATEGORIA }
        horizontal={false}
        style={styles.autor_content}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item: categoria }) => (
          <View style={styles.categoria_nomes}>
            <Text style={styles.categoria_nomes}>{categoria.NOME_CATEGORIA}</Text>
            <Text style={styles.categoria_nomes}>{moment(categoria.createdAt).format('DD-MM-YYYY')}</Text>
          </View>
        )}
      />

    </View>
  )
}