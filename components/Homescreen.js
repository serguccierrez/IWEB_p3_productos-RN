import { StatusBar } from "expo-status-bar";
import { StyleSheet,  ActivityIndicator, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import Header from "./Header";
import SearchPage from "./SearchPage.js";
import CONFIG from "./config/config.js";
import { mockdata } from "./constants/products.js";


export default function Homescreen(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  async function fetchProducts() {
    try {
      if (CONFIG.use_server) {
        const url = `${CONFIG.server_url}?limit=${CONFIG.num_items}`;
        const response = await fetch(url);
        const dataProducts = await response.json();
        setData(dataProducts);
      } else {
        setData(mockdata);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, CONFIG.loading_timeout_ms);
    fetchProducts();
  }, []);

  return (
    
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          testID="loading"
          size="large"
          color="lightblue"
          style={styles.loading}
        />
      ) : (
        <>
          <StatusBar style="auto" />
          <Header />
          <SearchPage theproducts={data.products} navigation={props.navigation} />
        </>
      )}
    </SafeAreaView>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  loading: {
    marginTop: 300,
  },
});