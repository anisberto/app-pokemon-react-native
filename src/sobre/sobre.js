import React from "react";
import { View, Text, Button } from "react-native";

export default function Sobre({ navigation }) {
  return (
    <>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20, paddingTop: 50 }}>
          App pokemon React Native
        </Text>
        <Text style={{ paddingTop: 10 }}>
          Projeto desenvolvido para composição da nota de N1.
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 20, paddingTop: 20 }}>
          Alunos:{" "}
        </Text>
        <Text style={{ fontSize: 15, paddingTop: 10 }}>Anisberto dos Reis</Text>
        <Text style={{ fontSize: 15, paddingTop: 10 }}>Jhonathan dos Reis</Text>
        <Text style={{ fontSize: 15, paddingTop: 10 }}>Gustavo Gabriel</Text>
        <Text style={{ fontSize: 15, paddingTop: 10, paddingBottom:100 }}>Miguel Neto.</Text>
        <Button onPress={() => navigation.goBack()} title=":: Voltar ::" />
        <Text style={{ fontSize: 20, paddingTop: 150 }}>
          Analise e Desenvolvimento de Sistemas
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 20, paddingTop: 10 }}>
          SENAI FATESG
        </Text>
      </View>
    </>
  );
}
