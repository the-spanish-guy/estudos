import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

import logo from "../../../assets/logo.png";
import styles from "./styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [hiddenPassword, setHiddenPassword] = useState(true);

  function handleRegister() {
    console.log("aqui");
    // console.log(JSON.stringify(props, null, 2))
    navigation.navigate("Register");
  }

  async function handleLogin() {
    const data = JSON.parse(await AsyncStorage.getItem(`loginData`));

    if (email !== data.login || senha !== data.password) {
      let msg = "";
      if (email !== data.login) {
        msg += "\n Email não cadastrado";
      }
      if (senha !== data.password) {
        msg += "\n Senha não cadastrada";
      }
      alert(msg)
      return
    }

    //console.log(data)
    await AsyncStorage.setItem('loginData', JSON.stringify({...data, logged: true}))
    navigation.navigate("HomeScreen");
    setEmail('')
    setSenha('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <View style={{ flexDirection: "row", marginBottom: 8 }}>
          <Text style={styles.daily}>Daily</Text>
          <Text style={styles.ui}>Ui</Text>
        </View>
        <Image source={logo} />
      </View>

      <View style={styles.form}>
        {/* <Text>Entre na sua conta</Text> */}
        <Text style={styles.label}>E-mail</Text>

        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="Insira seu e-mail"
        />

        <Text style={styles.label}>Senha</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#E9EBF8",
            justifyContent: "space-between",

            width: Dimensions.get("window").width - 80,
            marginTop: 6,
            padding: 8,
            borderRadius: 8,
          }}
        >
          <TextInput
            style={{
              color: "#445AA9",
            }}
            onChangeText={setSenha}
            value={senha}
            textContentType="password"
            secureTextEntry={hiddenPassword}
            placeholder="Insira sua senha"
          />
          {hiddenPassword ? (
            <Ionicons
              name="eye"
              size={20}
              onPress={() => setHiddenPassword(false)}
            />
          ) : (
            <Ionicons
              name="eye-off"
              size={20}
              onPress={() => setHiddenPassword(true)}
            />
          )}
        </View>
      </View>
      <TouchableOpacity
        style={[styles.btn, styles.btnLogin]}
        onPress={async () => await handleLogin()}
      >
        <Text style={styles.labelBtnLogin}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, styles.btnRegister]}
        onPress={() => handleRegister()}
      >
        <Text style={styles.labelBtnRegister}>Ainda não possui cadastro ?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
