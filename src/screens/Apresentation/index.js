import React from 'react'

import {
    Image,
    StyleSheet
} from 'react-native';

import {
    Text, Block, Button, Card, NavBar, Input, Icon
} from 'galio-framework';

import { 
    Container,
    DescriptionContainer,
    ButtonsContainer,
    Logo,
    AnimationContainer,
    DescriptionInformations,
    TextDescription
 } from './styles';

import LottieView from 'lottie-react-native';

import theme from '../../theme';

const Apresentation = () => {
    return (
        <Container>
            <DescriptionContainer>
                <Logo
                    source={require('../../../public/images/flourish.png')}
                />
                <DescriptionInformations>
                    <TextDescription>
                        Inovando a forma que seu dinheiro é administrado!
                    </TextDescription>
                    <AnimationContainer>
                        <LottieView 
                            source={require('../../../public/animations/super_finance.json')} 
                            style={{width: 250}}
                            autoPlay 
                            loop={false} 
                            // onAnimationFinish={onAnimationFinish}
                        />
                    </AnimationContainer>
                </DescriptionInformations>
                
                
            </DescriptionContainer>
            <ButtonsContainer>
                <Button round style={{ backgroundColor: theme.COLORS.PRIMARY }} >
                    Ja tenho uma conta
                </Button>
                <Button round style={{ backgroundColor: theme.COLORS.WHITE}} textStyle={{ color: theme.COLORS.PRIMARY }}>
                    Ainda não sou registrado
                </Button>
            </ButtonsContainer>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 200,
      height: 50,
      resizeMode: 'stretch',
    },
    logo: {
      width: 66,
      height: 58,
    },
});

export default Apresentation
