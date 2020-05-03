import React, {useState, useRef, useEffect} from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'
import { useSelector } from 'react-redux'
import {Gravatar} from 'react-native-gravatar';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    StatusBar
} from 'react-native';

import {
    Container,
    InfoContainer,
    NomeContainer,
    LevelContainer,
    TextName,
    TextLevel,
    SaldoContainer,
    TextSaldo,
    TextSaldoDescription,
} from './styles';

import { Input } from 'react-native-elements';


import theme from '../../../theme';

const Header = ({
    setValor,
    valor
}) => {
    const auth = useSelector(({ auth }) => auth);
    const color = valor && valor > 0 ? theme.COLORS.PRIMARY : theme.COLORS.ERROR;

    const [ editing, setEditing ] = useState(false);

    const [ resultRef, serResultRef ] = useState(0);


    return (
        <Container backgroundColor={color}>
            <StatusBar hidden={false} backgroundColor={color} barStyle="light-content"/>
            <InfoContainer>
            </InfoContainer>
            <SaldoContainer>
            {
                editing 
                ?
                <TextInput
                    // label='Descrição'
                    type="number"
                    value={valor}
                    placeholder='Adicione um valor'
                    onBlur={() => setEditing(false)}
                    inputStyle={{fontSize: 15}}
                    style={{color:theme.COLORS.WHITE}}
                    onChangeText={value => setValor(value)}
                />
                :
                <TextSaldo onPress={() => setEditing(true)}>{valor ? `R$ ${valor}` : "Nenhum valor"}</TextSaldo>
            }
            </SaldoContainer>
        </Container>
    )
}

const styles = StyleSheet.create({
    roundedProfileImage: {
      width:50, height:50, borderWidth:3,
      borderColor:'white', borderRadius:50,
      marginRight: 5
    }
})

export default Header
