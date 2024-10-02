import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import HeaderSection from "./HeaderSection";

function DashboardLayout() {
    return (
        <Container>
            <Header>
                <HeaderSection/>
            </Header>
            <Content>
                <NavContainer>
                    <Navbar />
                </NavContainer>
                <OutletContainer>
                    <Outlet />
                </OutletContainer>
            </Content>
        </Container>
    );
}

export default DashboardLayout;

const Container = styled.section`
    height: 100vh;
`;

const Header = styled.header`
    height: 9%;
`;

const Content = styled.section`
    height: 91%;
    width: 100%;
    display: flex;
`;

const NavContainer = styled.div`
    width: 14%;
    height: 100%;
`;

const OutletContainer = styled.div`
    width: 86%;
    height: 100%;
    background-color: #F8F8F8;
`;
