import React from 'react';
import {StyleSheet, Image,ScrollView } from 'react-native';

import AppText from '../components/AppText';
import Screen from "../components/Screen";

function SWATLeaderProfile({route}) {

    const team = route.params;

    return (

        <Screen style={styles.container}>
            <ScrollView>
                <Image style={styles.profilePicture} source={team.image}/>
                <AppText style={styles.Language}>Language:{team.language}</AppText>
                <AppText style={styles.Hobbies}>Hobbies:{team.hobby}</AppText>
                <AppText style={styles.About}>{team.text}</AppText>
            </ScrollView>
        </Screen>

    );
}

const styles = StyleSheet.create({
    container: {
        padding:30,
        backgroundColor:"white"

    },
    profilePicture:{
        marginLeft:75,
        width:150,
        height:150,
        borderWidth:3,
        borderRadius:64,
    },
    Language:{
        fontSize:20,
        marginTop:90,
        fontWeight:"500",
    },
    Hobbies:{
        fontSize:20,
        marginTop:90,
        fontWeight:"500",
    },
    About:{
        fontSize:15,
        marginRight:10,
        marginTop:90,
        textAlign:"justify",
        lineHeight:23,

    }

});

export default SWATLeaderProfile;