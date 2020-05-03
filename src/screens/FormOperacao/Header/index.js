import React from 'react'
import { StyleSheet } from 'react-native'
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

import {
    Input, 
} from 'galio-framework';

import theme from '../../../theme';

const Header = ({
    setValor,
    valor
}) => {
    const auth = useSelector(({ auth }) => auth);
    const color = valor && valor > 0 ? theme.COLORS.PRIMARY : theme.COLORS.ERROR;

    const [ editing, setEditing ] = useState(false);

    return (
        <Container backgroundColor={color}>
            <StatusBar hidden={false} backgroundColor={color} barStyle="light-content"/>
            <InfoContainer>
            </InfoContainer>
            <SaldoContainer>
            {
                editing 
                ?
                <Input
                    rounded
                    placeholder="Valor"
                    value={valor}
                    onChangeText={valor => setValor(valor)}
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
