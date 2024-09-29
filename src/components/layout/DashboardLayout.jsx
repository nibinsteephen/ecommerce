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

const Container = styled.section``;

const Header = styled.header``;

const Content = styled.section``;

const NavContainer = styled.div``;

const OutletContainer = styled.div``;
