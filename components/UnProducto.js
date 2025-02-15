import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

export default function UnProducto(props) {
  const { producto } = props.route.params;

  return (
    <View style={styles.card}>
      <Image source={{ uri: producto.thumbnail }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text testID="detalle" style={styles.title}>
          {producto.title}
        </Text>
        <Text style={styles.price}>${producto.price}</Text>
        <Text style={styles.description}>{producto.description}</Text>
        <Text style={styles.rating}>⭐ {producto.rating} / 5</Text>
        <Text style={styles.stock}>Stock disponible: {producto.stock}</Text>
        <Text style={styles.brand}>Marca: {producto.brand}</Text>
        <Text style={styles.warranty}>
          Garantía: {producto.warrantyInformation}
        </Text>
        <Text style={styles.shipping}>
          Envío: {producto.shippingInformation}
        </Text>
        <Text style={styles.availability}>
          Disponibilidad: {producto.availabilityStatus}
        </Text>
      </View>
      <Button
        testID="volver"
        title="Volver"
        onPress={() => props.navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    margin: 20,
    marginTop: 70,
    marginBottom: 60,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 15,
  },
  infoContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  price: {
    fontSize: 18,
    color: "#888",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
    textAlign: "center",
  },
  rating: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  stock: {
    fontSize: 14,
    color: "#444",
    marginBottom: 10,
  },
  brand: {
    fontSize: 14,
    color: "#444",
    marginBottom: 10,
  },
  shipping: {
    fontSize: 14,
    color: "#444",
    marginBottom: 10,
  },
  availability: {
    fontSize: 14,
    color: "#444",
    marginBottom: 10,
  },
    warranty: {
        fontSize: 14,
        color: "#444",
        marginBottom: 10,
    },
});
