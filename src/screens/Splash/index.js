import React from 'react'

import {
    Container,
    Logo,
} from './styles';

const Splash = () => {
    return (
        <Container>
            <Logo
                source={require('../../../public/images/utopia.png')}
            />
        </Container>
    )
}

export default Splash
