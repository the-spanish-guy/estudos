import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, FlatList, Button, TouchableOpacity, Alert, Image } from 'react-native'
import { Picker } from "@react-native-community/picker";
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

import moment from 'moment'
import { FontAwesome } from "@expo/vector-icons";
import api from '../../services/api'

import styles from './styles'
import user from '../../../assets/user-3.png'

export default function CreateLivro({ navigation }) {
  /**
   * TODO:
   *  - edicao, setEdicao
   */
  const [picker, setPicker] = useState('');
  const [edicao, setEdicao] = useState('');
  const [isbn, setIsbn] = useState('');
  const [nomeLivro, setNomeLivro] = useState('');
  const [anoLancamento, setAnoLancamento] = useState('');
  const [unidades, setUnidades] = useState('');
  
  const [autor, setAutor] = useState([]);
  const [autorSelected, setAutorSelected] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [categoriaSelected, setCategoriaSelected] = useState([]);
  const [editora, setEditora] = useState([]);
  const [editoraSelected, setEditoraSelected] = useState([]);

  const [avatar, setAvatar] = useState();

  async function imagePermission() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if(status !== 'granted') {
      alert('permissao')
      return;
    }

    const data = await ImagePicker.launchImageLibraryAsync({})

    if(data.cancelled) {
      return;
    }
    if(!data.uri){
      return;
    }
    
    console.log(data)
    setAvatar(data);
  }

  async function insereLivro(
    edicao,
    isbn,
    nomeLivro,
    anoLancamento,
    autor,
    categoria,
    editora,
    image_livro,
    und
    ) {

      if(!(nomeLivro) || !(anoLancamento) || !(image_livro) || !(unidades)) {
        Alert.alert('Campos Invalidos', 'Revise os campos')
        return;
      }
      
      const nameextension = image_livro.uri.split('.').map((a) => a.trim())
      const extension = nameextension[nameextension.length -1]
      const status = 1
      const body = new FormData();
      body.append('nome_livro',  nomeLivro)
      body.append('status_livro', status)
      body.append('ano_lancamento_livro', anoLancamento)
      body.append('ISBN', isbn)
      body.append('capa_livro', { uri: image_livro.uri, type: 'image/jpeg', name: `someimage.${extension}` })
      body.append('edicao_livro', edicao)
      body.append('autor_id_livro', autor)
      body.append('editora_id_livro', editora)
      body.append('categoria_id_livro', categoria)

      try {
        const response = await api.post('/livro', body,
        {
          headers:{
           'Content-Type': 'multipart/form-data',
          }
        })

        const { ISBN } = response.data
        console.log('pos insert livro: ', response.data)
        console.log(ISBN)

        const data ={
          und_item: und,
          isbn: ISBN
        }

        await api.post('/estoque', data)

      } catch (error) {
        console.log(error)
      }

    setNomeLivro('');
    setAnoLancamento('');
    setAvatar();
    setEdicao('');
    setIsbn('');
    setUnidades('');
    // navigation.goBack();
  }

  async function getAutores() {
    const response = await api.get('/autor')
    setAutor(response.data)
  }

  async function getEditoras() {
    const response = await api.get('/editora')
    setEditora(response.data)
  }

  async function getCategoria() {
    const response = await api.get('/categoria')
    setCategoria(response.data)
  }

  useEffect(() => {
    getAutores()
    getEditoras()
    getCategoria()
    console.log(editora)
    console.log(editoraSelected)
  }, [])
  
  return(
    <View style={styles.container}>
      {/* <View style={styles.container_txt}> */}
        <View style={{width: '80%'}}>
          <TextInput
            onChangeText={e => setNomeLivro(e)}
            placeholder="Nome Livro"
            style={styles.txt}
            value={nomeLivro}
          />

          <View style={styles.input_form}>
            <TextInput
              onChangeText={e => setAnoLancamento(e)}
              placeholder="Ano de lançamento"
              style={[styles.txt, { width: '60%' }]}
              value={anoLancamento}
              keyboardType="numeric"
            />

            <TextInput
              onChangeText={e => setEdicao(e)}
              placeholder="Edição do livro"
              style={[styles.txt, { width: '38%' } ]}
              value={edicao}
            />
          </View>
        </View>

        {/* <TouchableOpacity style={styles.add} onPress={() => insereAutor(text, status)}>
        </TouchableOpacity> */}
        <View style={styles.txt_select}>
          <TextInput
            onChangeText={e => setIsbn(e)}
            placeholder="ISBN"
            style={[styles.txt , { width: '40%' } ]}
            value={isbn}
          />
          <View>
            <Text style={styles.txt_label_selected}>Autor</Text>
            <Picker
              selectedValue={(autorSelected) || 'Selecione um autor'}
              style={{height: 50, width: 100}}
              onValueChange={(itemValue, itemIndex) =>
                setAutorSelected(itemValue)
              }>
                {
                  autor.map((item, key) => (
                    <Picker.Item label={item.NOME_AUTOR} value={item.id_AUTOR} key={key} />
                  ))
                }
            </Picker>
          </View>
        </View>

        <View style={styles.txt_select}>
          <View style={{width: '30%'}}>
            <Text style={styles.txt_label_selected}>Editora</Text>
            <Picker
              selectedValue={(editoraSelected) || 'Selecione uma Editora'}
              style={{height: 50, width: 100}}
              onValueChange={(itemValue, itemIndex) =>
                setEditoraSelected(itemValue)
              }>
                {
                  editora.map((item, key) => (
                    <Picker.Item label={item.NOME_EDITORA} value={item.id_EDITORA} key={key} />
                  ))
                }
            </Picker>
          </View>

          <View style={{width: '30%'}}>
            <Text style={styles.txt_label_selected}>Editora</Text>
            <Picker
              selectedValue={(categoriaSelected) || 'Selecione uma Categoria'}
              style={{height: 50, width: '100%',}}
              onValueChange={(itemValue, itemIndex) =>
                setCategoriaSelected(itemValue)
              }>
                {
                  categoria.map((item, key) => (
                    <Picker.Item label={item.NOME_CATEGORIA} value={item.id_CATEGORIA} key={key} />
                  ))
                }
            </Picker>
          </View>
        </View>

        

        <View style={styles.image_upload}>
          <Image
            source={{ uri: avatar ? avatar.uri : 'https://pluspng.com/img-png/user-png-icon-male-user-icon-512.png' }}
            style={{width: 100, height: 100}}
          />
          <TouchableOpacity onPress={imagePermission} style={styles.btn_img} >
            <Text style={{fontSize: 15}}>Inserir imagem</Text>
           <FontAwesome name="upload" size={28} color="black" style={styles.btn_add}/>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: "row", justifyContent: "space-around", width: '98%'}}>
          <TextInput
              onChangeText={e => setUnidades(e)}
              placeholder="Unidades"
              style={[styles.txt, { width: '40%' } ]}
              value={unidades}
              keyboardType="numeric"
            />
          <TouchableOpacity style={{ justifyContent: "center" }}>
            <Button
              title="Enviar"
              onPress={() => insereLivro(
                edicao,
                isbn,
                nomeLivro,
                anoLancamento,
                autorSelected,
                categoriaSelected,
                editoraSelected,
                avatar,
                unidades)
              }
            />
          </TouchableOpacity>
        </View>
    </View>
  )
}