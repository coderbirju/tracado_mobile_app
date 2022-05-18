import React, { useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { Dimensions, Image, StyleSheet } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButton from "../../components/SocialSignInButton";
import { buttonStyles } from "../../constants/enums";
import { useNavigation } from "@react-navigation/native";
import { set, useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();


  let pwd = watch('password');

  const register = async (data:any) => {
    if(loading){
      return;
    }
      try{
        setLoading(true);
        const { username, password, email, name } = data;
        await Auth.signUp({
          username,
          password,
          attributes:{ name, email, preferred_username: username}
        });
        navigation.navigate("ConfirmEmail", {username});
      } catch(e) {
        Alert.alert('OOPS', e.message);
      }
    setLoading(false);
  };

  const termsOfUse = () => {
    console.warn("Booooooo");
  };

  const redirectToSignIn = () => {
    navigation.navigate("SignIn");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create Account</Text>
        <CustomInput
          placeholder="Name"
          rules={{ 
              required: "Name is required",
              maxLength: {
                  value: 50,
                  message: "Username Cannot exceed 50 characters"
              }
        }}
          control={control}
          name="name"
        />
        <CustomInput
          placeholder="username"
          rules={{ 
              required: "Username is required",
              maxLength: {
                  value: 24,
                  message: "Username Cannot exceed 24 characters"
              }
        }}
          control={control}
          name="username"
        />

        <CustomInput 
        placeholder="email" 
        name="email" 
        control={control} 
        rules={{ 
            required: "Email is required",
            pattern: {
                value: emailRegex,
                message: "Enter a valid email"
            }
        }}
        />

        <CustomInput
          placeholder="password"
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password should be atlease 6 characters",
            }
          }}
          control={control}
          name="password"
          secureTextEntry
        />
        <CustomInput
          placeholder="Re enter password"
          rules={{
            validate: (value: any) => 
                value === pwd || "Passwords do not match"
          }}
          control={control}
          name="passwordRepeat"
        />
        <CustomButton
          text={loading ? "Signing Up..." :"Register"}
          onPress={handleSubmit(register)}
          buttonStyle={buttonStyles.PRIMARY}
        />
        <Text style={styles.subtitle}>
          By Registring you agree to sell your{" "}
          <Text style={styles.links} onPress={termsOfUse}>
            soul to us
          </Text>
        </Text>
        <SocialSignInButton />
        <CustomButton
          text="Have an account? Sign In"
          onPress={handleSubmit(redirectToSignIn)}
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
  title: {
    paddingTop: "5%",
    fontSize: 24,
    fontWeight: "bold",
    color: "#052360",
    margin: 10,
  },

  subtitle: {
    paddingVertical: 5,
    fontSize: 10,
    color: "gray",
    fontWeight: "500",
  },

  links: {
    color: "#FDB075",
    textDecorationLine: "underline",
  },
});

export default SignUpScreen;
