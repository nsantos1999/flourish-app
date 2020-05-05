import React from 'react'
import { StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import {Gravatar} from 'react-native-gravatar';
import Icon from 'react-native-vector-icons/FontAwesome5';

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

import theme from '../../../theme';
import toReal from '../../../helpers/toReal';

const Header = ({
    navigation
}) => {
    const auth = useSelector(({ auth }) => auth);

    console.log(auth);
    return (
        <Container>
            <InfoContainer>
                <Gravatar 
                    options={{
                        email: 'example@gmail.com',
                        parameters: { "size": "200", "d": "mm" },
                        secure: true
                    }}
                    style={styles.roundedProfileImage} 
                />
                <NomeContainer>
                    <TextName>Olá {auth.nome}!</TextName>
                    <LevelContainer>
                        <Icon
                            size={12}
                            color={theme.COLORS.YELLOW}
                            name="trophy"
                        />
                        <TextLevel>Nível {auth.level}</TextLevel>
                    </LevelContainer>
                </NomeContainer>
            </InfoContainer>
            <SaldoContainer onPress={() => navigation.push("Extrato")}>
                <TextSaldo>{toReal(auth.saldo)}</TextSaldo>
                <TextSaldoDescription>SALDO ATUAL</TextSaldoDescription>
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
