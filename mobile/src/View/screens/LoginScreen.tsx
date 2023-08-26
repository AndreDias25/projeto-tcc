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
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";

export function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        {/* Container com a imagem */}
        <View style={styles.imageContainer}>
          <Text style={styles.welcomeText}>Bem-Vindo</Text>
          <View style={styles.imageSpacer} />
          <Image
            source={require("../../../assets/illustrations/pharmacist.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <MaterialIcons name="person-outline" size={20} color="#2BB459" />
            <TextInput
              style={styles.input}
              placeholder="Nome de usuário"
              placeholderTextColor="#479962"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialIcons name="lock-outline" size={20} color="#2BB459" />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#479962"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <MaterialIcons
                name={showPassword ? "visibility" : "visibility-off"}
                size={20}
                color="#2BB459"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* BOTÃO DE TEXTO PARA FORGOTPASS */}
        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={() => console.log("Esqueci minha senha")}
        >
          <Text style={styles.forgotPasswordText}>Esqueceu a senha</Text>
        </TouchableOpacity>

        {/* BOTÃO DE ENTRAR, MANDA PARA ROTA DE NAVEGAÇÃO SENDO NECESSÁRIO INTEGRAÇÃO */}
        <TouchableOpacity
          style={styles.loginButton}
          /* onPress={handleLogin} */
          onPress={() => navigation.navigate("Tabs")}
        >
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          style={styles.signupButton}
        >
          <View style={styles.signupTextContainer}>
            <Text style={styles.signupText}>Não tem uma conta?</Text>
            <Text style={styles.signupBoldText}>Cadastre-se</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imageContainer: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    backgroundColor: "#2BB459",
    justifyContent: "center",
    position: "relative",
  },
  imageSpacer: {
    height: 70,
  },
  welcomeText: {
    color: "#f1f1f1",
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 250,
    height: 230,
    position: "absolute",
    top: "50%",
    bottom: 0,
  },
  formContainer: {
    paddingTop: "40%",
  },
  inputContainer: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    borderColor: "#2BB459",
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
  forgotPasswordButton: {
    width: "90%",
    alignItems: "flex-end",
    marginTop: 6,
  },
  forgotPasswordText: {
    color: "#479962",
    fontWeight: "bold",
    fontSize: 12,
  },
  loginButton: {
    width: "90%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2BB459",
    borderRadius: 30,
    marginTop: "5%",
    marginBottom: 2,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  signupButton: {
    alignItems: "center",
    marginTop: "6%",
  },
  signupTextContainer: {
    flexDirection: "row",
  },
  signupText: {
    color: "#479962",
    fontWeight: "bold",
    fontSize: 12,
    marginRight: 2,
  },
  signupBoldText: {
    color: "#479962",
    fontWeight: "bold",
    fontSize: 12,
  },
});
