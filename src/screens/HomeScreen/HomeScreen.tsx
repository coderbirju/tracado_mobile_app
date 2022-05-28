import { View, Text } from 'react-native'
import React from 'react'
// import Signout  from "../../components/SignOutButton";
import { Auth } from 'aws-amplify';

const HomeScreen = () => {
  const signOut = () => {
    Auth.signOut();
  }


  return (
    <View style={{flex:1, alignItems:"center"}}>
      <Text>HomeScreen</Text>
      <Text 
      onPress={signOut}
      style={{
        width: '100%',
        textAlign:'center',
        color:'red',
        marginTop:'auto',
        marginVertical:20,
        fontSize:20
      }}
      >
        Signout
      </Text>
    </View>
  )
}

export default HomeScreen