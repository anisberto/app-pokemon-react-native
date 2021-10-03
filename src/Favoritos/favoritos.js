import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native";


export default function PokemonsFavoritos({ navigation }) {
  return (
    <View>
      <Text>Ola</Text>
      <Text>Estes são seus Pokemons Favoritos</Text>
      <Button onPress={() => navigation.goBack()} title=":: Voltar ::" />
    </View>
  );
}
