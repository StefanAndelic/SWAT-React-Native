import React,{useState, useEffect} from 'react';
import {StyleSheet, FlatList,Alert} from 'react-native';
import EventListItem from "../components/EventListItem";
import Screen from "../components/Screen";
import events_endpoint from "../api/events_endpoint";


function EventsScreen({navigation}) {

    const [events,setEvents] = useState([]);

    useEffect(() => {

        loadEvents();

    }, []);

    const loadEvents = async () => {

        try {
       
            const response = await events_endpoint.getEvents();
            setEvents(response.data);
            
        } catch (error) {
            console.log(error);
            Alert.alert(response.data)
        }
       
    }

    return (

        <Screen style={styles.container}>
            <FlatList
                data={events}
                keyExtractor={events => events._id}  
                renderItem={({item}) =>
                    <EventListItem
                        image={item.image}
                        name={item.name}
                        time={item.time}
                        date={item.date}
                        duration={item.duration}
                        onPress={() => navigation.navigate("SelectedEvent",item)}  //go to selected event
                    />
                }

            />
        </Screen>

    );
}




const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        flex:1,

    },

});

export default EventsScreen;