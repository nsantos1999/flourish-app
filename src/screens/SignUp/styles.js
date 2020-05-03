import styled from 'styled-components/native';

import theme from '../../theme';

export const Container = styled.View`
    flex: 1
`;

export const Header = styled.View`
    flex: 2;
    backgroundColor:${theme.COLORS.PRIMARY}
    justifyContent:center;
    alignItems: center;
`

export const Content = styled.View`
    flex: 8;
    padding: 20px;
`;

export const ButtonsContainter = styled.View`
    flexDirection: row;
    justifyContent: space-around;
    flex:1;
    alignItems:flex-end;
`
export const InputContent = styled.View`
    flex:5;
    justifyContent:center;
`;

export const StepDescription = styled.Text`
    fontSize:20;
    textAlign: center;
    marginBottom:50px;
`;

export const StepDescriptionContainer = styled.View`
    fontSize:20;
    alignItems: center;
    justifyContent: center;
`;