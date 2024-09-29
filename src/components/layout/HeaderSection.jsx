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
                        src="./icons/notification-icon.svg"
                        alt="Notification"
                    />
                </NotifiactionIcon>
                <UserDetails></UserDetails>
            </RightHead>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Logo = styled.div`
    width: 150px;
    height: 30px;
    border-radius: 40px;
    background-color: #d9d9d9;
`;

const RightHead = styled.div``;

const NotifiactionIcon = styled.div``;
