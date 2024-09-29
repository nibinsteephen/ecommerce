import React from "react";
import styled from "styled-components";

export default function NavTitle({ title }) {
    return <Heading>{title}</Heading>;
}

const Heading = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    color: #ADADAD;
    text-transform: capitalize;
    &:after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: #e5e5e5;
    }
`;
