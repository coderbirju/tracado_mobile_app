import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Dimensions, Image, StyleSheet } from "react-native";
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import { buttonStyles  } from "../../constants/enums";
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const navigation = useNavigation();

    const register = () => {
        console.warn("new account");
    }

    const termsOfUse = () => {
        console.warn("Booooooo");
    }

    const redirectToSignIn = () => {
        navigation.navigate('SignIn');
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View  style={styles.root}>
            <Text style={styles.title}>Create Account</Text>
            <CustomInput placeholder='username' value={username} setValue={setUsername}/>
            <CustomInput placeholder='email' value={email} setValue={setEmail}/>
            <CustomInput placeholder='password' value={password} setValue={setPassword} secureTextEntry/>
            <CustomInput placeholder='repeat password' value={repeatPassword} setValue={setRepeatPassword} secureTextEntry/>
            <CustomButton text='Register' onPress={register} buttonStyle={buttonStyles.PRIMARY} />
            <Text style={styles.subtitle}>By Registring you agree to sell your <Text style={styles.links} onPress={termsOfUse}>soul to us</Text></Text>
            <SocialSignInButton />
            <CustomButton text='Have an account? Sign In' onPress={redirectToSignIn} buttonStyle={buttonStyles.TERTIARY} />
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: "70%",
        maxWidth: 300,
        maxHeight: 300

    },
    title: {
        paddingTop: '5%',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#052360',
        margin: 10
    },

    subtitle: {
        paddingVertical: 5,
        fontSize: 10,
        color: 'gray',
        fontWeight: '500'
    },

    links: {
        color: '#FDB075',
        textDecorationLine: 'underline'
    }
})

export default SignUpScreen