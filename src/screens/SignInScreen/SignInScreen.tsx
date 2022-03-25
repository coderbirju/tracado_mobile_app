import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Dimensions, Image, StyleSheet } from "react-native";
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import Logo  from '../../../assets/Images/Logo_1.png';
import { buttonStyles  } from "../../constants/enums";
import { useNavigation } from '@react-navigation/native';


const SignInScreen = () => {
  const { height: HEIGHT, width: WIDTH} = Dimensions.get('window');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const loginPress = () => {
    // this.props.navigation.navigate('Root');
    navigation.navigate("Home");
  }
  const forgotPass = () => {
    navigation.navigate('ForgotPassword');
  }

  const redirectToSignUp = () => {
    navigation.navigate('SignUp');
  }
  return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root} >
            <Image source={Logo} style={[styles.logo, {height: HEIGHT * 0.3}]} resizeMode="contain" />
            <CustomInput placeholder='username' value={username} setValue={setUsername}/>
            <CustomInput placeholder='password' value={password} setValue={setPassword} secureTextEntry/>
            <CustomButton text='Login' onPress={loginPress}/>
            <CustomButton text='Forgot Password? Click here' onPress={forgotPass} buttonStyle={buttonStyles.TERTIARY}/>
            <SocialSignInButton/>
            <CustomButton text="Don't have an account? Sign up!" onPress={redirectToSignUp} buttonStyle={buttonStyles.TERTIARY} />
        </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
      alignItems: 'center',
      padding: 2
  },
  logo: {
      width: "70%",
      maxWidth: 300,
      maxHeight: 300

  }
})

export default SignInScreen