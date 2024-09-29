import React from "react";
import styled from "styled-components";

function UserDetails() {
    return (
        <Container>
            <ProfileImage>
                <img src="./images/profile-image.png" alt="Profile Image" />
            </ProfileImage>
            <Details>
                <Name>Arshal Ameen</Name>
                <Designation>Owner</Designation>
            </Details>
            <DropDown>
                <img src="./icons/dropdown.svg" alt="Dropdown arrow" />
            </DropDown>
        </Container>
    );
}

export default UserDetails;

const Container = styled.div``;

const ProfileImage = styled.div``

const Details = styled.div``

const Name = styled.div``

const Designation = styled.div``

const DropDown = styled.div``


