import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import PokemonsFavoritos from './src/Favoritos/favoritos';
import ListagemPokemons from './src/Pokemons/pokemons';
import Sobre from './src/sobre/sobre';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Lista de Pokemons" component={ListagemPokemons} />
        <Drawer.Screen name="Pokemons Favoritos" component={PokemonsFavoritos} />
        <Drawer.Screen name="Sobre o Projeto" component={Sobre} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}