import React from "react";
import { View, Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function BuscarPokemons() {
  return (
    <>
      <View>
        <Text style={{fontWeight: "bold", fontSize: 20}}>
          Buscar Pokemons: 
        </Text>
        <TextInput
          style={{
            height: 30,
            width: 320,
            borderColor: "blue",
            borderWidth: 1,
            marginTop: 10,
            marginBottom: 10,
          }}
        />
        <Button
          onPress={() => console.info("Estou buscando.....")}
          title="BUSCAR"
        />
      </View>
    </>
  );
}
