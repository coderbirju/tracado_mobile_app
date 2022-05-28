import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  SignInScreen  from '../../src/screens/SignInScreen';
import SignUpScreen from '../../src/screens/SignUpScreen/SignUpScreen';
import ForgotPasswordScreen from '../../src/screens/ForgotPasswordScreen';
import ConfirmEmailScreen from '../../src/screens/ConfirmEmailScreen';
import NewPasswordScreen from '../../src/screens/NewPasswordScreen';
import { Auth, Hub } from 'aws-amplify';

// post authentication screens
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();



const Navigation = () => {
  const [user, setUser] = useState<null | undefined | Object>(undefined);
  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true}); // bypassCache = true makes a query to cognito
      setUser(authUser);
    } catch(e){
      setUser(null);
    }
  }

  useEffect(() =>{
    checkUser();
  }, [])

  useEffect(() => {
    const listener = (data: any) => {
      if(data.payload.event === 'signIn' || data.payload.event === 'signOut'){
        checkUser();
      }
    }

    Hub.listen("auth", listener);
    return () => Hub.remove("auth", listener);
  }, [])

  if(user === undefined){
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <ActivityIndicator/>
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
        <>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        </>
        )}
        

        

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

// Use the navigation this way
/*
if (state.isLoading) {
    // We haven't finished checking for the token yet
  return <SplashScreen />;
}

return (
  <Stack.Navigator>
    {state.userToken == null ? (
      // No token found, user isn't signed in
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: 'Sign in',
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: state.isSignout ? 'pop' : 'push',
        }}
      />
    ) : (
      // User is signed in
      <Stack.Screen name="Home" component={HomeScreen} />
    )}
  </Stack.Navigator>
);


*/