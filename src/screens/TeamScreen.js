import React from 'react';
import {StyleSheet,FlatList} from 'react-native';

import TeamListItem from "../components/TeamListItem";
import Screen from "../components/Screen";

const team = [
    {
        id:1,
        image: require("../assets/images/profilepicture.png"),
        name:"N",
        hobby:"Watching movies",
        major:"Health",
        language:"Te Reo Maori",
        position:"Team Leader",
        text:"In my view mental health awareness  helps everyone to realize the many ways in which mental illness could affect our lives, and it is a prviledge to work as a  Bubble leader on addressing these important health and wellbeing aspects. Also, I look forward to meeting and participating with all of you in SWAT.",


    },
    {
        id:2,
        image: require("../assets/images/profilepicture.png"),
        name:"J",
        hobby:"Drawing",
        major:"Psychology and Japanese",
        position:"Assistant",
        language:"Japanese",
        text:"In my view mental health awareness  helps everyone to realize the many ways in which mental illness could affect our lives, and it is a prviledge to work as a  Bubble leader on addressing these important health and wellbeing aspects. Also, I look forward to meeting and participating with all of you in SWAT.",

    },
    {
        id:3,
        image: require("../assets/images/profilepicture.png"),
        name:"S",
        hobby:"Blogging",
        major:"Commerce",
        position:"Assistant",
        language:"French",
        text:"In my view mental health awareness  helps everyone to realize the many ways in which mental illness could affect our lives, and it is a prviledge to work as a  Bubble leader on addressing these important health and wellbeing aspects. Also, I look forward to meeting and participating with all of you in SWAT.",

    },
    {
        id:4,
        image: require("../assets/images/profilepicture.png"),
        name:"K",
        hobby:"Accounting",
        position:"Volunteer",
        major:"Health",
        language:"English,Te Reo Maori",
        text:"In my view mental health awareness  helps everyone to realize the many ways in which mental illness could affect our lives, and it is a prviledge to work as a  Bubble leader on addressing these important health and wellbeing aspects. Also, I look forward to meeting and participating with all of you in SWAT.",

    },



];


function TeamScreen({navigation}) {
    return (

        <Screen style={styles.container}>
            <FlatList
                data={team}
                keyExtractor={team => team.id.toString()}
                renderItem={({item}) =>
                    <TeamListItem
                        image={item.image}
                        name={item.name}
                        hobby = {item.hobby}
                        major = {item.major}
                        text = {item.text}
                        position = {item.position}
                        onPress={() => navigation.navigate("SWATLeader",item)}
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

export default TeamScreen;