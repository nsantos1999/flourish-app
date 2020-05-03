import styled from 'styled-components/native';

import theme from '../../../theme';

export const Container = styled.View`
    backgroundColor: ${props => props.backgroundColor}
    justifyContent:space-between;
    alignItems:center;
    flexDirection:row;
    padding:10px;
    paddingTop:20px;
    paddingBottom:20px;
    width:100%;
`;

export const InfoContainer = styled.View`
    alignItems:center;
    flexDirection:row;
`;
export const LevelContainer = styled.View`
    alignItems:center;
    flexDirection:row;
`;

export const TextName = styled.Text`
    color: ${theme.COLORS.WHITE};
    fontSize: 20;
`;
export const TextLevel = styled.Text`
    color: ${theme.COLORS.WHITE};
    fontSize: 12;
    marginLeft: 5px;
`;

export const SaldoContainer = styled.View`
    flex:1
    alignItems:flex-end;
`;

export const NomeContainer = styled.View`
`;


export const TextSaldo = styled.Text`
    color: ${theme.COLORS.WHITE};
    fontSize: 18;
`;
export const TextSaldoDescription = styled.Text`
    color: ${theme.COLORS.WHITE};
    fontSize: 10;
`;
