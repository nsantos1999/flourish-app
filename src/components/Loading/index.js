import React from 'react'
import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native';

const Loading = () => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <LottieView 
                source={require('../../../public/animations/loader.json')} 
                style={{width: 350}}
                autoPlay 
                // onAnimationFinish={onAnimationFinish}
            />
        </View>
    )
}

export default Loading
