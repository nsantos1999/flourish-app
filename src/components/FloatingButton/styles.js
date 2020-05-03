import styled from 'styled-components';

import theme from '../../theme';

export const FloatingActionButton = styled.TouchableOpacity`
    border:1px solid rgba(0,0,0,0.2);
    align-items:center;
    justify-content:center;
    width:55;
    height:55;
    position: absolute;
    bottom: 20;                                          
    right: 20;
    backgroundColor:${theme.COLORS.PRIMARY};
    borderRadius:100;
    elevation: 10;
`;
