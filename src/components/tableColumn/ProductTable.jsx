import React, { useState } from "react";
import { isElement } from "react-dom/test-utils";
import useClickOutside from "react-use-click-outside-hook";
import styled from "styled-components";
import StatusComponent from "../general/StatusComponent";
import ToggleButton from "../buttons/ToggleButton";

const ProductTable = [
    {
        slug: "slno",
        title: "Sl No",
        width: "8",
    },
    {
        slug: "images",
        title: "Images",
        width: "15",
        isElement: true,
        Element: ({ images }) => {
            return (
                <ImageContainer>
                    <img src={images} alt="image" />
                </ImageContainer>
            );
        },
    },
    {
        slug: "product_name",
        title: "Product Name",
        width: "15",
    },
    {
        slug: "product",
        title: "Product",
        width: "10",
    },
    {
        slug: "created_by",
        title: "Created by",
        width: "15",
    },
    {
        slug: "created_date",
        title: "Created date",
        width: "10",
    },
    {
        slug: "status",
        title: "Status",
        width: "12",
        isElement: true,
        Element: ({ status }) => {
            return <StatusComponent status={status} />;
        },
    },
    {
        slug: "action",
        title: "Action",
        width: "15",
        isElement: true,
        Element: ({ id }) => {
            const [isDropdownOpen, setIsDropdownOpen] = useState(false);

            const toggleDropdown = () => {
                setIsDropdownOpen((prevState) => !prevState);
            };

            const modalRef = useClickOutside(() => {
                setIsDropdownOpen(false);
            }, "three_dot");

            return (
                <DotWrapper>
                    <ButtonWrapper>
                        <ToggleButton />
                    </ButtonWrapper>
                    <EditDelete onClick={toggleDropdown} id="three_dot">
                        <img src="./icons/three-dots.svg" alt="Dropdown" />
                        <Dropdown open={isDropdownOpen} ref={modalRef}>
                            <MenuItem>
                                <div className="iconFrame">
                                    <img src="/icons/view.svg" alt="View" />
                                </div>
                                <ButtonName>view</ButtonName>
                            </MenuItem>
                            <MenuItem>
                                <div className="iconFrame">
                                    <img src="/icons/edit.svg" alt="Edit" />
                                </div>
                                <ButtonName>Edit</ButtonName>
                            </MenuItem>
                        </Dropdown>
                    </EditDelete>
                </DotWrapper>
            );
        },
    },
];

export default ProductTable;

const DotWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
`;

const ButtonWrapper = styled.div`
    margin-right: 25px;
`

const ImageContainer = styled.div`
    display: flex;
    width: 100px;
    height: 80px;

    img {
        width: 100%;
        border-radius: 8px;
    }
`;

const EditDelete = styled.div`
    position: relative;
    width: 25px;
    cursor: pointer;
    overflow: visible;
`;

const Dropdown = styled.div`
    position: absolute;
    top: -50%;
    /* bottom: 50%; */
    left: -10%;
    transform: translate(-100%, -10%);
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow: visible !important;
    padding: 1px 25px;
    z-index: 100;
    display: ${({ open }) => (open ? "block" : "none")};
`;

const MenuItem = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    overflow: visible !important;
    gap: 5px;
    height: 40px;

    .iconFrame {
        width: 15px;
    }
`;

const ButtonName = styled.p`
    color: #363636;
    font-size: 14px;
    font-family: "DMSansmedium";
`;
