import React from 'react';
import {StyleSheet,Text} from 'react-native';



function AppText({children,style,...otherProps}){
    return(
        <Text style={style}{... otherProps}>{children}</Text>
    );
}

const styles = StyleSheet.create({

    text:{
        fontSize:17,
    }



});

export default AppText;