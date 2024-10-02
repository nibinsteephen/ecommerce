import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function NavButton({ image, name, link }) {
    return (
        <NavButtonContainer>
            <NavLink to={link} className={({ isActive }) => (isActive ? "active" : "")}>
                <EachButton className="con">
                    <Icon className="icon">
                        <img src={image} alt={name} />
                    </Icon>
                    <Text>{name}</Text>
                </EachButton>
            </NavLink>
        </NavButtonContainer>
    );
}

const NavButtonContainer = styled.div`
    width: 100%;
    padding: 0 5px;
    a {
        width: 100%;
        border-radius: 8px;
        position: relative;
        transition: all 0.3s ease-in-out;
    }
    a::before {
        content: "";
        width: 4px;
        height: 60%;
        background-color: #ffffff;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0%, -50%);
        border-radius: 5px;
        transition: background-color 0.3s ease-in-out;
    }
    .active {
        background-color: #007ddc40;
    }
    .active::before {
        background-color: #007ddc;
        transition: background-color 0.3s ease-in-out;
    }
    .active p{
        color: #007DDC !important;
    }
`;
const EachButton = styled.div`
    width: 100%;
    padding: 0 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    height: 45px;
`;

const Icon = styled.div`
    width: 20px;
`;

const Text = styled.p`
    font-family: "DMSanssemibold";
    font-size: 15px;
`;
