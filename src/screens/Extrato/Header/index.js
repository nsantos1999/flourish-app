import React, {useState} from 'react';
import { View } from 'react-native';

import {
    Button,
} from 'galio-framework';

import Icon from 'react-native-vector-icons/FontAwesome5';

import toReal from '../../../helpers/toReal';

import {
    Container,
    SaldoContainer,
    TextSaldo,
    GroupContainer,
    TextSync,
    SyncContainer
} from './styles';

import theme from '../../../theme';

import moment from 'moment';
import { useSelector } from 'react-redux';

moment.locale('pt-BR');

const Header = ({
    navigation
}) => {
    const [saldoShow, setSaldoShow ] = useState(false);

    const {saldo} = useSelector(({auth}) => auth);

    return (
        <Container>
            <GroupContainer>
                <SaldoContainer centered>
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
                </SaldoContainer>
                <SaldoContainer>
                    <TextSaldo>Saldo Disponível</TextSaldo>
                    <TextSaldo>{saldoShow ? `${toReal(saldo)}`: "Oculto"}</TextSaldo>
                    <SyncContainer>
                        <TextSync style={{ marginRight: 20 }}>Saldo Atualizado às {moment().format('HH:mm')} </TextSync>
                        <Icon 
                            name='sync'
                            size={10}
                            color={theme.COLORS.WHITE}
                        />
                    </SyncContainer>
                </SaldoContainer>
            </GroupContainer>
            
            <SaldoContainer centered>
                <Button
                    onlyIcon
                    icon={saldoShow ? 'eye-slash' : 'eye'}
                    iconFamily="font-awesome"
                    iconSize={theme.SIZES.BASE}
                    iconColor={theme.COLORS.WHITE}
                    color="transparent"
                    onPress={() => setSaldoShow(!saldoShow)}
                    style={{marginRight: 20}}
                />
            </SaldoContainer>
        </Container>
    )
}

export default Header;