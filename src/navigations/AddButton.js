import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

import theme from '../theme';

const AddButton = ({
    navigation
}) => {
    return (
        <View>
            <TouchableOpacity
                style={{
                    // borderWidth:1,
                    // borderColor: "rgba(0,0,0,0.2)",
                    alignItems:'center',
                    justifyContent:'center',
                    width:80,
                    height:50,
                    // position: "absolute",
                    bottom: 14,                             
                    // right: 10,
                    backgroundColor:theme.COLORS.PRIMARY_DARK,
                    borderRadius:100,
                    // elevation: 10,
                }}
                onPress={() => navigation.push()}
            >
                <Icon name="plus" color={theme.COLORS.WHITE} size={30} />
            </TouchableOpacity>
        </View>
    )
}

export default AddButton
