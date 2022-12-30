import React from "react";
import { View, Text, Image } from "react-native";
import styles from './Card.style'

const Card = ({products}) => {
    return(
        
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: products.imgURL}}></Image>
            <Text>
                {products.title}
            </Text>
        </View>
    )
}

export default Card