import { StyleSheet } from 'react-native';

export default StyleSheet.create({
        background : {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#77C054',
        },
        containerLogo: {
          flex: 1,
          justifyContent: 'center',
        },
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%',
          paddingBottom: 50,
        },
        input: {
          backgroundColor: '#FFF',
          width: '90%',
          marginBottom: 15,
          color: '#222',
          fontSize: 17,
          borderRadius: 7,
          padding: 10
        },
        btnSubmit: {
          backgroundColor: '#9FA5AA',
          width: '90%',
          height: 45,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 7,
        },
        submitText: {
          color: '#FFF',
          fontSize: 18,
        },
        btnRegister: {
          marginTop: 10,
        },
        registerText: {
          color: '#FFF',
          fontSize: 12,
        }
});
