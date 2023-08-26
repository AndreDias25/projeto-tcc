import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import CheckBox from "react-native-checkbox";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";

export function SignUpScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const handleSignUp = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>

        {/* Campos de Cadastro */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/illustrations/sign-up.png")}
            style={styles.image}
          />
        </View>

        <Text style={styles.headerText}>
          {name || email || password || confirmPassword
            ? ""
            : "Cadastre-se"}
        </Text>

        <View style={styles.inputContainer}>
          <MaterialIcons name="person-outline" size={20} color="#fff" />
          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#fff"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="mail-outline" size={20} color="#fff" />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#fff"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock-outline" size={20} color="#fff" />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock-outline" size={20} color="#fff" />
          <TextInput
            style={styles.input}
            placeholder="Repetir Senha"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        {/* CHECKBOX */}
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={toggleCheckBox}
        >
          <View
            style={[
              styles.checkbox,
              { backgroundColor: isChecked ? "#fff" : "transparent" },
            ]}
          >
            {isChecked && (
              <MaterialIcons name="check" size={16} color="#2BB459" />
            )}
          </View>
          <Text style={styles.checkboxText}>
            Eu li e concordo com os termos
          </Text>
        </TouchableOpacity>

        {/* BOTÃO DE CADASTRO */}
        <TouchableOpacity
          style={styles.signupButton}
          onPress={handleSignUp}
        >
          <Text style={styles.signupButtonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.loginRedirect}
        >
          <View style={styles.loginRedirectTextContainer}>
            <Text style={styles.loginRedirectText}>Já tem uma conta?{" "}</Text>
            <Text style={styles.loginRedirectBoldText}>Faça login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#2BB459",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "relative",
  },
  image: {
    width: 230,
    height: 225,
    position: "absolute",
    top: "15%",
  },
  headerText: {
    color: "#f1f1f1",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: "15%",
  },
  inputContainer: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 30,
    marginVertical: 4,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    color: "black",
  },
  checkboxContainer: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    marginBottom: 2,
    paddingLeft: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#fff",
    marginRight: 8,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  checkboxText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  signupButton: {
    width: "90%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    marginBottom: 2,
    marginTop: 10,
  },
  signupButtonText: {
    color: "#479962",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginRedirect: {
    alignItems: "center",
    marginTop: 4,
  },
  loginRedirectTextContainer: {
    flexDirection: "row",
  },
  loginRedirectText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  loginRedirectBoldText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
});
