import React from "react";
import styled from "styled-components";

export default function BlueButton({ image, name, onClick, width, height, type, background, border, color }) {
    return (
        <Container onClick={onClick} $width={width} $height={height} type={type} $background={background} $border={border}>
            {image && (
                <Icon>
                    <img src={image} alt={name} />
                </Icon>
            )}

            <Text $color={color}>{name}</Text>
        </Container>
    );
}

const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: none;
    cursor: pointer;
    padding: 5px 16px;
    border-radius: 4px;
    border: 1px solid ${({ $border }) => $border || "#007DDC"};
    background-color: ${({ $background }) => $background || "#007DDC"};
    width: ${({ $width }) => $width || "auto" };
    height: ${({ $height }) => $height || "auto" };
`;

const Icon = styled.div``;

const Text = styled.p`
    font-size: 14px;
    color: ${({ $color }) => $color || "#FFFFFF"};
    font-family: 'DMSansmedium';
`
