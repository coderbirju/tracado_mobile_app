import { Text, View, TextInput, StyleSheet } from 'react-native'
import React, {FC} from 'react'

// todo move this to enums or interfaces or types file
type CustomInputProps = {
    value: any,
    setValue: any,
    placeholder: string,
    secureTextEntry?: boolean
};

const CustomInput: FC<CustomInputProps> = ({ value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
        <TextInput value={value} 
        onChange={setValue} placeholder={placeholder} placeholderTextColor='gray' style={styles.input} secureTextEntry={secureTextEntry}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderRadius: 5,
        borderWidth: 1,
        paddingVertical: 20,
        marginVertical: 5,
    },
    input: {
    }
});

export default CustomInput