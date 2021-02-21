import React from 'react';
import {StyleSheet,Text, TouchableOpacity } from 'react-native';

function Button({title,onPress}) {
    return (


        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>



    );
}

const styles = StyleSheet.create({
    container: {

        justifyContent:"center",
        alignItems:"center",
        flex:1,

    },
    text:{
        color: "white",
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    button:{
        backgroundColor: "green",
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 15,
    },

});

export default Button;