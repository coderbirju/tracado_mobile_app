import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import  SignInScreen  from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignUpScreen />
      {/* <SignInScreen/>
      <ForgotPasswordScreen />
      <ConfirmEmailScreen />
      <NewPasswordScreen /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
