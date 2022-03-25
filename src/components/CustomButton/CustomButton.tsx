import React, {FC} from 'react';
// import { Text, View } from './Themed';
import { StyleSheet, Pressable, Text } from 'react-native';
import { buttonProps } from "../../constants/interfaces/customButton";

const CustomButton: FC<buttonProps> = ({onPress, text, buttonStyle="PRIMARY", bgColor, fgColor}) => {
  return (
      //@ts-ignore
    <Pressable onPress={onPress} style={[styles.container,  styles[`container_${buttonStyle}`], 
    bgColor ? {backgroundColor: bgColor} : {} ]}>
        {/*@ts-ignore*/}
        <Text style={[styles.text, styles[`text_${buttonStyle}`], fgColor ? {color: fgColor} : {}]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 15,
        marginVertical: 5,
        alignItems: "center",
        borderRadius: 5
    },

    container_PRIMARY: {
        backgroundColor: "#3B71F3",
    }, 

    container_SECONDARY: {
        borderColor: "#3B71F3",
        borderWidth: 2
    },

    container_TERTIARY: {
        backgroundColor: 'white'
        
    },

    text: {
        fontWeight: "bold",
        color: 'white'
    },

    text_TERTIARY: {
        color: 'gray'
    },

    text_SECONDARY: {
        color: 'blue'
    }
})


export default CustomButton;