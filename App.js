import React from "react";
import { View,Text,SafeAreaView,FlatList } from "react-native";
import { Products } from './src/products.json'
const App = () => {

  return(
    <SafeAreaView>
      <FlatList data={Products}>
          <Text>{Products.id}</Text>
      </FlatList>
    </SafeAreaView>
  )
}

export default App