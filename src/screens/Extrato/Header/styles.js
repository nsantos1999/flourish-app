import styled from 'styled-components';

import theme from '../../../theme';

export const Container = styled.View`
    flexDirection: row;
    justifyContent:space-between;
    backgroundColor: ${theme.COLORS.PRIMARY}
    padding: 10px;
`;

export const SaldoContainer = styled.View`
    justifyContent:${props => props.centered ? 'center' : 'space-around'}
`;

export const GroupContainer = styled.View`
    flexDirection: row;
`;

export const TextSaldo = styled.Text`
    fontSize: 20;
    color: ${theme.COLORS.WHITE}
    fontWeight: bold;
`;
export const TextSync = styled.Text`
    fontSize: 10;
    color: ${theme.COLORS.WHITE}
`;
export const SyncContainer = styled.Text`
    flexDirection: row;
    justifyContent:space-around;
`;
