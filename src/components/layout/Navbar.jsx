import React from "react";
import NavTitle from "../title/NavTitle";
import styled from "styled-components";
import NavButton from "../buttons/NavButton";
import { adminList, oneRupeeList } from "../../utils/constants";

export default function Navbar() {
    return (
        <Container>
            <div>
                <AdminSection>
                    <NavTitle title={"Admin"} />
                    {adminList.map((item, index) => {
                        return (
                            <NavButton
                                key={index}
                                image={item.image}
                                name={item.name}
                                link={item.link}
                            />
                        );
                    })}
                </AdminSection>
                <OneRupeeSection>
                    <NavTitle title={"OneRupee"} />
                    {oneRupeeList.map((item, index) => {
                        return (
                            <NavButton
                                key={index}
                                image={item.image}
                                name={item.name}
                                link={item.link}
                            />
                        );
                    })}
                </OneRupeeSection>
            </div>
            <NavButton image="/icons/settings.svg" name="Settings" link="/settings"/>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 98%;
`;
const AdminSection = styled.div``;
const OneRupeeSection = styled.div``;