import React,{useContext} from 'react';
import {View, StyleSheet ,ScrollView, Alert} from 'react-native';
import AppText from '../components/AppText';
import LogoImage from "../components/LogoImage";
import {Header} from 'react-native-elements'
import AuthContext from '../utilities/context';
import tokenStorage from '../utilities/tokenStorage';


function HomeScreen({navigation}) {
    const {user,setUser} = useContext(AuthContext);

    const handleLogOut = () => {
      
        setUser(null);
        tokenStorage.removeToken();
    }

    const handleAlert = () => {
        Alert.alert("Info","Do you want to logout?",[{text:"Yes" , onPress: () => handleLogOut()},{text:"No"}])
    }

    return (
        <View style={styles.container}>

        <Header
        backgroundColor="green"
        rightComponent={{ icon: 'login', color: '#fff',  onPress: () => handleAlert() }}
        />
 
            <ScrollView>
            <LogoImage onPress={() => navigation.navigate("Video")} image={require("../assets/images/swat.jpg")}/>
            <AppText style={styles.text}>The Student Wellbeing Awareness Team (SWAT) empowers students about their own health by raising awareness and providing education about health and wellbeing.The Student Wellbeing Awareness Team (SWAT) are current students who lead health promotion action on campus, creating space and conversations around mental health and wellbeing for students and the wider community.</AppText>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        flex:1,
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf:'center',
        marginTop:50,
        marginBottom: 20,
    },
    text:{
        padding:40,
        fontSize:14,
        textAlign:"justify",
        lineHeight:30,
    }
});

export default HomeScreen;