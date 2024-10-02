import React from "react";
import styled from "styled-components";

export default function Progress({ status }) {
    return (
        <Container>
            {status === "secondPhase" ? <Tick><img src="/icons/white-tick.svg" alt="white tick" /></Tick> : <One>1</One>}
            <Line></Line>
            <Two>2</Two>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
`;
const One = styled.p`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #007ddc;
    border-radius: 8px;
    font-size: 15px;
    font-family: "DMSansmedium";
    color: #0a0a0a;
`;

const Tick = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #007ddc;
    background-color: #007ddc;
    border-radius: 8px;
    padding: 8px;
`
const Line = styled.div`
    width: 35px;
    height: 1px;
    border: 2px dashed #007ddc;
`;
const Two = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #eeeeee;
    color: #d4d4d4;
`;
