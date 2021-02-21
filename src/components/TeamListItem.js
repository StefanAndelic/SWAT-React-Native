import React from 'react';
import { View, StyleSheet , Image,Text,TouchableWithoutFeedback} from 'react-native';
import AppText from "./AppText";

function TeamListItem({image,hobby,major,name,language,text,position,onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={image} resizeMode = "contain"/>
                <View>
                    <AppText style={styles.name}>{name}</AppText>
                    <AppText style={styles.major}>{major}</AppText>
                    <AppText style={styles.position}>{position}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>


    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        flexDirection:"row",
        borderWidth:3,
        borderColor:"grey",
        margin:10,////space between components
    },
    image:{
        width:100,
        height:100,
        borderRadius:90,
        marginRight:10,
        marginLeft:10,
        marginTop:10,
        marginBottom:10,

    },
    name:{
        marginLeft:5,
        fontSize:20,
        margin:8,
    },
    hobby:{
        marginLeft:5,
        fontSize:17,
    },
    major:{
        marginLeft:6,
        fontSize:17,
        margin:8,
    },
    position:{
        marginLeft:5,
        fontSize:17,
        margin:8,
    }
});

export default TeamListItem;