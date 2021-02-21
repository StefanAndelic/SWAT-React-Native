import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';

function SignUpAppText({onPress}) {
    return (

        <View style={{flexDirection:"row"}}>
            <AppText style={styles.text}>Don't have an account?</AppText>
            <TouchableOpacity onPress={onPress}>
                <AppText style={styles.text1}>Sign up</AppText>
            </TouchableOpacity>
        </View>


    );
}

const styles = StyleSheet.create({

    text:{

        marginTop:5,
        marginHorizontal:10,
        fontSize:20,
        marginLeft:43,
        color:"black",

    },
    text1:{
        marginTop:5,
        marginLeft:-5,
        fontSize:20,
        color:"green",

    }
});

export default SignUpAppText;