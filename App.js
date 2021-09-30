import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeListPokemon from "./src/pages/pokemons/listPokemons";

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Search your favorite Pokemon</Text>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={HomeListPokemon} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
    fontSize: 100,
  },
});
