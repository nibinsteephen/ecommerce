import React, { useState } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import useClickOutside from "react-use-click-outside-hook";

const DropdownOptions = ({
    closeHandler = () => {},
    options = [{ title: "", data: "" }],
    name = "",
    displayKey = "",
    positions = { top: "", bottom: "" },
    onChange = () => {},
    showSearch = false,
}) => {
    const [search, setSearch] = useState("");

    const modalRef = useClickOutside(closeHandler, name);

    const inputChangeHandler = (e) => {
        setSearch(e.target.value);
    };

    return (
        <DropdownContainer
            positions={positions}
            ref={modalRef}
            initial={{
                y: -10,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            exit={{
                y: -10,
                opacity: 0,
            }}
            style={{
                paddingTop: showSearch ? "40px" : "0",
            }}
        >
            {showSearch && (
                <SearchContainer className="search-bar flex align-center">
                    <input
                        type="text"
                        placeholder="search..."
                        onChange={inputChangeHandler}
                        value={search}
                    />
                    <span className="icon center-align">
                        {/* <img src={getImage("/search.svg")} alt="" /> */}
                    </span>
                </SearchContainer>
            )}
            {options
                ?.filter((item) =>
                    item[displayKey]
                        ?.toLowerCase()
                        ?.includes(search?.toLowerCase())
                )
                ?.map((option, i) => (
                    <li
                        key={i}
                        onClick={(e) => {
                            onChange(option);
                            closeHandler();
                        }}
                    >
                        {option[displayKey]}
                    </li>
                ))}
            {!options?.filter((item) =>
                item[displayKey]?.toLowerCase()?.includes(search?.toLowerCase())
            ).length && <li>Not found</li>}
        </DropdownContainer>
    );
};

export default DropdownOptions;

const DropdownContainer = styled(motion.ul)`
    position: absolute;
    left: 0;
    /* top: 95%; */
    max-height: 400px;
    overflow-y: scroll;
    width: 100%;
    z-index: 10;
    border-radius: 6px;
    background-color: #fff;
    border: 1px solid #c9d2db;

    ${({ positions }) => {
        if (positions.top) {
            return css`
                top: ${positions.top};
            `;
        }
        if (positions.bottom) {
            return css`
                bottom: ${positions.bottom};
            `;
        }
    }}

    li {
        padding: 8px;
        font-size: 14px;
        cursor: pointer;

        &:hover {
            background-color: #f5f7fda2;
        }
    }
`;

const SearchContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: calc(100% - 8px);
    background-color: #fff;
    padding: 8px;
    flex: 1;
    border: 1px solid #808080;
    margin: 4px;
    border-radius: 8px;

    input {
        flex: 1;
        font-size: 14px;
    }

    span.icon {
        width: 20px;

        img {
            width: 100%;
        }
    }
`;
