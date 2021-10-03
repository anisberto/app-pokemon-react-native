import React from "react";
import { View, Text, Button } from "react-native";
import BuscarPokemons from "../Busca/busca";

export default function ListagemPokemons({ navigation }) {
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", paddingTop:30 }}>
        <BuscarPokemons />
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
