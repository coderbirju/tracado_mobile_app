import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { buttonStyles } from "../../constants/enums";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const NewPasswordScreen = () => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  /*
  Using default values to prepopulate input texts

  useForm({ defaultValues: {
      username: "Jone doe"
  }});
   */

  const pwd = watch('password');

  const confirm = (data) => {
    console.log('data: ', data);
    console.warn("new account");
  };

  const redirectToSignIn = () => {
    navigation.navigate("SignIn");
  };

  const resendCode = () => {
    console.warn("Fuck Yoiu");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>
        <CustomInput
          placeholder="Cofirmation Code"
          control={control}
          name="Code"
        />
        <CustomInput
          placeholder="New password"
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
        <CustomInput
          placeholder="Confirm Password"
          rules={{
            validate: (value: any) => 
                value === pwd || "Passwords do not match"
          }}
          control={control}
          name="passwordRepeat"
          secureTextEntry
        />
        <CustomButton
          text="Submit"
          onPress={handleSubmit(confirm)}
          buttonStyle={buttonStyles.PRIMARY}
        />
        <CustomButton
          text="Back to Sign In"
          onPress={redirectToSignIn}
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

export default NewPasswordScreen;
