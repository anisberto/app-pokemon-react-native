import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  VirtualizedList,
  StyleSheet,
  Button,
} from "react-native";

const DATA = [];

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Pokemon: ${
    index + 1
  } \nAltura: \nPeso: \nHabilidades: \nTipos: \nEstatísticas: `,
});

const getItemCount = (data) => 10;

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function PokemonsFavoritos({ navigation }) {
  return (
    <>
      <View style={{ padding: 15 }}>
        <Text
          style={{
            justifyContent: "center",
            fontSize: 20,
            alignItems: "center",
            paddingBottom: 20,
            paddingLeft: 30,
            color: "#54A5FF",
            fontWeight: "bold"
          }}
        >
          Estes são seus Pokemons Favoritos
        </Text>
        <Button onPress={() => navigation.goBack()} title=":: Voltar ::" />
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#29338F",
    height: 250,
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
    marginBottom: 20,
    borderRadius:20
  },
  title: {
    fontSize: 32,
    color: "#fff",
  },
});
