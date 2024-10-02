import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import SmallLoader from "../loaders/SmallLoader";
import DropdownOptions from "./DropdownOptions";

const DropdownInput = ({
    name = "",
    label = "",
    value = "",
    isLoading = false,
    placeholder = "",
    displayKey = "",
    valueKey = "",
    isReadOnly = false,
    options = [{ title: "", data: "" }],
    onChange = (value = { title: "", data: "" }) => {},
    errorMessage = "",
    showSearch = false,
    disabled = false,
}) => {
    const [showDropdown, setDropdown] = useState(false);
    const [positions, setPosition] = useState({
        top: null,
        bottom: null,
    });

    const clickHandler = (e) => {
        if (!disabled) {
            if (isReadOnly) return;
            setDropdown(!showDropdown);

            if (e.pageY + 300 > window.innerHeight) {
                setPosition({
                    top: null,
                    bottom: "110%",
                });
            } else {
                setPosition({
                    bottom: null,
                    top: "105%",
                });
            }
        }
    };

    const currentlySelectedValue =
        options?.find((item) => item[valueKey] === value) || false;

    return (
        <Container>
            <label htmlFor={name}>{label}</label>
            <div className="input-wrapper">
                {isLoading ? (
                    <div className="loader">
                        <SmallLoader />
                    </div>
                ) : (
                    <>
                        <div
                            id={name}
                            className="display center-align"
                            onClick={clickHandler}
                        >
                            {currentlySelectedValue ? (
                                <span className="title">
                                    {currentlySelectedValue[displayKey]}
                                </span>
                            ) : (
                                <span className="title placeholder">
                                    {placeholder}
                                </span>
                            )}
                            <motion.span
                                animate={{
                                    rotate: showDropdown ? -180 : 0,
                                }}
                                transition={{
                                    type: "spring",
                                }}
                                className="icon svg-container"
                            >
    
                                <img src="/icons/dropdown.svg" alt="" />
                            </motion.span>
                        </div>
                        <AnimatePresence>
                            {showDropdown && (
                                <DropdownOptions
                                    showSearch={showSearch}
                                    positions={positions}
                                    closeHandler={() => setDropdown(false)}
                                    name={name}
                                    onChange={onChange}
                                    options={options}
                                    displayKey={displayKey}
                                />
                            )}
                        </AnimatePresence>
                    </>
                )}
            </div>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Container>
    );
};

export default DropdownInput;

const Container = styled.div`
    /* margin-bottom: 20px; */
    position: relative;
    border: 1px solid #EEEEEE;
    background-color: #F8F8F8;
    width: 60%;

    &:focus-within {
        border-color: #233256;
    }

    .loader {
        padding: 6px;
    }

    label {
        color: #6a7683;
        font-size: 14px;
    }
    .input-wrapper {
        position: relative;
        gap: 8px;
        padding-left: 10px;
        /* margin-top: 6px; */

        .display {
            justify-content: end;
            gap: 20px;
            cursor: pointer;
            padding: 10px 0;
            display: flex;

            span.title {
                flex: 1;
                font-family: "DMSansmedium";
                font-size: 14px;
                color: #212529;

                &.placeholder {
                    color: #6a7683a1;
                }
            }
            span.icon {
                display: flex;
                align-items: center;
                width: 15px;
                height: 15px;
                margin-right: 10px;
            }
        }
    }
`;
const ErrorMessage = styled.p`
    position: absolute;
    right: 0;
    bottom: -18px;
    font-size: 12px;
    color: red;
`;
