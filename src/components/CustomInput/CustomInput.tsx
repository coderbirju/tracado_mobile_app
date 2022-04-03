import { Text, View, TextInput, StyleSheet } from 'react-native'
import React, {FC} from 'react'
import { useForm, Controller } from 'react-hook-form';

// todo move this to enums or interfaces or types file
type CustomInputProps = {
    control: any,
    name: string,
    placeholder: string,
    secureTextEntry?: boolean,
    rules?: any
    errorString?: string
};

const CustomInput: FC<CustomInputProps> = ({ control, name, rules = {},  placeholder, secureTextEntry}) => {
    return (
        <Controller 
            control={control}
            name={name}
            rules={rules}
            render={({field: {value, onChange, onBlur}, fieldState:{error}}) => (
            <>    
                <View style={[styles.container, {borderColor: error ? 'red' : '#e8e8e8'}]}>
                    <TextInput value={value} 
                        onChangeText={onChange} 
                        placeholder={placeholder} 
                        placeholderTextColor='gray' 
                        style={styles.input} 
                        secureTextEntry={secureTextEntry}/>
                </View>
                {error && <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>}
            </>
            )}
        />
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