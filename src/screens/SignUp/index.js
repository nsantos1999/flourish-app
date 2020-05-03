import React, { useState } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import{
    StyleSheet
} from 'react-native';

import StepIndicator from 'react-native-step-indicator';

import steps from './steps';

import * as authActions from '../../store/auth/actions';
import { useDispatch } from 'react-redux';

import {
    Container,
    Content,
    Header,
    ButtonsContainter,
    InputContent,
    StepDescriptionContainer,
    StepDescription
} from './styles';

import {
    Text,
    Button
} from 'galio-framework';


import Logo from '../../components/Logo'
import Loading from '../../components/Loading'
import Animation from '../../components/Animation'

const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
}

import theme from '../../theme';

const SignUp = () => {
    const dispatch = useDispatch();

    const [ stepPosition, setStepPosition ] = useState(0);
    const [ loading, setLoading ] = useState(false);
    const [ finished, setFinished ] = useState(false);
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        cellphone: '',
        password: ''
    });

    const onPageChange = position => {
        position >= 0 && position <= steps.length - 1  && setStepPosition(position);
    }

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            setFinished(true);
            setLoading(false);
        },3000);
    }

    const handleLogin = () => {
        console.log("logando...");
        dispatch(authActions.login());
    }

    const steps = [
        {
            title: 'Nome',
            description: 'Olá me chamo Otto, como você se chama?',
            input: (
                <Input
                    label='Nome'
                    placeholder='Nome'
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color={theme.COLORS.BLACK}
                        />
                    }
                />
            )
        },
        {
            title: 'Email',
            description: `Me conta ${user.name}, qual o seu e-mail?`,
            input: (
                <Input
                    label='Email'
                    placeholder='exemplo@mail.com'
                    leftIcon={
                        <Icon
                            name='at'
                            size={24}
                            color={theme.COLORS.GREY}
                        />
                    }
                />
            )
        },
        {
            title: 'Telefone Celular',
            description: `E seu celular?`,
            input: (
                <Input
                    label='Telefone'
                    placeholder='(99) 99999-9999'
                    
                    leftIcon={
                        <Icon
                            name='phone'
                            size={24}
                            color={theme.COLORS.GREY}
                        />
                    }
                />
            )
        },
        {
            title: 'Senha',
            description: `Legal! Agora vamos criar uma senha...`,
            input: (
                <Input
                    label='Senha'
                    placeholder='***********'
                    leftIcon={
                        <Icon
                            name='key'
                            size={24}
                            color={theme.COLORS.GREY}
                        />
                    }
                />
            )
        },
    ]

    const renderInput = () => {
        return (
            <>
                <StepDescriptionContainer>
                    <StepDescription>{steps[stepPosition].description}</StepDescription>
                </StepDescriptionContainer>
                {steps[stepPosition].input}
            </>
        )
    }
      

    return (
        <Container>
            <Header>
                <Logo />
            </Header>
            <Content>
                {
                    loading
                    ?
                    <Loading />
                    :
                    finished ? 
                    <Animation 
                        src={require('../../../public/animations/success.json')}
                        onAnimationFinish={handleLogin}
                    />
                    :
                    <>
                        <StepIndicator
                            stepCount={steps.length}
                            // customStyles={customStyles}
                            currentPosition={stepPosition}
                            labels={steps.map(step => step.title)}
                            renderStepIndicator={({position, stepStatus}) => {
                                return(
                                    <Icon
                                        name={
                                            position == 0 ? 'user' :
                                            position == 1 ? 'at' :
                                            position == 2 ? 'phone' :
                                            position == 3 ? 'key' :
                                            position
                                        }
                                        size={20}
                                        color={stepStatus === 'current' ? theme.COLORS.PRIMARY : theme.COLORS.WHITE}
                                    />
                                )
                            }}
                            renderLabel={() => <Text></Text>}
                        />

                
                        <InputContent>
                            {renderInput()}
                        </InputContent>
                        <ButtonsContainter>
                            <Button round disabled={stepPosition === 0} style={styles.buttonsStep} onPress={() => onPageChange(stepPosition - 1)}>
                                Anterior
                            </Button>
                            <Button round style={styles.buttonsStep} onPress={steps.length-1 == stepPosition ? handleSubmit : () => onPageChange(stepPosition + 1)}>
                                {steps.length-1 == stepPosition ? 'Finalizar' : 'Proximo'}
                            </Button>
                        </ButtonsContainter>
                    </>
                }
            </Content>
        </Container>
        
    )
}

const styles = StyleSheet.create({
    buttonsStep: {
        width: 120,
    }
});

export default SignUp
