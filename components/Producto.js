import React from "react";
import { View, Text, Image,Button, StyleSheet } from "react-native";

export default function Producto(props) {
  const unProducto = props.unProducto;
  

  return (
    <View testID={`item_${unProducto.id}`}  style={styles.producto}>
      <Text testID={`title_${unProducto.id}`} style={styles.nombre}>{unProducto.title}</Text>
      <Image source={{uri: unProducto.thumbnail}} style={styles.image}></Image>
      <Button testID={`button_${unProducto.id}`} title="Ver"  onPress={() => props.navigation.navigate('UnProducto', { producto: unProducto })}/>
    </View>
  );
}


const styles = StyleSheet.create({
  producto: {
    width: 400,
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});