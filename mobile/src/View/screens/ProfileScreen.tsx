import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import * as ImagePicker from "expo-image-picker";

export function ProfileScreen({ navigation }) {
  const [sex, setSex] = useState("feminino");

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="flex-1 items-center bg-white">
      <View className="bg-[#1F9A55] border-[#1F9A55] border-2 w-28 h-28 items-center justify-center mt-[10%] rounded-full">
        {image ? (
          <Image source={{ uri: image }} className="w-28 h-28 rounded-full" />
        ) : (
          <View className="items-center justify-center">
            <Icon name="person" size={60} color="white" />
          </View>
        )}
      </View>

      <TouchableOpacity
        className="ml-20 items-center justify-center"
        onPress={pickImage}
      >
        <SimpleIcon name="arrow-up-circle" size={18} color="#9E9EA0" />
      </TouchableOpacity>

      <View className="items-center justify-center">
        <Text className="text-xl font-bold">Nome do Usuário</Text>
        <Text className="text-gray-500">São Paulo, Brasil</Text>
      </View>

      <View className="w-full mt-6">
        <View className="flex-row items-center justify-start pl-4 pr-4 mt-4">
          <Icon name="email" size={23} color="#9E9EA0" className="mr-2" />
          <Text className="text-base ml-3 text-[#9E9EA0]">email@gmail.com</Text>
        </View>
        <View className="flex-row items-center justify-start pl-4 pr-4 mt-4">
          <Icon name="date" size={23} color="#9E9EA0" className="mr-2" />
          <Text className="text-base ml-3 text-[#9E9EA0]">13/09/2009</Text>
        </View>

        {sex === "masculino" ? (
          <View className="flex-row items-center justify-start pl-4 pr-4 mt-4">
            <SimpleIcon
              name="symbol-male"
              size={23}
              color="#9E9EA0"
              className="mr-2"
            />
            <Text className="text-base ml-3 text-[#9E9EA0]">Masculino</Text>
          </View>
        ) : (
          <View className="flex-row items-center justify-start pl-4 pr-4 mt-4">
            <SimpleIcon
              name="symbol-female"
              size={23}
              color="#9E9EA0"
              classname="mr-2"
            />
            <Text className="text-base ml-3 text-[#9E9EA0]">Feminino</Text>
          </View>
        )}

        {/* BOTÃO DE CONFIGURAÇÕES */}
        <TouchableOpacity
          className="flex-row items-center justify-start mt-8 pt-6 pl-4 pr-4 border-t-[1px] border-[#EAEAEA]"
          onPress={() => {
            console.log("Settings pressed!");
          }}
        >
          <Icon
            name="player-settings"
            size={23}
            color="#479962"
            className="mr-2"
          />
          <Text className="text-base font-bold ml-3 text-[#479962]">
            Configurações
          </Text>
        </TouchableOpacity>

        {/* BOTÃO REDEFINIR A SENHA */}
        <TouchableOpacity
          className="flex-row items-center justify-start mt-6 pt-6 pl-4 pr-4 border-t-[1px] border-[#EAEAEA]"
          onPress={() => {
            console.log("Redefinir pressed!");
          }}
        >
          <Icon name="locked" size={23} color="#727275" className="mr-2" />
          <Text className="text-base font-bold ml-3 text-[#727275]">
            Redefinir senha
          </Text>
        </TouchableOpacity>

        {/* bOTÃO DE LOGOUT */}
        <TouchableOpacity
          className="flex-row items-center justify-start mt-6 pt-6 pl-4 pr-4 border-t-[1px] border-[#EAEAEA]"
          onPress={() => {
            console.log("Logout pressed!");
          }}
        >
          <Icon name="power" size={23} color="#FF183F" className="mr-2" />
          <Text className="text-base font-bold ml-3 text-[#FF183F]">
            Redefinir senha
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
