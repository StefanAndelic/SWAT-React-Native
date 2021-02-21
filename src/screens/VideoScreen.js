import React from 'react';
import {StyleSheet } from 'react-native';

import { Video } from 'expo-av';
import SWAT from "../assets/videos/StudentWellbeingAwarenessTeam.mp4";
import Screen from "../components/Screen";


function VideoScreen(props) {
    return (

        <Screen style={styles.container}>
            <Video
                source={SWAT}
                //rate={1.0}
                volume={1.0}
                isMuted={true}
                resizeMode="contain"
                shouldPlay
                useNativeControls={true}
                style={{ width: 390, height: 700 }}
            />
        </Screen>



    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"white"

    }
});

export default VideoScreen;