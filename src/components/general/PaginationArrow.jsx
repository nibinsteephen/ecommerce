import React from "react";
import styled from "styled-components";

export default function PaginationArrow({direction = "left" }) {
    return (
        <Arrow direction={direction}>
            <img src="/icons/pagination-left.svg" alt="left arrow" />
        </Arrow>
    );
}

const Arrow = styled.div`
    width: 15px;
    transform: ${({direction}) => (direction === "right" ? "rotate(180deg)" : "none")};
`;
