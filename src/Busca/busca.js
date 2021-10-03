import React from "react";
import { View, Text, Button } from "react-native";
import { TextInput } from "react-native";

export default function BuscarPokemons() {
  return (
    <>
      <View>
        <Text
          style={{ color: "#54A5FF", fontWeight: "bold", fontSize: 20 }}
        >
          Buscar Pokemons:
        </Text>
        <TextInput
          style={{
            height: 35,
            width: 320,
            padding: 10,
            borderColor: "#50A5FF",
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
