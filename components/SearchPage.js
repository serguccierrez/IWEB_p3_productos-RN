import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import Producto from "./Producto";
import { useState } from "react";

export default function SearchPage(props) {
  const productos = props.theproducts;

  const [input, setInput] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState([]);

 const navigation = props.navigation;
 

  // Función para filtrar productos por texto
  function filterProducts(array, text) {
    let filt_array = array.filter((el_producto) =>
      el_producto.title.toLowerCase().includes(text.toLowerCase())
    );

    setProductosFiltrados(filt_array);
  }

  function aux_filter() {
    filterProducts(productos, input);
  }

  return (
    <>
      <SafeAreaView style={styles.formulario}>
        <Text testID="catalogo" style={styles.texto}>
          Catálogo
        </Text>
        <TextInput
          testID="filtro"
          onChangeText={setInput}
          value={input}
          style={styles.input}
          placeholder="Buscar"
        />
        <Button testID="buscador" onPress={aux_filter} title="Buscar" />
      </SafeAreaView>

      <SafeAreaView>
        {productosFiltrados.length > 0 ? (
          <FlatList
            data={productosFiltrados}
            renderItem={({ item }) => <Producto unProducto={item} navigation={navigation} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <FlatList
            data={productos}
            renderItem={({ item }) => (
              <Producto unProducto={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 190 }}
          />
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  formulario: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 1.5,
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowOffset: { height: 2 },
    shadowOpacity: 0.2,
  },
  input: {
    flex: 1,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
});
