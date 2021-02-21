import React from 'react';
import { View,StyleSheet,Image,TouchableWithoutFeedback} from 'react-native';

import AppText from "./AppText";

//image

function EventListItem({image,name,time,date,duration,description,onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.event_container}>
                <Image style={styles.image} source={{uri:image}} resizeMode = "contain"/>
                <View>
                    <AppText style={styles.name}>{name}</AppText>
                    <AppText style={styles.time}>{time}</AppText>
                    <AppText style={styles.date}>{date}</AppText>
                    <AppText style={styles.duration}>{duration}</AppText>
                    <AppText>{description}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    event_container: {
        backgroundColor:"white",
        flexDirection:"row",
        borderWidth:2,
        borderColor:"grey",
        margin:10,//space between components
        overflow:"visible",
        shadowColor:"grey",
        shadowOffset:{width:0, height:5},
        shadowOpacity:1,


    },
    image:{
        width:110,
        height:110,
        borderRadius:90,
        marginRight:15,
        marginLeft:10,
        marginTop:20,

    },
    name:{
        marginLeft:50,
        fontSize:20,
        margin:7,
    },
    time:{
        marginLeft:50,
        fontSize:17,
        margin:7,
    },
    date:{
        marginLeft:50,
        fontSize:17,
        margin:7,
    },
    duration:{
        marginLeft:50,
        fontSize:17,
        margin:5,
    }
});

export default EventListItem;