import React, { useState } from 'react'
import { View, Picker } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input } from 'react-native-elements';

import Modal from 'react-native-modal';

import DatePicker from 'react-native-datepicker';

import Header from './Header';

import {
    Container,
    InputContainer,
    InputDescription,
    InputValue,
    DirectionRow,
    AddCategoriaBtn,
    AddCategoriaTxt,

    ModalContainer
} from './styles';

import FloatingButton from '../../components/FloatingButton';

import theme from '../../theme';

const index = ({
    navigation
}) => {
    const [ tipoRepeticao, setTipoRepeticao ] = useState(0);
    const [ data, setData ] = useState('');
    const [ dataRepitirAte, setDataRepetirAte ] = useState('');
    const [ observacao, setObservacao ] = useState('');
    const [ valor, setValor ] = useState(0);
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ tipoOperacao, setTipoOperacao ] = useState('C');

    const toggleTipo = () => {
        setTipoOperacao(tipoOperacao == 'C' ? 'D' : 'C');
    }

    return (
        <>
        <Header 
            valor={valor}
            setValor={setValor}
            toggleTipo={toggleTipo}
            navigation={navigation}
            tipoOperacao={tipoOperacao}
        />
        <Container>
            <InputContainer>
                <InputDescription>Descrição</InputDescription>
                <Input
                    // label='Descrição'
                    placeholder='Adicione a descrição'
                    leftIcon={
                        <Icon
                            name='pen'
                            size={16}
                            color={theme.COLORS.GREY}
                        />
                    }
                    inputStyle={{fontSize: 15}}
                />
            </InputContainer>
            <InputContainer>
                <InputDescription>Categoria</InputDescription>
                <DirectionRow withSpace>
                    <DirectionRow>
                        <Icon
                            name='star'
                            size={20}
                            color={theme.COLORS.GREY}
                        />
                        <InputValue>Gasto Pessoal</InputValue>
                    </DirectionRow>
                    <AddCategoriaBtn>
                        <AddCategoriaTxt>Adicionar categoria</AddCategoriaTxt>
                    </AddCategoriaBtn>
                </DirectionRow>
                
            </InputContainer>
            <InputContainer>
                <InputDescription>Conta</InputDescription>
                <DirectionRow>
                    <Icon
                        name='credit-card'
                        size={20}
                        color={theme.COLORS.GREY}
                    />
                    <InputValue>Cartão de Crédito</InputValue>
                </DirectionRow>
                
            </InputContainer>
            <InputContainer>
                <InputDescription>Data</InputDescription>
                <DirectionRow>
                    <Icon
                        name='calendar-day'
                        size={20}
                        color={theme.COLORS.GREY}
                    />

                    <DatePicker
                        style={{width: 120, marginLeft:20}}
                        date={data}
                        format="DD/MM/YYYY"
                        onDateChange={date => setData(date)}
                        showIcon={false}
                    />  
                    {/* <InputValue onPress={() => setShowData(true)}>04/05/2020</InputValue> */}
                    
                </DirectionRow>
                {/* {showData && (
                    
                )} */}
                
            </InputContainer>
            
            <InputContainer>
                <DirectionRow withSpace>
                    <InputContainer>
                        <InputDescription>Repetir lançamento</InputDescription>
                        <DirectionRow>
                            {/* <Icon
                                name='redo'
                                size={16}
                                color={theme.COLORS.GREY}
                            /> */}
                            <View style={{width:"100%", flex:1}}>
                            <Picker
                                selectedValue={tipoRepeticao}
                                style={{ height: 50, width: 150 }}
                                onValueChange={(value) => {
                                    setTipoRepeticao(value)
                                    console.log("CHANGE",value);
                                }}
                            >
                                <Picker.Item label="Único" value="0" />
                                <Picker.Item label="Repetir" value="1" />
                            </Picker>
                            </View>
                            
                        </DirectionRow>
                    </InputContainer>
                    {
                        tipoRepeticao == 1 && (
                            <InputContainer>
                                <InputDescription>Repetir Até</InputDescription>
                                <DirectionRow>
                                    <Icon
                                        name='calendar-day'
                                        size={20}
                                        color={theme.COLORS.GREY}
                                    />
                                    <DatePicker
                                        style={{width: 120, marginLeft:20}}
                                        date={dataRepitirAte}
                                        format="DD/MM/YYYY"
                                        onDateChange={date => setDataRepetirAte(date)}
                                        showIcon={false}
                                    /> 
                                </DirectionRow>
                                
                            </InputContainer>
                        )
                    }
                </DirectionRow>
                
                
            </InputContainer>
            <InputContainer>
                <InputDescription>Observação</InputDescription>
                <Input
                    // label='Descrição'
                    inputStyle={{fontSize: 15}}
                    placeholder='Observação'
                    leftIcon={
                        <Icon
                            name='comment-alt'
                            size={16}
                            color={theme.COLORS.GREY}
                        />
                    }
                />
                {/* <DirectionRow >
                    <Icon
                        name='comment-alt'
                        size={20}
                        color={theme.COLORS.GREY}
                    />

                    <InputValue onPress={() => setModalVisible(true)}>{observacao || "Nenhuma observação"}</InputValue>
                    
                </DirectionRow> */}
                {/* {showData && (
                    
                )} */}
                
            </InputContainer>

            {/* <Modal
                visible={modalVisible}
                // onRequestClose={() => {
                //     setModalVisible(false);
                // }}
                // onBackButtonPress={() => {
                //     setModalVisible(false);
                // }}
                // backdropOpacity={0.3}
                // useNativeDriver={true}
                // customBackdrop={<View style={{flex: 1}} />}>
            >
                <ModalContainer>
                    <Input
                        label='Observação'
                        placeholder='Observação'
                        leftIcon={
                            <Icon
                                name='comment-alt'
                                size={16}
                                color={theme.COLORS.GREY}
                            />
                        }
                    />
                </ModalContainer>
            </Modal> */}
            
        </Container>
        <FloatingButton
            icon="check"
            onPress={() => console.log('submit')}
        />
        </>
    )
}

export default index
