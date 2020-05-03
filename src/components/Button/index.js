import React from 'react'
import { View, Text } from 'react-native'

import {
    Button
} from 'galio-framework';

import theme from '../../theme';

const ButtonComponent = props => {
    return (
        <Button {...props}>
            {props.children}
        </Button>
    )
}

export default ButtonComponent
