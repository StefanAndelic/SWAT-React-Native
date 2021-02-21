import React from 'react';
import {StyleSheet,SafeAreaView,View} from 'react-native';

function Screen ({children}){
    return(
        <SafeAreaView style={styles.screen}>
        <View >
            {children}
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    screen:{
        backgroundColor:"white",
        flex:1,
    },



});

export default Screen;