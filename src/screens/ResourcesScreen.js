import React from 'react';
import {Alert, FlatList, Linking, StyleSheet} from 'react-native';

import ResourcesListItem from '../components/ResourcesListItem';
import Screen from "../components/Screen";

const resources = [
    {
        id:1,
        image: require("../assets/images/mind.jpg"), 
        url:"https://www.wgtn.ac.nz/students/campus/health/wellbeing/fuel",
    },
    {
        id:2,
        image: require("../assets/images/life.jpg"),
        url:"https://www.wgtn.ac.nz/students/campus/health/wellbeing/managing-your-wellbeing",
    },
    {
        id:3,
        image: require("../assets/images/money.jpg"), 
        url:"https://www.wgtn.ac.nz/students/campus/health/wellbeing/money",
    },
    {
        id:4,
        image: require("../assets/images/pressure.jpg"),
        url:"https://www.wgtn.ac.nz/students/campus/health/wellbeing/pressure",
    },
    {
        id:5,
        image: require("../assets/images/swat.jpg"),
        url:"https://www.wgtn.ac.nz/students/campus/health/wellbeing/team",
    },
    {
        id:6,
        image: require("../assets/images/identity.png"),
        url:"https://www.wgtn.ac.nz/students/campus/health/wellbeing/identity",
    },
    {
        id:7,
        image: require("../assets/images/bubble.jpg"),
        url:"https://www.wgtn.ac.nz/students/campus/health/wellbeing/the-bubble",
    }

];


function ResourcesScreen(props) {

    const GoToWebsite = (url) => {
      Linking.openURL(url);

    };

    return (

        <Screen style={styles.container}>
            <FlatList
                data={resources}
                keyExtractor={resources => resources.id.toString()}
                renderItem={({item}) =>
                    <ResourcesListItem
                        image={item.image}
                        onPress={()=> GoToWebsite(item.url)}
                    />
                }
            />


        </Screen>

    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"white"

    },
});

export default ResourcesScreen;