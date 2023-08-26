import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 items-center justify-start">

        {/* Container com a imagem */}
        <View className="w-full h-[30%] items-center bg-[#2BB459] relative">
          <Text className="text-[#f1f1f1] font-bold text-2xl mt-10">
            Bem-Vindo
          </Text>
          <Image
            source={require("../../../assets/illustrations/pharmacist.png")}
            className="w-[250px] h-[230px] absolute top-[50%] bottom-0 animate-pulse"
          />
        </View>

        <View className="flex-row w-10/12 items-center border-green-500 border rounded-3xl mt-[40%] mb-4 px-3">
          <MaterialIcons name="person-outline" size={20} color="#2BB459" />
          <TextInput
            className="flex-1 h-12 pl-2 text-black"
            placeholder="Nome de usuário"
            placeholderTextColor="#479962"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View className="flex-row w-10/12 items-center border-green-500 border rounded-3xl mb-4 px-3">
          <MaterialIcons name="lock-outline" size={20} color="#2BB459" />
          <TextInput
            className="flex-1 h-12 pl-2 text-black"
            placeholder="Senha"
            placeholderTextColor="#479962"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <MaterialIcons
              name={showPassword ? "visibility-off" : "visibility"}
              size={20}
              color="#2BB459"
            />
          </TouchableOpacity>
        </View>

        {/* BOTÃO DE TEXTO PARA FORGOTPASS */}
        <TouchableOpacity
          className="w-9/12 items-end"
          onPress={() => console.log("Esqueci minha senha")}
        >
          <Text className="text-[#479962] font-semibold text-xs mb-6">
            Esqueceu a senha
          </Text>
        </TouchableOpacity>

        {/* BOTÃO DE ENTRAR, MANDA PARA ROTA DE NAVEGAÇÃO SENDO NECESSÁRIO INTEGRAÇÃO */}
        <TouchableOpacity
          className="w-10/12 h-10 items-center justify-center bg-[#2BB459] rounded-3xl mb-2 mt-3"
          /* onPress={handleLogin} */
          onPress={() => navigation.navigate("Tabs")}
        >
          <Text className="text-white font-bold text-lg">Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          className="items-center mt-4"
        >
          <View className="flex-row">
            <Text className="text-[#479962] font-semibold text-xs mr-2">
              Não tem uma conta?
            </Text>
            <Text className="text-[#479962] font-bold text-xs">
              Cadastre-se
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}