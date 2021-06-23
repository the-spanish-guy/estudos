import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, AsyncStorage } from "react-native";
import logo from "../../../assets/logo.png";
import { Ionicons } from "@expo/vector-icons";

import List from "../../components/List";

import styles from "./styles";
import { references, leituras } from "../../utils/index";

export default HomeScreen = ({ navigation }) => {
  async function logout() {
    const data = JSON.parse(await AsyncStorage.getItem('loginData'))
    data.logged = false
    console.log(data)
    await AsyncStorage.setItem('loginData', JSON.stringify(data) )
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.text]}>Desafio</Text>
        <Ionicons name="ios-exit-outline" size={24} color="#E2428C" onPress={async () => await logout()} />
      </View>
      <View style={styles.jumbotron}>
        <Text style={[styles.title]}>Home Monitoring Dashboard</Text>
        <Text style={styles.content}>
          Projete um painel de monitoramento residencial. Seja criativo! O que
          tornaria um painel visualmente atraente e divertido de usar, ao mesmo
          tempo que se preocupava com os dados? Quais são os dados mais
          relevantes e qual é o posicionamento mais adequado para eles?
        </Text>
      </View>

      <List title="Referências" horizontal={true} list={references} />
      <List title="Leituras" horizontal={false} list={leituras} />
    </View>
  );
};
