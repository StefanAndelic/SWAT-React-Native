import React,{useState} from 'react';
import { View, StyleSheet,Image, Alert } from 'react-native';
import Screen from "../components/Screen";
import Button from "../components/Button";
import AppText from "../components/AppText";
import Placeholder from "../components/Placeholder";
import LogoImage from "../components/LogoImage";
import register_endpoint from "../api/register_user_endpoint"
import { Formik } from 'formik';
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

function SignUpScreen({navigation}) {
    
    const handleSignup = async ({name,email,password}) => {

        const result = await register_endpoint.register(name,email,password)
        if (!result.ok) {
          Alert.alert("Info", result.data,[{text:"Try again", onPress: () => console.log("pressed")}])
        }
        else if(result.ok){
         Alert.alert("Info","Successfully registered",[{text:"OK", onPress: () => navigation.navigate("Login")}])
        }
    
    };

    return (

        <Formik
        initialValues={{ name:'', email: '' , password:''}}
        onSubmit={handleSignup} 
        validationSchema={validationSchema}
        >

        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
   
   
         <Screen style={styles.container}>
            <LogoImage image={require("../assets/images/swat.jpg")}/>
            <AppText style={styles.title}>Welcome to SWAT</AppText>
            <Placeholder
                placeholder="name"
                autoCapitalize="none"
                autoCorrect = {false}
                textContentType="password"
                onChangeText={handleChange('name')}

            />
            <AppText>{errors.name}</AppText>
            <Placeholder
                placeholder="email"
                autoCapitalize="none"
                autoCorrect = {false}
                textContentType="password"
                onChangeText={handleChange('email')}

            />
            <AppText>{errors.email}</AppText>
            <Placeholder
                placeholder="password"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect = {false}
                keyboardType = "email-address"
                textContentType="emailAddress"
                onChangeText={handleChange('password')}
            />
            <AppText>{errors.password}</AppText>
            <Button
                title="Submit"
                onPress={handleSubmit}
            />
         </Screen>
   
        )}
   
      </Formik>
    );


    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",

    },
    logo: {
        width: 150,
        height: 150,
        alignSelf:'center',
        marginTop:40,
        marginBottom: 50,

    },
    title:{

        marginBottom: 20,
        marginTop:-30,
        marginLeft:110,
        fontSize:18,

    },
});

export default SignUpScreen;