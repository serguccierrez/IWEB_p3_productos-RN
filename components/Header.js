import React from "react";
import { Text, SafeAreaView, Image, StyleSheet, ActivityIndicator } from "react-native";
import USER from "../user.json";

export default function Header() {


  return (
    <SafeAreaView testID="cabecera" style={styles.headerView}>
      <Image style={styles.image} testID="logo" source={require("../assets/icono.png")}/>
      <Text testID="mensaje" style={styles.texto}>Catálogo de {USER.name} </Text>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  headerView: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#007bff",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  image: {
    width: 40,
    height: 40,
  },
  texto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});