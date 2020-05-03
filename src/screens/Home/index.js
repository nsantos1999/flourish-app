import React, { useState } from 'react'
import {
    StyleSheet,
    ScrollView,
    Dimensions
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { PieChart } from 'react-native-chart-kit';
// import { LinearGradient as Gradient } from 'expo';

import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../store/auth/actions';

import {
    Button
} from 'galio-framework';

import Header from './Header';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    Container,
    Title,
    Card,
    CardTitle,
    CardDescription,
    LevelInformationContainer,
    LevelInformationText
} from './styles';

import { ProgressBar } from 'react-native-paper';

import theme from '../../theme';

const chartConfig={
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16
    },
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
    }
}

const dataCredito = [
    {
      name: "Comida",
      gasto: 125,
      color: "#3e662c",
      legendFontColor: theme.COLORS.WHITE,
      legendFontSize: 10
    },
    {
      name: "Gasolina",
      gasto: 453,
      color: "#2d4a20",
      legendFontColor: theme.COLORS.WHITE,
      legendFontSize: 10
    }
];
const dataDebito = [
    {
      name: "Viagens",
      gasto: 920,
      color: "#4a7a35",
      legendFontColor: theme.COLORS.WHITE,
      legendFontSize: 10
    },
    {
      name: "Comida",
      gasto: 52,
      color: "#3e662c",
      legendFontColor: theme.COLORS.WHITE,
      legendFontSize: 10
    },
    {
      name: "Gasolina",
      gasto: 25,
      color: "#2d4a20",
      legendFontColor: theme.COLORS.WHITE,
      legendFontSize: 10
    }
];

const screenWidth = Dimensions.get("window").width;

const Home = ({
    navigation
}) => {
    const dispatch = useDispatch();

    const user = useSelector(({auth}) => auth);

    const [ tipoGasto, setTipoGasto ] = useState(1);

    const data = tipoGasto == 1 ? dataCredito : dataDebito;
    
    const resumoMes = () => {
        const creditoDebito = () => (
            <>
                {/* <CardTitle>Crédito ou Débito?</CardTitle> */}
                <RNPickerSelect
                    onValueChange={(value) => setTipoGasto(value)}
                    items={[
                        { label: 'Crédito', value: 1, color: theme.COLORS.WHITE },
                        { label: 'Débito', value: 2, color: theme.COLORS.WHITE},
                    ]}
                    value={tipoGasto}
                    useNativeAndroidPickerStyle={true}
                    style={{
                        inputIOS: {
                            color: 'white',
                            paddingTop: 13,
                            paddingHorizontal: 10,
                            paddingBottom: 12,
                        },
                        inputAndroid: {
                            color: 'white',
                        },
                        placeholderColor: 'white',
                        underline: { borderTopWidth: 0 },
                    }}
                />
            </>
        );
        const renda = () => (
            <>
            <CardTitle>Renda</CardTitle>
            <ProgressBar 
                progress={0.3} color={theme.COLORS.WHITE}
            />
            <CardDescription>R$1.500,00 de 5.000,00</CardDescription>
            </>
        );
        const gastos = () => (
            <>
            <CardTitle>Gastos - R${data.reduce((sum, gasto) => sum+gasto.gasto, 0)}</CardTitle>
            <PieChart
                data={data}
                width={screenWidth}
                height={200}
                chartConfig={chartConfig}
                accessor="gasto"
                backgroundColor="transparent"
                absolute
            />
            </>
        );
        return (
            <>
                <Title>Resumo do Mês</Title>
                <Card>
                    {creditoDebito()}

                    {renda()}

                    {gastos()}

                </Card>
            </>
        )
    }

    const nivel = () => {
        const levelInformation = () => (
            <>
                <LevelInformationContainer>
                    <Icon
                        name='trophy'
                        size={24}
                        color={theme.COLORS.YELLOW}
                    />
                    <LevelInformationText>Nível 3 - Módulo personalizado!</LevelInformationText>
                </LevelInformationContainer>
            </>
        );
        return (
            <>
                <Title>Benefícios pelo seu nível</Title>
                <Card>
                    {levelInformation()}
                </Card>
            </>
        )
    }

    return (
        <>
        <Header />
        <Container>
            <ScrollView 
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
            >
                {resumoMes()}
                {nivel()}
                {/* <Button round onPress={() => dispatch(authActions.logout())}>Logout</Button> */}
            </ScrollView>
        </Container>
        </>
    )
}


export default Home
