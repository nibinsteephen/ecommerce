import React from "react";
import styled from "styled-components";

export default function MiniTitle({ title }) {
    return <Title>{title}</Title>;
}

const Title = styled.p`
    color: #0A0A0A;
    font-family: 'DMSansmedium';
    font-size: 17px;
`;
