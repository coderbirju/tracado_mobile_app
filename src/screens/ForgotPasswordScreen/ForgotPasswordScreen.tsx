import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native';
import { StyleSheet } from "react-native";
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { buttonStyles  } from "../../constants/enums";

const ForgotPasswordScreen = () => {

    const [email, setEmail] = useState('');

     const confirm = () => {
        console.warn("new account");
    }

    const redirectToSignIn = () => {
        // this.props.navigation.navigate('Signin');
        console.warn("redirectToSignIn");
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
                <View  style={styles.root}>
                    <Text style={styles.title}>Reset Your Password</Text>
                    <CustomInput placeholder='Enter username' value={email} setValue={setEmail}/> 
                    <CustomButton text='Send' onPress={confirm} buttonStyle={buttonStyles.PRIMARY} />
                    <CustomButton text='Back to Sign In' onPress={redirectToSignIn} buttonStyle={buttonStyles.TERTIARY} />
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

export default ForgotPasswordScreen