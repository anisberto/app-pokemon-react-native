import React from "react";
import { View, Text, Button } from "react-native";

export default function ListagemPokemons({ navigation }) {
  return (
    <>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>Listagem de Pokemons</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          onPress={() => navigation.navigate("Notifications")}
          title="BUSCAR"
        />
      </View>
    </>
  );
}
