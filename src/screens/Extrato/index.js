import React from 'react';
import { View, Dimensions } from 'react-native';

import { 
    Container,
    CardGraph,
    TextExtratoCard,
    CardContent,
    CardRow,
    TextExtratoCardGraph,
    GraphContent,
    BarGraph
} from './styles';

import theme from '../../theme';

import Card from './Card';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Button,
} from 'galio-framework';

import moment from 'moment';

import 'moment/locale/pt-br'  // without this line it didn't work
moment.locale('pt-BR');

import toReal from '../../helpers/toReal';

const lancamentos = [
    {
        date: moment('10/01/2020','DD/MM/YYYY').format('LL'),
        values: [
            {
                name: 'Netflix',
                value: -30.20
            },
            {
                name: 'Aluguel',
                value: -900.00
            },
            {
                name: 'Rendimento',
                value: 15.20
            },
        ]
    },
    {
        date: moment('15/01/2020','DD/MM/YYYY').format('LL'),
        values: [
            {
                name: 'Pagamento',
                value: 5000
            },
            {
                name: 'Pagamento Conta de Luz',
                value: -120.20
            },
            {
                name: 'Pagamento Conta de Água',
                value: -80.60
            },
        ]
    },
    {
        date: moment('20/01/2020','DD/MM/YYYY').format('LL'),
        values: [
            {
                name: 'Hipermercado Carrefour',
                value: -600.30
            },
            {
                name: 'Lanchonete da Maria',
                value: -50
            },
            {
                name: 'C&A',
                value: -265.90
            },
        ]
    }

]

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

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
        },
    ],
};


const screenWidth = Dimensions.get("window").width;

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

import Header from './Header';

const Extrato = ({
    navigation
}) => {

    const graphs = () => {
        return (
            <CardGraph>
                <CardContent row>
                    <Button
                        onlyIcon
                        icon="remove-circle"
                        iconFamily="material-icons"
                        iconSize={20}
                        iconColor={theme.COLORS.WHITE}
                        color="transparent"
                        onPress={() => console.log("Pagos")}
                    />
                    <View>
                        <TextExtratoCardGraph>
                            Recebido
                        </TextExtratoCardGraph>
                        <TextExtratoCardGraph>
                            {toReal(1000)}
                        </TextExtratoCardGraph>
                    </View>
                </CardContent>
                <CardContent>
                    <GraphContent>
                        <BarGraph 
                            color={theme.COLORS.PRIMARY}
                            size={60}
                        />
                        <BarGraph 
                            color={theme.COLORS.YELLOW}
                            size={20}
                        />
                    </GraphContent>
                    {/* <BarChart
                        style={{ flex:1 }}
                        data={data}
                        width={screenWidth}
                        height={220}
                        yAxisLabel="$"
                        chartConfig={chartConfig}
                        verticalLabelRotation={30}
                    /> */}
                </CardContent>
                <CardContent row>
                    <View>
                        <TextExtratoCardGraph>
                            Pagos
                        </TextExtratoCardGraph>
                        <TextExtratoCardGraph>
                            {toReal(192.74)}
                        </TextExtratoCardGraph>
                    </View>
                    <Button
                        onlyIcon
                        icon="add-circle"
                        iconFamily="material-icons"
                        iconSize={20}
                        iconColor={theme.COLORS.WHITE}
                        color="transparent"
                        onPress={() => console.log("Pagos")}
                    />
                </CardContent>
            </CardGraph>
        )
    }

    return (
        <>
        <Header 
            navigation={navigation}
        />
        {graphs()}
        <Container>
            {
                lancamentos.map(lancamento => (
                    <Card
                        title={lancamento.date}
                    >
                        <CardContent>
                            {
                                lancamento.values.map(value => (
                                    <CardRow>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            {
                                                value.value < 0 ? 
                                                <Icon name="remove-circle" color={theme.COLORS.ERROR} style={{marginRight: 10}} />
                                                :
                                                <Icon name="add-circle" color={theme.COLORS.PRIMARY} style={{marginRight: 10}} />
                                            }
                                            <TextExtratoCard>{value.name}</TextExtratoCard>
                                        </View>
                                        <TextExtratoCard bold style={{color:value.value < 0 ? theme.COLORS.ERROR : theme.COLORS.PRIMARY}}>{value.value < 0 ? '-' : '+'}{value.value < 0 ? toReal(value.value * -1): toReal(value.value)}</TextExtratoCard>
                                    </CardRow>
                                ))
                            }
                            
                        </CardContent>
                    </Card>
                ))
            }
        </Container>
        </>
    )
}

export default Extrato;