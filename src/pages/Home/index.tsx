import React from 'react';
import styled from 'styled-components/native';

export default function Home() {
    return (
        <ContainerHome>
            <HeaderHome> Home Page </HeaderHome>
        </ContainerHome>
    );
}

const ContainerHome = styled.View `
    flex: 1;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
`;

const HeaderHome = styled.Text `
    font-size: 30px;
`;
