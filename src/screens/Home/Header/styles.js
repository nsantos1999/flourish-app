import styled from 'styled-components/native';

import theme from '../../../theme';

export const Container = styled.View`
    backgroundColor: ${theme.COLORS.PRIMARY}  
    justifyContent:space-between;
    alignItems:center;
    flexDirection:row;
    padding:10px;
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

export const SaldoContainer = styled.TouchableOpacity`
    flex:1
    alignItems:flex-end;
`;

export const NomeContainer = styled.View`
`;


export const TextSaldo = styled.Text`
    color: ${theme.COLORS.WHITE};
    fontSize: 18;
    fontWeight: bold;
`;
export const TextSaldoDescription = styled.Text`
    color: ${theme.COLORS.WHITE};
    fontSize: 10;
    fontWeight: bold;
`;
