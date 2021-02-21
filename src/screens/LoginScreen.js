import React,{useState,useContext} from 'react';
import {StyleSheet,Image,Alert} from 'react-native';
import Button from '../components/Button';
import AppText from '../components/AppText';
import Screen from "../components/Screen";
import SignUpAppText from '../components/SignUpAppText';
import Placeholder from "../components/Placeholder";
import LogoImage from "../components/LogoImage";
import jwtDecode from "jwt-decode";
import AuthContext from "../utilities/context";
import tokenStorage from "../utilities/tokenStorage";
import auth_endpoint from "../api/auth_endpoint";
import { Formik } from 'formik';
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

function LoginScreen({navigation}) {
    const authContext = useContext(AuthContext)
   
    const handleLogin = async ({email,password}) => {
        const result = await auth_endpoint.login(email,password);
        const user = jwtDecode(result.data);
        authContext.setUser(user);
        tokenStorage.storeToken(result.data);
        if(result.ok){
            navigation.navigate("Main")
        }
        
    };

    return (

        <Formik
        initialValues={{ email: '' , password:''}}
        onSubmit={handleLogin} 
        validationSchema={validationSchema}
        >

          
   
        {({ handleChange, handleSubmit, values, errors }) => (
   
   
         <Screen style={styles.container}>
            <LogoImage image={require("../assets/images/swat.jpg")}/>
            <AppText style={styles.title}>Welcome to SWAT</AppText>
            <Placeholder
                placeholder="email..."
                autoCapitalize="none"
                autoCorrect = {false}
                textContentType="password"
                onChangeText={handleChange('email')}

            />
            <AppText>{errors.email}</AppText>
            <Placeholder
                placeholder="password..."
                secureTextEntry
                autoCapitalize="none"
                autoCorrect = {false}
                keyboardType = "email-address"
                textContentType="emailAddress"
                onChangeText={handleChange('password')}
            />
            <AppText>{errors.password}</AppText>
            <Button
                title="Login"
                onPress={handleSubmit}
            />
            <SignUpAppText
                onPress={() => navigation.navigate("Register")}
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

export default LoginScreen;