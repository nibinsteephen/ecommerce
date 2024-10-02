import React from "react";
import styled from "styled-components";

const SmallLoader = () => {
    return (
        <Container>
            <Spinner />
        </Container>
    );
};

export default SmallLoader;
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Spinner = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: relative;
    animation: rotate 1s linear infinite;

    &::before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 2px solid #c9d2db;
        animation: prixClipFix 2s linear infinite;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes prixClipFix {
        0% {
            clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
        }
        25% {
            clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
        }
        50% {
            clip-path: polygon(
                50% 50%,
                0 0,
                100% 0,
                100% 100%,
                100% 100%,
                100% 100%
            );
        }
        75% {
            clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
        }
        100% {
            clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
        }
    }
`;
