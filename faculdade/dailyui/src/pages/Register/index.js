import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import {
  createDownloadResumable,
  documentDirectory,
} from "expo-file-system/legacy";

import logo from "../../../assets/logo.png";
import styles from "./styles";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [checked, setChecked] = useState(false);
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [downloadProgress, setDownloadProgress] = useState(false);

  const callback = (downloadProgress) => {
    const progress =
      downloadProgress.totalBytesWritten /
      downloadProgress.totalBytesExpectedToWrite;
    setDownloadProgress({
      downloadProgress: progress,
    });
  };
  function downloadPdf() {
    createDownloadResumable(
      "../../../assets/termos_condições_e_política_de_privacidade.pdf",
      documentDirectory + "termos.pdf",
      {},
      callback
    );
  }

  function handleLogin() {
    navigation.navigate("HomeScreen");
  }

  async function handleRegister() {
    if (!name || !email || !senha) {
      const reg = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

      let msg = "Alguns erros foram encontrados";

      if (!name) {
        msg += `\nCampo nome obrigatorio!`;
      }
      if (!email) {
        msg += `\nCampo email obrigatorio!`;
      }
      if (!reg.test(email)) {
        msg += "\nEmail invalido!";
      }
      if (!senha) {
        msg += `\nCampo senha obrigatorio!`;
      }
      if (!checked) {
        msg += "\nÉ obrigatorio aceitar os termos!";
      }
      alert(msg);
      return;
    }

    await AsyncStorage.setItem(
      "loginData",
      JSON.stringify({
        login: email,
        password: senha,
        logged: true,
      })
    );

    handleLogin();
    setName("");
    setEmail("");
    setSenha("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <View style={styles.containerDaily}>
          <Text style={styles.daily}>Daily</Text>
          <Text style={styles.ui}>Ui</Text>
        </View>
        <Image source={logo} />
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="Insira seu e-mail"
        />
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
        <View style={styles.containerSenha}>
          <TextInput
            style={styles.inputSenha}
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

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Checkbox
            style={{ margin: 8 }}
            value={checked}
            onValueChange={setChecked}
          />
          <Text style={{ fontSize: 15 }}>
            Aceito os{" "}
            <Text
              style={styles.terms}
              onPress={async () => await downloadPdf()}
            >
              Termos de uso
            </Text>{" "}
            e a{" "}
            <Text
              style={styles.terms}
              onPress={async () => await downloadPdf()}
            >
              Política de Privacidade
            </Text>
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={async () => await handleRegister()}
      >
        <Text style={styles.labelBtnLogin}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
