import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Fontisto';


export function ProfileScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <ScrollView>
        <Image
          className="'w-32 h-32 rounded-full bg-green items-center justify-center"
          source={{ uri: "URL_DA_FOTO_DE_PERFIL" }}
        />
        <View className="items-center justify-center">
          <Text className="text-xl font-bold mt-2">Nome do Usuário</Text>
          <Text className="text-gray-500">São Paulo, Brasil</Text>
        </View>

        <View className="mt-6">
          <View className="flex-row items-center bg-red-700 p-4">
            <Icon name="email" size={20} color="gray" className="mr-2" />
            <Text className="text-lg font-semibold">Informações Pessoais</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
