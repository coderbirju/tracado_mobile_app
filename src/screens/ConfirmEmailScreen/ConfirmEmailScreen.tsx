import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { buttonStyles } from "../../constants/enums";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const ConfirmEmailScreen = () => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const resendCode = () => {
    console.warn("resendcode");
  };

  const confirm = (data) => {
    console.log('data: ', data);
    console.warn("new account");
  };

  const redirectToSignIn = () => {
    navigation.navigate("Signin");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Email</Text>
        <CustomInput
          placeholder="Enter Confirmation Code"
          name="Code"
          control={control}
        />
        <CustomButton
          text="Confirm"
          onPress={handleSubmit(confirm)}
          buttonStyle={buttonStyles.PRIMARY}
        />
        <CustomButton
          text="Resend Code"
          onPress={resendCode}
          buttonStyle={buttonStyles.SECONDARY}
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

export default ConfirmEmailScreen;
