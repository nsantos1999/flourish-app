import styled from 'styled-components';

import theme from '../../theme';

export const Container = styled.ScrollView`
    padding:10px;
    flex:1;
`;

export const CardGraph = styled.View`
    flexDirection: row;
    elevation: 2;
    justifyContent:space-around;
    backgroundColor: ${theme.COLORS.PRIMARY}
    marginBottom:20px;
    borderRadius: 7px;
    padding:10px;
    margin: 10px;
`;

export const CardContent = styled.View`
    justifyContent:${props => props.row ? 'space-between' : 'center'};
    
    ${props => props.row ? 'alignItems:center' : ''};
    flexDirection: ${props => props.row ? 'row' : 'column'};
`;

export const GraphContent = styled.View`
    flexDirection:row;
    justifyContent:flex-end;
    alignItems: flex-end;
    backgroundColor: ${theme.COLORS.WHITE};
    borderRadius:7px;
    padding:10px;
`;

export const BarGraph = styled.View`
    width: 30px;
    backgroundColor: ${props => props.color}
    height: ${props => props.size}px;
    marginLeft:5px;
    marginRight:5px;
    justifyContent:flex-end;
    alignItems: flex-end;
`;

export const CardRow = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    marginBottom: 10px;
    marginTop: 10px;
`;


export const TextExtratoCard = styled.Text`
    fontSize: 15;
    fontWeight: ${props => props.bold ? 'bold': 'normal'};

`;
export const TextExtratoCardGraph = styled.Text`
    fontSize: 15;
    fontWeight: bold;
    color: ${theme.COLORS.WHITE};
`;