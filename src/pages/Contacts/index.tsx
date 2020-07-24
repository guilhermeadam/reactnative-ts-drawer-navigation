import React from 'react';
import styled from 'styled-components/native';

export default function Contacts() {
    return (
        <ContainerContacts>
            <HeaderContacts> Contacts Page </HeaderContacts>
        </ContainerContacts>
    );
}

const ContainerContacts = styled.View `
    flex: 1;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
`;

const HeaderContacts = styled.Text `
    font-size: 30px;
`;