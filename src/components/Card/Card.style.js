import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor: '#eceff1',
        margin: 10,
        borderRadius: 5,
        flex: 1
    },
    image:{
        margin: 10,
        height: Dimensions.get('window').height / 4,
        borderRadius: 5,
        resizeMode: 'stretch'
    },
    title: {
        fontWeight: 'bold',
        marginLeft: 10
    },
    price: {
        marginLeft: 10,
        alignItems: 'flex-end',
        color: '#939394',
        fontWeight: 'bold'
    },
    inStock: {
        color: 'red',
        marginLeft: 10,
        fontWeight: 'bold'
    }
})