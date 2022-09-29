import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
// import Signout  from "../../components/SignOutButton";
import { Auth } from 'aws-amplify';
import Icon from 'react-native-ico';
import { StatusBar } from 'expo-status-bar';

var iconHeight = 26;
var iconWidth = 26;


const HomeScreen = () => {
  
  const [screenText, setScreenText] = useState("Press a button");

  const changeText = () => {
    setScreenText("Button pressed");
  }
  
  const signOut = () => {
    Auth.signOut();
  }


  return (
    <View style={styles.container}>
      <>
        <StatusBar style='dark'></StatusBar>
        <Text>{screenText}</Text>
      </>
      <View style={styles.bottomContainer}>
        <View style={styles.navbar}>  
          <Pressable onPress={changeText} style={styles.iconBehave}>
          <Icon name="home" group="font-awesome" height={iconHeight} width={iconWidth} color='#DADADA'/>
          </Pressable>
          <Pressable onPress={changeText} style={styles.iconBehave}>
          <Icon name="list" group="coolicons" height={iconHeight} width={iconWidth} color='#AFB6B7'/>
          </Pressable>
          <Pressable onPress={changeText} style={styles.iconBehave}>
          <Icon name="add-button-inside-black-circle" group="material-design" height={iconHeight} width={iconWidth} color='#AFB6B7'/>
          </Pressable>
          <Pressable onPress={changeText} style={styles.iconBehave}>
          <Icon name="calendar-page-empty" group="font-awesome" height={iconHeight} width={iconWidth} color='#AFB6B7'/>
          </Pressable>
          <Pressable onPress={changeText} style={styles.iconBehave}>
          <Icon name="pencil-in-a-square-interface-symbol-of-gross-outline" group="coolicons" height={iconHeight} width={iconWidth} color='#AFB6B7'/>
          </Pressable>
        </View>
      </View>
      {/* <Text 
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
        </Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  bottomContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 10
  },

  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#161460',
    width: '98%',
    borderRadius: 10
  },

  iconBehave: {
    padding: 14
  }
});

export default HomeScreen