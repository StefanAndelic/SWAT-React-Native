import {createStackNavigator} from "@react-navigation/stack";
import React from 'react';
import {View} from 'react-native';
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import AppNavigator from "./AppNavigator";


const Stack = createStackNavigator();

const AuthNavigator  = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} ></Stack.Screen>
            <Stack.Screen name="Register" component={SignUpScreen}  ></Stack.Screen>
            <Stack.Screen name="Main" component={AppNavigator}></Stack.Screen>
        </Stack.Navigator>

    )
}

export default AuthNavigator;


