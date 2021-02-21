import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';


function Placeholder({placeholder,...otherProps}) {
    return (
        <View style={styles.container}>

            <TextInput  placeholder={placeholder}{... otherProps}></TextInput>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f8f4f4",
        borderRadius:25,
        flexDirection:"row",
        width:'100%',
        padding:15,
        marginVertical:10,
    }
});

export default Placeholder;