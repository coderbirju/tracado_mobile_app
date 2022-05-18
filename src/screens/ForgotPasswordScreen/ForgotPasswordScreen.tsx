import React, { useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { StyleSheet } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { buttonStyles } from "../../constants/enums";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";
const ForgotPasswordScreen = () => {

  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const [loading, setLoading] = useState(false);

  const confirm = async (data: { username: string; }) => {
    // console.log('data: ', data);
    // navigation.navigate("Home");
    if(loading){
      return;
    }
    const { username } = data;
    try{
      setLoading(true);
      await Auth.forgotPassword(username);
      navigation.navigate("NewPassword", {username});
    } catch(e){
      Alert.alert("OOPS", e.message);
    }
    setLoading(false);
  };

  const redirectToSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>
        <CustomInput
          placeholder="username"
          rules={{ required: "Username is required" }}
          control={control}
          name="username"
        />
        <CustomButton
          text="Send"
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
    padding: 5
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

export default ForgotPasswordScreen;
