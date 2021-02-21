import React from 'react';
import {StyleSheet } from 'react-native';

import Screen from "../components/Screen";
import AppText from '../components/AppText';

function SelectedEventScreen({route}) {
    const events = route.params;
    return (
        <Screen style={styles.container}>
            <AppText style={styles.event_name}>{events.name}</AppText>
            <AppText style={styles.event_time}>{events.duration}</AppText>
            <AppText style={styles.event_description}>{events.description}</AppText>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",

    },
    event_name:{
        marginTop:10,
        fontSize:20,
        marginBottom:80,
       
    },
    event_time:{
        marginBottom:100,
        fontSize:20,
    
    },
    event_description:{
        marginBottom:60,
        textAlign:"justify",
        fontSize:18,
        lineHeight:18,
    },
    bookButton:{
        marginLeft:30,
    }

});

export default SelectedEventScreen;