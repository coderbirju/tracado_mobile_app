import React, { useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { StyleSheet } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { buttonStyles } from "../../constants/enums";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import { Auth } from "aws-amplify";

const ConfirmEmailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    watch
  } = useForm({defaultValues: {username: route?.params?.username}});

  const username = watch('username');

  const resendCode = async () => {
    try{
      setLoading(true);
      const response = await Auth.resendSignUp(username);
      Alert.alert("Success", "Code was sent to your number!");
    } catch(e){
      Alert.alert("OOPS", e.message);
    }
  };

  const confirm = async (data: { username: string; code: string; }) => {
    if(loading){
      return;
    }

    try{
      setLoading(true);
      await Auth.confirmSignUp(data.username,data.code);
      navigation.navigate('SignIn');
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
        <Text style={styles.title}>Confirm Email</Text>
        <CustomInput
          placeholder="Enter Confirmation Code"
          name="code"
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
