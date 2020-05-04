import styled from 'styled-components';

import theme from '../../theme';


export const Container = styled.View`
    flex:1;

`;

export const DescriptionContainer = styled.View`
    flex: 7;
    backgroundColor: ${theme.COLORS.PRIMARY};
    marginBottom: 10px;
    paddingBottom:30px
    paddingLeft:30px
    paddingRight:30px
`

export const ButtonsContainer = styled.View`
    flex: 2;
    alignItems:center
    justifyContent: space-around;
`
export const Logo = styled.Image`
    width: 200px;
    height: 50px;
    resizeMode: stretch;
    marginTop: 30px;
    marginLeft: 30px;
`
export const AnimationContainer = styled.View`
    flex:1;
    alignItems:flex-end;
`;

export const TextDescription = styled.Text`
    color: ${theme.COLORS.WHITE}
    fontSize: 22;
    width: 200px;
`;
export const DescriptionInformations = styled.View`
    flexDirection: row;
    justifyContent:space-between;
    flex:1;
    
`;