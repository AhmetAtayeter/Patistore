import React from "react";
import { View, Text, Image } from "react-native";
import styles from './Card.style'

const Card = ({products}) => {
    return(
        
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: products.imgURL}}></Image>
            <Text style={styles.title}>
                {products.title}
            </Text>
            <Text style={styles.price}>
                {products.price}
            </Text>
            {products.inStock ? <View/> : <Text style={styles.inStock}>STOKTA YOK</Text>}
            {/* <Text>
                {products.inStock ? '' : 'STOKTA YOK'}
            </Text> */}
        </View>
    )
}

export default Card