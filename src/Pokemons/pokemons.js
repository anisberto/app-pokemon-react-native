import React from "react";
import { View, Text, Button } from "react-native";
import BuscarPokemons from "../Busca/busca";

export default function ListagemPokemons({ navigation }) {
  return (

      <View style={{ flex: 1, alignItems: "center", paddingTop:10 }}>
        <BuscarPokemons />
      </View>

  );
}
