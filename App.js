import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeListPokemon from "./src/pages/pokemons/listPokemons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search Pokemons" component={HomeListPokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
