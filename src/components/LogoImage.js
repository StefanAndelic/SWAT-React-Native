import React from 'react';
import { View, Image, StyleSheet,TouchableWithoutFeedback} from 'react-native';


function LogoImage({image,onPress}) {
    return (
        <View>
        <TouchableWithoutFeedback onPress={onPress }>
           <Image style = {styles.logo} source = {image}/>
        </TouchableWithoutFeedback>
      </View>
    );
}

const styles = StyleSheet.create({

    logo: {
        width: 150,
        height: 150,
        alignSelf:'center',
        marginTop:40,
        marginBottom: 50,

    },
});

export default LogoImage;