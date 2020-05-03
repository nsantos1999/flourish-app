import React from 'react'
import { View} from 'react-native';

import { FloatingActionButton } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

import theme from '../../theme';

const colorIcon = theme.COLORS.WHITE;
const FloatingButton = props => {
    return (
        <View>
            <FloatingActionButton onPress={() => props.onPress()}>
                <Icon name={props.icon} color={colorIcon} size={25} />
            </FloatingActionButton>
        </View>
    )
}

export default FloatingButton
