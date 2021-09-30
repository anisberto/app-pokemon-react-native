import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeListPokemon() {
  return (
    <View style={styles.container}>
      <Text>Here we are print the pokemons from API!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
