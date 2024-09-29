import React from "react";
import NavTitle from "../title/NavTitle";
import styled from "styled-components";

export default function Navbar() {
    return (
        <Container>
            <AdminSection>
                <NavTitle title={"Admin"} />
            </AdminSection>
        </Container>
    );
}

const Container = styled.div``;
const AdminSection = styled.div``;
