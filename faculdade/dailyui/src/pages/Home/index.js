import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import logo from "../../../assets/logo.png";

import Login from "../Login";

import styles from "./styles";

const Home = ({ navigation }) => {
  useEffect(() => {
    (async () => {
      const data = JSON.parse(await AsyncStorage.getItem('loginData'))
      navigation.navigate(data?.logged ? "HomeScreen" : "Login");
    })()
  }, [])

  return null;
};

export default Home;
