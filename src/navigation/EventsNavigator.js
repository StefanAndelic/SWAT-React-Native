import {createStackNavigator} from "@react-navigation/stack";
import React , {useState} from 'react';
import EventsScreen from "../screens/EventsScreen";
import SelectedEvent from "../screens/SelectedEvent";

const Stack = createStackNavigator();

const EventsFeedNavigator  = () => (
    <Stack.Navigator>
        <Stack.Screen name="Events" component={EventsScreen}  options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="SelectedEvent" component={SelectedEvent}  ></Stack.Screen>
    </Stack.Navigator>

)

export default EventsFeedNavigator;