import React from 'react'
import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native';

const Animation = ({
    src,
    onAnimationFinish=null
}) => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <LottieView 
                source={src} 
                style={{width: 450}}
                autoPlay 
                loop={onAnimationFinish==null}
                onAnimationFinish={onAnimationFinish}
            />
        </View>
    )
}

export default Animation
