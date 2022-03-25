import { View, Text } from 'react-native'
import React from 'react';
import CustomButton from '../CustomButton';
import { buttonStyles, backGroundColors, foreGroundColors } from '../../constants/enums';


const loginFaceboook = () => {
    console.warn("pressed facebook");
}
const loginGoogle = () => {
    console.warn("pressed google");
}

const loginApple = () => {
    console.warn("pressed loginApple");
}

const SocialSignInButton = () => {
  return (
    <>
    <CustomButton text='Login with Google' onPress={loginGoogle} buttonStyle={buttonStyles.SECONDARY} bgColor={backGroundColors.GOOGLE} fgColor={foreGroundColors.GOOGLE}/>
    <CustomButton text='Login with Facebook' onPress={loginFaceboook} buttonStyle={buttonStyles.PRIMARY} bgColor={backGroundColors.FACEBOOK} fgColor={foreGroundColors.FACEBOOK} />
    <CustomButton text="Sign up with AppleID" onPress={loginApple} buttonStyle={buttonStyles.TERTIARY} bgColor={backGroundColors.APPLE} fgColor={foreGroundColors.APPLE}/>
    </>
  )
}

export default SocialSignInButton