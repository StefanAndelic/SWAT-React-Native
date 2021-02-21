import React from 'react';
import { View, StyleSheet  } from 'react-native';
import AppText from "./AppText";
import {useNetInfo} from "@react-native-community/netinfo";
import Constants from 'expo-constants'

function  NetworkError (props){
    const  netInfo = useNetInfo();

    if(netInfo.type !== "unknown" && netInfo.isInternetReachable === false){
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>Network Error! No internet connection</AppText>
            </View>
        )
    }

    return  null;

};

const styles = StyleSheet.create({
    container:{
        backgroundColor:"red",
        height:60,
        width:"100%",
        borderWidth:2,
        borderColor:"black",
        justifyContent:"center",
        alignItems:"center",
        zIndex:1,
        top: Constants.statusBarHeight,
    },
    text:{
        fontSize:16,
        fontWeight:"500",

    }
});

export default NetworkError;