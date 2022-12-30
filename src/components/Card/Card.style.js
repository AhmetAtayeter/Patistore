import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor: '#eceff1',
        width: Dimensions.get('window').width / 2,
        margin: 10
    },
    image:{
        // width: Dimensions.get('window').width / 2,
        margin: 10,
        height: Dimensions.get('window').height / 2.5
    },
})