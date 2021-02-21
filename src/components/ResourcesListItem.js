import React from 'react';
import {StyleSheet,TouchableWithoutFeedback,Image,View} from 'react-native';


function ResourcesListItem({image,onPress,url}) {
    return (
        <View style={styles.resource_container}>
            <TouchableWithoutFeedback onPress={onPress}>
                <Image
                    style = {styles.image}
                    resizeMode = "contain"
                    source = {image}
                    url={url}/>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    resource_container: {
        padding:5,
        margin:5,
    },
    image:{
        width:"100%",
        height:200,
        borderWidth:4,
        borderColor:"grey"
    },
});

export default ResourcesListItem;