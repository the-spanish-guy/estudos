import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, FlatList, Button, TouchableOpacity, Alert } from 'react-native'
import moment from 'moment'
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import api from '../../services/api'

import styles from './styles'

export default function Alunos({ navigation }) {
  const [text, setText] = useState('');
  const [status, setStaus] = useState('');
  const [alunos, setAlunos] = useState([]);

  async function insereAluno(nome_aluno, status_aluno) {
    await api.post('/aluno', {nome_aluno, status_aluno})
    .catch(({response}) => {
      if(response.status === 409) {
        Alert.alert('Conflict', response.data.msg)
      }
    })
    setText('');
    setStaus('');
  }

  async function getAlunos() {
    const response = await api.get('/aluno')

    setAlunos(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getAlunos()
  }, [text])

  function handleNavigation(id_aluno) {
    navigation.navigate('AlunosEmprestar', { id_aluno })
  }

  function handleNavigationViewBook(id_aluno) {
    navigation.navigate('AlunosVerLivros', { id_aluno })

  }
  
  
  return(
    <View style={styles.container}>
      <View style={styles.container_txt}>
        <View style={{width: '80%'}}>
          <TextInput
            onChangeText={e => setText(e)}
            placeholder="Nome do Aluno"
            style={styles.txt}
            value={text}
          />

          <TextInput
            onChangeText={e => setStaus(e)}
            placeholder="Status do Aluno"
            style={styles.txt}
            value={status}
          />
        </View>

        <TouchableOpacity style={styles.add} onPress={() => insereAluno(text, status)}>
          <Ionicons name="md-add" size={32} color="white" style={styles.btn_add}/>
        </TouchableOpacity>
      </View>

      <View style={styles.container_autor}>
        <Text style={styles.txt_autores}>Nome</Text>
        <Text style={styles.txt_autores}>Ações</Text>
        <Text style={styles.txt_autores}>Status</Text>
      </View>
      <FlatList
        data={alunos}
        keyExtractor={ aluno => aluno.id_ALUNO }
        horizontal={false}
        style={styles.autor_content}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item: aluno }) => (
          <View style={styles.alunos_nomes}>
              <Text style={styles.alunos_nomes}>{aluno.NOME_ALUNO}</Text>
            <View style={{flexDirection: "row", justifyContent: "space-between", width: 60}}>
              <TouchableOpacity onPress={() => handleNavigationViewBook(aluno.id_ALUNO)}>
                <FontAwesome name="eye" size={18} color="black"/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigation(aluno.id_ALUNO)}>
                <FontAwesome name="book" size={18} color="black"/>
              </TouchableOpacity>
            </View>  
            <Text style={styles.alunos_nomes}>{aluno.STATUS_ALUNO}</Text>
          </View>
        )}
      />

    </View>
  )
}