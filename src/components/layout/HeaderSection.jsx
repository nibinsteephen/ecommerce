import React from "react";
import styled from "styled-components";
import UserDetails from "../general/UserDetails";

export default function HeaderSection() {
    return (
        <Container>
            <Logo></Logo>
            <RightHead>
                <NotifiactionIcon>
                    <img
                        src="/icons/notification-icon.svg"
                        alt="Notification"
                    />
                </NotifiactionIcon>
                <UserDetails />
            </RightHead>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    align-items: center;
    height: 100%;
`;

const Logo = styled.div`
    width: 150px;
    height: 30px;
    border-radius: 40px;
    background-color: #d9d9d9;
`;

const RightHead = styled.div`
    display: flex;
    align-items: center;
`;

const NotifiactionIcon = styled.div`
    width: 25px;
    margin-right: 20px;
    cursor: pointer;
    position: relative;
    &::after {
        content: "";
        width: 8px;
        height: 8px;
        border: 1px solid #ffffff;
        border-radius: 50%;
        background-color: #E02B1D;
        position: absolute;
        right: 10%;
        top: 7%;
    }
`;
