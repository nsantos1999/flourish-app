import React, { useState } from 'react';
import { 
  KeyboardAvoidingView, 
  Text, 
  View, 
  TouchableOpacity, 
  TextInput, 
  Image } from 'react-native';

import styles from './styles'; 
import { useDispatch } from 'react-redux';

import * as authActions from '../../store/auth/actions';

import {
  Button
} from 'galio-framework';

import theme from '../../theme';

import Logo from '../../components/Logo';

const EnterAccount = ({
  navigation
}) => {
  const dispatch = useDispatch();

  const [user, setUser ] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const canSubmit = () => user.email && user.password;

  const handleSubmit = async () => {
    const { email, password } = user;
    setLoading(true);
    try{
      await dispatch(authActions.login(email, password));
    }catch(err) {
      setError(true);
    }finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Logo />
        {/* <Image 
        source={require('../../../public/images/flourish.png')} 
        /> */}
      </View>

      <View style={styles.container}>
        <Text style={{color: theme.COLORS.ERROR, marginBottom:20}}>{error && 'Login ou senha invalidos'}</Text>
        <TextInput 
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={(value)=>setUser({...user,email: value})}
        />

        <TextInput 
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={(value)=>setUser({...user,password: value})}
        />

        <Button disabled={loading} style={{ backgroundColor: theme.COLORS.WHITE,marginBottom:10 }} textStyle={{ color: theme.COLORS.PRIMARY }} disabled={!canSubmit()} round onPress={handleSubmit}>
          {loading ? "Autenticando...":"Logar"}
        </Button>
        <Button round style={{ backgroundColor: theme.COLORS.PRIMARY}}  onPress={() => navigation.push('SignUp')}>
            Criar conta
        </Button>

      {/* <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.push('BottomTabs')}>
        <Text styles={styles.submitText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.push('SignUp')}>
        <Text styles={styles.registerText}>Create Account</Text>
      </TouchableOpacity> */}

      </View>

    </KeyboardAvoidingView>
  )
}

export default EnterAccount;
