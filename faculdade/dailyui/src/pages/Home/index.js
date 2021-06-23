import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage } from "react-native";
import logo from "../../../assets/logo.png";

import Login from "../Login";

import styles from "./styles";

export default Home = ({ navigation }) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    (async () => {
      const { logged } = JSON.parse(await AsyncStorage.getItem('loginData'))
      console.log(logged)
      setIsLogged(logged)

    })()
  }, [])

  if (!isLogged) {
    navigation.navigate("Login");
    return null;
  } else {
    navigation.navigate("HomeScreen");
    return null;
  }
};
