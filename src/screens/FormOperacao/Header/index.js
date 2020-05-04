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
    SaldoContainer,
    TextSaldo,
    ButtonsGroup,
} from './styles';

import { Input } from 'react-native-elements';

import {
    Button,
} from 'galio-framework';

import theme from '../../../theme';

const Header = ({
    navigation,
    setValor,
    valor,
    toggleTipo,
    tipoOperacao,
}) => {
    const auth = useSelector(({ auth }) => auth);
    const color = valor && valor > 0 ? theme.COLORS.PRIMARY : theme.COLORS.ERROR;

    const [ editing, setEditing ] = useState(false);


    return (
        <Container backgroundColor={color}>
            <StatusBar hidden={false} backgroundColor={color} barStyle="light-content"/>
            <ButtonsGroup>
                <Button
                    onlyIcon
                    icon="arrow-left"
                    iconFamily="font-awesome"
                    iconSize={theme.SIZES.BASE}
                    iconColor={theme.COLORS.WHITE}
                    color="transparent"
                    onPress={() => navigation.goBack()}
                    style={{marginRight: 20}}
                />
                <Button
                    onlyIcon
                    icon="exchange"
                    iconFamily="font-awesome"
                    iconSize={theme.SIZES.BASE}
                    iconColor={theme.COLORS.WHITE}
                    color="transparent"
                    onPress={toggleTipo}
                    style={{marginRight: 20}}
                />
            </ButtonsGroup>
            <TextSaldo>{tipoOperacao == 'C' ? 'Crédito' : 'Débito'}</TextSaldo>
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
                    style={styles.input}
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
    input: {
        backgroundColor:theme.COLORS.WHITE,
        // width:theme.SIZES.BASE,
        padding:5,
        fontSize: theme.SIZES.FONT,
        borderRadius: 5
    }
})

export default Header
