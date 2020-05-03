import styled from 'styled-components/native';

import theme from '../../theme';

export const Container = styled.View`
    flex: 1;
    paddingLeft:20px;
    paddingRight:20px;
    paddingBottom:20px;
    backgroundColor: ${theme.COLORS.WHITE}
`;

export const Title = styled.Text`
    color: ${theme.COLORS.PRIMARY};
    fontSize: 24;
    fontWeight: bold;
    marginBottom:5;
    marginTop:15;
`;


export const Card = styled.View`
    backgroundColor: ${theme.COLORS.PRIMARY};
    padding: 10px;
    borderRadius: 7px;
`;

export const CardTitle = styled.Text`
    color: ${theme.COLORS.WHITE};
    fontSize: 20;
    fontWeight: bold;
    marginBottom:5;
`;

export const CardDescription = styled.Text`
    color: ${theme.COLORS.WHITE};
    fontSize: 12;
    marginBottom:5;
    textAlign: right;
`;

export const LevelInformationContainer = styled.View`
    flexDirection: row;
    alignItems: center;
    flex:1;
    padding:5px;
`;
export const LevelInformationText = styled.Text`
    color: ${theme.COLORS.WHITE};
    fontSize: 16;
    marginLeft:10px;
    fontWeight:bold;
`;
