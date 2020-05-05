import React from 'react';
import { 
  KeyboardAvoidingView, 
  Text, 
  View, 
  TouchableOpacity, 
  TextInput, 
  Image } from 'react-native';

import styles from './styles'; 

const EnterAccount = ({
  navigation
}) => {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image 
        source={require('../../../public/images/flourish.png')} 
        />
      </View>

      <View style={styles.container}>
        <TextInput 
        style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={()=>{}}
        />

        <TextInput 
        style={styles.input}
        placeholder="Password"
        autoCorrect={false}
        onChangeText={()=>{}}
        />

      <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.push('BottomTabs')}>
        <Text styles={styles.submitText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.push('SignUp')}>
        <Text styles={styles.registerText}>Create Account</Text>
      </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>
  )
}

export default EnterAccount;
