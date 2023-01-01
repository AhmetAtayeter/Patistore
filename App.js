import React from "react";
import { View,Text,SafeAreaView,FlatList,StyleSheet,TextInput, Dimensions } from "react-native";
import products from './src/products.json'
import Card  from './src/components/Card'
const App = () => {
  console.log(products)
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput style={styles.input} placeholder="Ara..."></TextInput>
      <FlatList 
      numColumns={2}
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
  },
  input: {
    width: "96%",
    backgroundColor: '#eceff1',
    margin: 10,
    height: "6%",
    borderRadius: 5,
    padding: 10
  },
  title:{
    fontSize: 30,
    color: 'purple',
    margin: 10,
    fontWeight: 'bold'
  }
})

export default App