import React from "react";
import styled from "styled-components";

function UserDetails() {
    return (
        <Container>
            <ProfileImage>
                <img src="/images/profile-image.png" alt="Profile Image" />
            </ProfileImage>
            <Details>
                <Name>Arshal Ameen</Name>
                <Designation>Owner</Designation>
            </Details>
            <DropDown>
                <img src="/icons/dropdown.svg" alt="Dropdown arrow" />
            </DropDown>
        </Container>
    );
}

export default UserDetails;

const Container = styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-left: 1px solid #d4d4d4;
    cursor: default;
`;

const ProfileImage = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    img {
        border-radius: 50%;
    }
`;

const Details = styled.div`
    margin-right: 16px;
`;

const Name = styled.p`
    line-height: 20px;
    font-size: 16px;
    font-family: 'DMSansmedium';
    color: #0A0A0A;
`;

const Designation = styled.p`
    line-height: 18px;
    font-size: 14px;
`;

const DropDown = styled.div`
    width: 16px;
    cursor: pointer;
`;
