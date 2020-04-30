import React from 'react'
import { TouchableOpacity, Platform, ScrollView, StyleSheet, Dimensions } from 'react-native'
import {
    Text, Block, Button, Card, NavBar, Input, Icon
} from 'galio-framework';
import theme from '../theme';
import { useSelector } from 'react-redux';

import Content from '../components/Content';

const { width } = Dimensions.get('screen');

const MeuPerfil = ({
    navigation
}) => {
    // const usuario = useSelector(({ auth }) => auth);
    // console.log(usuario);
    return (
        <Content
            navigation={navigation}
        >
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <Block style={styles.container}>
                    {/* Buttons examples using Button component */}
                    <Block flex style={{ marginBottom: theme.SIZES.BASE }}>
                        <Block flex style={{ padding: theme.SIZES.BASE }}>
                            <Text h5>Buttons</Text>
                        </Block>
                        <Block flex center style={{ padding: theme.SIZES.BASE }}>
                            <Button style={styles.button} round>
                            Primary
                            </Button>
                            <Button color="info" style={styles.button} round>
                            Info
                            </Button>
                            <Button style={styles.button} color="success" round>
                            Success
                            </Button>
                            <Button color="warning" style={styles.button} round>
                            Warning
                            </Button>
                            <Button color="error" style={styles.button} round>
                            Error
                            </Button>
                        </Block>
                    </Block>
                </Block>
            </ScrollView>
        </Content>
    )
}

export default MeuPerfil;


const styles = StyleSheet.create({
    container: {
      padding: 14,
      justifyContent: 'flex-start',
      backgroundColor: theme.COLORS.WHITE,
    },
    button: {
      marginBottom: 20,
    },
    cards: {
      flex: 1,
      backgroundColor: theme.COLORS.WHITE,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    card: {
      borderWidth: 0,
      backgroundColor: theme.COLORS.WHITE,
      width: width - theme.SIZES.BASE * 2,
      marginVertical: theme.SIZES.BASE * 0.875,
    },
    cardFooter: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginVertical: theme.SIZES.BASE / 2,
      paddingHorizontal: theme.SIZES.BASE,
      paddingVertical: theme.SIZES.BASE / 2,
      backgroundColor: theme.COLORS.TRANSPARENT,
    },
    cardNoRadius: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    cardAvatar: {
      width: theme.SIZES.BASE * 2.5,
      height: theme.SIZES.BASE * 2.5,
      borderRadius: theme.SIZES.BASE * 1.25,
    },
    cardTitle: {
      justifyContent: 'center',
      paddingLeft: theme.SIZES.BASE / 2,
    },
    cardImageContainer: {
      borderWidth: 0,
      overflow: 'hidden',
    },
    cardImageRadius: {
      borderRadius: theme.SIZES.BASE * 0.1875,
    },
    cardImage: {
      width: 'auto',
      height: theme.SIZES.BASE * 12.5,
    },
    cardRounded: {
      borderRadius: theme.SIZES.BASE * 0.5,
    },
    cardFull: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
    },
    cardGradient: {
      bottom: 0,
      left: 0,
      right: 0,
      height: 90,
      position: 'absolute',
      overflow: 'hidden',
      borderBottomRightRadius: theme.SIZES.BASE * 0.5,
      borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
    },
  });
  
