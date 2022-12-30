import React from "react";
import { View,Text,SafeAreaView,FlatList,StyleSheet } from "react-native";
import products from './src/products.json'
import Card  from './src/components/Card'
const App = () => {
  console.log(products)
  return(
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={products}
        renderItem={({item}) => <Card products={item} />}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})

export default App