import styled from 'styled-components';

import theme from '../../../theme';

export const Container = styled.View`
    elevation:2;
    borderWidth: 2;
    borderColor: ${theme.COLORS.PRIMARY};
    borderRadius:10;
    marginBottom:20px;
`;
export const Header = styled.View`
    padding:10px;
    borderWidth: 2;
    backgroundColor: ${theme.COLORS.PRIMARY};
    borderColor: ${theme.COLORS.PRIMARY};
    borderTopLeftRadius:7px;
    borderTopRightRadius:7px;
`;
export const TitleHeader = styled.Text`
    color: ${theme.COLORS.WHITE}
    marginLeft:10px;
    fontWeight: bold;
    fontSize: 20;
`;
export const Content = styled.View`
    padding:10px;
`;
