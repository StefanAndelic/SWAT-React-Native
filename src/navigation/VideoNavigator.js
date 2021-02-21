import {createStackNavigator} from "@react-navigation/stack";
import React  from 'react';

import Home from "../screens/HomeScreen";
import Video from "../screens/VideoScreen";

const Stack = createStackNavigator();

const VideoNavigator  = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Video" component={Video} ></Stack.Screen>
    </Stack.Navigator>


)

export default VideoNavigator;