import React, {useState} from 'react';
import { View } from 'react-native';

import {
    Button,
} from 'galio-framework';

import {
    Container,
    SaldoContainer,
    TextSaldo,
    GroupContainer
} from './styles';

import theme from '../../../theme';

const Header = ({
    navigation
}) => {
    const [saldoShow, setSaldoShow ] = useState(false);

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
                    <TextSaldo>{saldoShow ? "R$807.26": "Oculto"}</TextSaldo>
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