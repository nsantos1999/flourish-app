import styled from 'styled-components/native';

import theme from '../../theme';

export const Container = styled.ScrollView`
    flex:1;
    paddingRight:20px;
    paddingLeft:20px;
    marginBottom:80px;
    marginTop:20px;
`;

export const InputContainer = styled.View`
    marginBottom:10px;
    marginTop:10px;
`;

export const InputDescription = styled.Text`
    color:${theme.COLORS.PRIMARY}
    fontWeight: bold;
`;
export const InputValue = styled.Text`
    color:${theme.COLORS.GREY}
    marginLeft: 10px;
`;

export const DirectionRow = styled.View`
    flexDirection:row;
    justifyContent:${props => props.withSpace ? 'space-between' : 'flex-start'};
    alignItems:center;
`;

export const AddCategoriaBtn = styled.TouchableOpacity`
    padding: 5px;
    backgroundColor: ${theme.COLORS.PRIMARY}
    borderRadius: 2px;
`;
export const AddCategoriaTxt = styled.Text`
    color:${theme.COLORS.WHITE} 
`;

export const ModalContainer = styled.View`
    justifyContent:center;
    alignItems:center;
    
    backgroundColor:${theme.COLORS.WHITE}
`;
