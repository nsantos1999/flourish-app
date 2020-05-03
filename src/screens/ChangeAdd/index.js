import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    Container,
    Row,
    Card
} from './styles';

import theme from '../../theme';

const cards = [
    {
        icon: 'wallet',
        onClick: () => console.log("Wallet")
    },
    {
        icon: 'card',
        onClick: () => console.log("Wallet")
    },
]

const ICONS_SIZE = 80;

const ChangeAdd = ({
    navigation
}) => {
    useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', e => {
            e.preventDefault();
            console.log("Tab PRESS");
            navigation.push('FormOperacao');
        });
    
        return unsubscribe;
    }, [navigation]);
    
    return (
        <Container>
            <Row>
                <Card
                    onPress={() => navigation.push('FormOperacao')}
                >
                    <Icon name="wallet" size={ICONS_SIZE} color={theme.COLORS.PRIMARY} />
                </Card>
                <Card
                    onPress={() => navigation.push('FormOperacao')}
                >
                    <Icon name="credit-card" size={ICONS_SIZE} color={theme.COLORS.PRIMARY} />
                </Card>
            </Row>
        </Container>
    )
}

export default ChangeAdd
