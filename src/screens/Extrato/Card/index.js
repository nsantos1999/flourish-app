import React from 'react';

import { 
    Container,
    Header,
    TitleHeader,
    Content
} from './styles';

const Card = ({
    title,
    children
}) => {
    return (
        <Container>
            <Header>
                <TitleHeader>{title}</TitleHeader>
            </Header>
            <Content>
                {children}
            </Content>
        </Container>
    );
}

export default Card;