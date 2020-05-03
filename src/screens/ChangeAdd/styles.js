import styled from 'styled-components/native';

import theme from '../../theme';

export const Container = styled.View`
    flex:1;
    alignItems:center;
    justifyContent:center;
    backgroundColor: ${theme.COLORS.PRIMARY};
    padding: 20px;
`;
export const Row = styled.View`
`;

export const Card = styled.TouchableOpacity`
    width:300;
    height:250;
    backgroundColor: ${theme.COLORS.WHITE};
    alignItems:center;
    justifyContent:center;
    margin:10px;
    borderRadius: 20px;
    elevation: 5;
`;
