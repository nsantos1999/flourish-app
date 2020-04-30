import React from 'react'
import {
    Platform
} from 'react-native';
import { TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import {
    Block, Button, NavBar, Icon
} from 'galio-framework';
import theme from '../../theme';

const Content = ({
    children,
    navigation
}) => {
    const { email, nome } = useSelector(({ auth }) => auth);

    return (
        <Block safe flex>
            <NavBar
                title={nome}
                right={(
                    <Button
                        onlyIcon
                        icon="heart"
                        iconFamily="font-awesome"
                        iconSize={theme.SIZES.BASE}
                        iconColor={theme.COLORS.ICON}
                        color="transparent"
                        onPress={() => Linking.openURL('https://galio.io')}
                    />
                )}
                left={(
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon 
                        name="menu"
                        family="feather"
                        size={theme.SIZES.BASE}
                        color={theme.COLORS.ICON}
                    />
                </TouchableOpacity>
                )}
                style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
            />
            {children}
        </Block>
    )
}

export default Content
