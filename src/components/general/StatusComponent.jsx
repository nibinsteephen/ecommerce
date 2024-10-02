import React from "react";
import styled from "styled-components";

function StatusComponent({ status }) {
    let StatusTitle = "";
    if (status === "active") {
        StatusTitle = "Active";
    } else {
        StatusTitle = "Inactive";
    }
    return <Container $status={status}>{StatusTitle}</Container>;
}

export default StatusComponent;

const Container = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    width: 80px;
    height: 30px;
    background-color: ${({ $status }) =>
        $status === "active" ? "#d7ffee" : "#FCEAE8"};
    color: ${({ $status }) => ($status === "active" ? "#00a26c" : "#E02B1D")};
    font-size: 14px;
    text-transform: capitalize;
`;
