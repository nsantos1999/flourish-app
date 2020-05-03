import styled from 'styled-components';

import theme from '../../theme';


export const Container = styled.View`
    flex:1;

`;

export const DescriptionContainer = styled.View`
    flex: 7;
    backgroundColor: ${theme.COLORS.PRIMARY};
    marginBottom: 10;
    padding:30px
`

export const ButtonsContainer = styled.View`
    flex: 2;
    alignItems:center
    justifyContent: space-around;
`
export const Logo = styled.Image`
    width: 200;
    height: 50;
    resizeMode: stretch;
    marginTop: 30
    marginLeft: 30
`
export const AnimationContainer = styled.View`
    flexDirection: row;
    flex:1;
    justifyContent:flex-end;
    alignItems:flex-end;
    padding: 10px;
`;

export const TextDescription = styled.Text`
    color: ${theme.COLORS.WHITE}
    fontSize: 25
`;
export const DescriptionInformations = styled.View`
    flexDirection: row;
    flex:1;
    paddingTop:20px
    paddingRight:20px
`;