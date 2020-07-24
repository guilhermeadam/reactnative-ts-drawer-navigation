import React from 'react';
import styled from 'styled-components/native';

export default function Home() {
    return (
        <ContainerSettings>
            <HeaderSettings> Settings Page </HeaderSettings>
        </ContainerSettings>
    );
}

const ContainerSettings = styled.View `
    flex: 1;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
`;

const HeaderSettings = styled.Text `
    font-size: 30px;
`;