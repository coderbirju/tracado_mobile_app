import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Dimensions, Image, StyleSheet } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButton from "../../components/SocialSignInButton";
import Logo from "../../../assets/Images/Logo_1.png";
import { buttonStyles } from "../../constants/enums";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const SignInScreen = () => {
  const { height: HEIGHT, width: WIDTH } = Dimensions.get("window");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigation = useNavigation();

  console.log(errors);
  const loginPress = (data: any) => {
    // this.props.navigation.navigate('Root');
    console.log(data);
    navigation.navigate("Home");
  };
  const forgotPass = () => {
    navigation.navigate("ForgotPassword");
  };

  const redirectToSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: HEIGHT * 0.3 }]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="username"
          rules={{ required: "Username is required" }}
          control={control}
          name="username"
        />
        <CustomInput
          placeholder="password"
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password should be atlease 6 characters",
            },
          }}
          control={control}
          name="password"
          secureTextEntry
        />
        <CustomButton text="Login" onPress={handleSubmit(loginPress)} />
        <CustomButton
          text="Forgot Password? Click here"
          onPress={forgotPass}
          buttonStyle={buttonStyles.TERTIARY}
        />
        <SocialSignInButton />
        <CustomButton
          text="Don't have an account? Sign up!"
          onPress={redirectToSignUp}
          buttonStyle={buttonStyles.TERTIARY}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 5,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 300,
  },
});

export default SignInScreen;
