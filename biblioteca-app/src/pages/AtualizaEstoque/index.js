import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, FlatList, Image, TextInput } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import api from '../../services/api';
import styles from './styles'
import { Picker } from '@react-native-community/picker';

export default function AtualizaEstoque() {

  const [livros, setLivros] = useState([])
  const [livrosSelected, setLivrosSelected] = useState([])
  const [unidades, setUnidades] = useState('');

  async function getLivros() {
    const response = await api.get('/livro').catch((e) => console.log(e));
    setLivros(response.data)
  }
  
  async function atualizaEstoque(livro, unidade) {
    console.log(livro, unidade)
    await api.put(`/estoque/${livro}/atualiza/${unidades}`)
    setUnidades('')

  }

  useEffect(() => {
    getLivros()
  }, [])

  return(
    <View style={styles.container}>
        <Text style={styles.title}>Atualizar Estoque</Text>
        <Picker
          selectedValue={livrosSelected}
          style={styles.select}
          onValueChange={(itemValue, itemIndex) =>
            setLivrosSelected(itemValue)
          }>
            {
              livros.map((item, key) => (
                <Picker.Item label={item.NOME_LIVRO} value={item.id_LIVRO} key={key} />
              ))
            }
        </Picker>

        <TextInput
          onChangeText={(e) => setUnidades(e)}
          placeholder="Unidades"
          style={styles.txt}
          value={unidades}
        />

        <Button
          title="Enviar"
          onPress={() => atualizaEstoque(livrosSelected, unidades)}
        />
    </View>
  )
}