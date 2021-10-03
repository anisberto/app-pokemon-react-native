import React from "react";
import { View, Text, Button } from "react-native";
import { TextInput } from "react-native";
import { getAllPokemons, getPokemonByname } from "../functions/getPokemons";

export default function BuscarPokemons() {
  return (
    <>
      <View>
        <Text style={{ color: "#54A5FF", fontWeight: "bold", fontSize: 20 }}>
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
        <Button onPress={() => getAll()} title="BUSCAR" />
      </View>
    </>
  );
}

async function getAll() {
  var result = await getAllPokemons();
  console.info("Listando todos os Pokemons: ", { result });
}

async function getByName(nome) {
  // var result = await getPokemonByname('raticate');
  var result = await getPokemonByname(`${nome}`);
  console.info("Listando a busca por nome: ", { result });
}
