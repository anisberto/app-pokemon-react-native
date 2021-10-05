import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  VirtualizedList,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native";

import {
  getAllPokemons,
  getPokemonById,
  getPokemonByname,
} from "../functions/getPokemons";


export default function BuscarPokemons() {
  const DATA = [];
  
  const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Pokemon: ${
      index + 1
    } \nAltura: 15\nPeso:25\nHabilidades: 3\nTipos: 2\nEstatísticas: 32`,
  });
  
  const getItemCount = (data) => 20;
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Button
        color="#3599D1"
        onPress={() => addFavorito(getItem().id)}
        title="Salvar Pokemon Favorito"
      />
    </View>
  );
  const [idpokemon, setidpokemon] = useState("");
  return (
    <>
      <View>
        <Text style={{ color: "#54A5FF", fontWeight: "bold", fontSize: 20 }}>
          Buscar Pokemons:
        </Text>
        <TextInput
          placeholder="Nome do Pokemon"
          onChangeText={(textNome) => {
            getByName(textNome);
          }}
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
      <SafeAreaView style={styles.container}>
        <VirtualizedList
          data={DATA}
          initialNumToRender={4}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.key}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </SafeAreaView>
    </>
  );

  async function addFavorito(item) {
    try {
<<<<<<< HEAD
      await AsyncStorage.setItem('idPokemon', item);
      alert("Pokemon salvo!");
      Keyboard.dismiss();

      console.log("Mais um item salvo como favorito....", await AsyncStorage.getItem('idPokemon'));
=======
      await AsyncStorage.setItem("IdPokemon", idpokemon);
      alert("Pokemon salvo!");
      Keyboard.dismiss();

      console.log("Mais um item salvo como favorito....", item);
>>>>>>> 9dc930450c61f74ee67fae596a459f890509f651
    } catch (error) {
      console.info(error.data);
    }
  }
}

async function getAll() {
  var result = await getAllPokemons();
  console.info(result);
}

async function getByName(nome) {
  // var result = await getPokemonByname('raticate');
  var result = await getPokemonByname(`${nome}`);
  console.info("Listando a busca por nome: ", { result });
}

async function getById(id) {
  // var result = await getPokemonById(7);
  var result = await getPokemonById(`${id}`);
  console.info("Listando a busca por nome: ", { result });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  item: {
    backgroundColor: "#355AD1",
    height: 280,
    justifyContent: "center",
    marginVertical: 8,
    width: 320,
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    color: "#fff",
  },
});
