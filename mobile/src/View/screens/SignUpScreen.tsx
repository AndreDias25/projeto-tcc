import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import CheckBox from "react-native-checkbox";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";

export function SignUpScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] =
    useState(false);

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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 items-center justify-start  bg-[#2BB459]">
        {/* Campos de Cadastro */}
        <View className="w-full h-[30%] items-center bg-[#fff] relative">
          <Image
            source={require("../../../assets/illustrations/sign-up.png")}
            className="w-[230px] h-[225px] absolute top-[15%] bottom-0 animate-pulse"
          />
        </View>

        <Text className="text-[#f1f1f1] font-bold text-2xl mt-[15%]">
          {isNameFocused ||
          isEmailFocused ||
          isPasswordFocused ||
          isConfirmPasswordFocused
            ? ""
            : "Cadastre-se"}
        </Text>

        <View className="flex-row w-10/12 items-center border-white border rounded-3xl mt-[5%] mb-4 px-3">
          <MaterialIcons name="person-outline" size={20} color="#fff" />
          <TextInput
            className="flex-1 h-9 pl-2 text-black"
            placeholder="Nome"
            placeholderTextColor="#fff"
            value={name}
            onChangeText={setName}
            onFocus={() => setIsNameFocused(true)}
            onBlur={() => setIsNameFocused(false)}
          />
        </View>

        <View className="flex-row w-10/12 items-center border-white border rounded-3xl mb-4 px-3">
          <MaterialIcons name="mail-outline" size={20} color="#fff" />
          <TextInput
            className="flex-1 h-9 pl-2 text-black"
            placeholder="Email"
            placeholderTextColor="#fff"
            value={email}
            onChangeText={setEmail}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
        </View>

        <View className="flex-row w-10/12 items-center border-white border rounded-3xl mb-4 px-3">
          <MaterialIcons name="lock-outline" size={20} color="#fff" />
          <TextInput
            className="flex-1 h-9 pl-2 text-black"
            placeholder="Senha"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
          />
        </View>

        <View className="flex-row w-10/12 items-center border-white border rounded-3xl mb-4 px-3">
          <MaterialIcons name="lock-outline" size={20} color="#fff" />
          <TextInput
            className="flex-1 h-9 pl-2 text-black"
            placeholder="Repetir Senha"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            onFocus={() => setIsConfirmPasswordFocused(true)}
            onBlur={() => setIsConfirmPasswordFocused(false)}
          />
        </View>

        {/* CHECKBOX */}
        <TouchableOpacity
          className="flex-row w-10/12 items-center mb-2 pl-3"
          onPress={toggleCheckBox}
        >
          <View
            style={{
              width: 20,
              height: 20,
              borderWidth: 2,
              borderColor: "#fff",
              backgroundColor: isChecked ? "#fff" : "transparent",
              marginRight: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isChecked && (
              <MaterialIcons name="check" size={16} color="#2BB459" />
            )}
          </View>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 14 }}>
            Eu li e concordo com os termos
          </Text>
        </TouchableOpacity>

        {/* BOTÃO DE CADASTRO */}
        <TouchableOpacity
          className="w-10/12 h-10 items-center justify-center bg-[#fff] rounded-3xl mb-2 mt-3"
          onPress={handleSignUp}
        >
          <Text className="text-[#479962] font-bold text-lg">Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="items-center mt-4"
        >
          <View className="flex-row">
            <Text className="text-[#fff] font-semibold text-sm">
              Já tem uma conta?{" "}
            </Text>
            <Text className="text-[#fff] font-bold text-sm">Faça login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
