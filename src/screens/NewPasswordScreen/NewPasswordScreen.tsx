import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native';
import { StyleSheet } from "react-native";
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { buttonStyles  } from "../../constants/enums";

const NewPasswordScreen = () => {

    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const confirm = () => {
        console.warn("new account");
    }

    

    const redirectToSignIn = () => {
        // this.props.navigation.navigate('Signin');
        console.warn("redirectToSignIn");
    }

    const resendCode = () => {
        console.warn("Fuck Yoiu");
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
                <View  style={styles.root}>
                    <Text style={styles.title}>Reset Your Password</Text>
                    <CustomInput placeholder='Cofirmation Code' value={code} setValue={setCode}/> 
                    <CustomInput placeholder='New password' value={newPassword} setValue={setNewPassword} secureTextEntry /> 
                    <CustomInput placeholder='Confirm Password' value={confirmPassword} setValue={setConfirmPassword} secureTextEntry/> 
                    <CustomButton text='Submit' onPress={confirm} buttonStyle={buttonStyles.PRIMARY} />
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

export default NewPasswordScreen