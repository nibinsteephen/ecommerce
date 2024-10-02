import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import debounce from "../../utils/functions";

const Search = ({ inputWidth, q }) => {
    // State for the search query
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchInput, setSearchInput] = useState("");

    const handleSearchInputChange = (event) => {
        const query = event.target.value;

        const debouncedSearch = debounce(() => {
            searchParams.set(q, query);
            setSearchParams(searchParams);
        }, 500);

        setSearchInput(query);
        debouncedSearch();
    };

    // Function to handle changes in the search input

    return (
        <Container className="searchContainer">
            <SearchContainer>
                <SearchIcon>
                    <img src="/icons/Search.svg" alt="" />
                </SearchIcon>
                <SearchInput
                    type="text"
                    placeholder="Search"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                    width={inputWidth}
                />
            </SearchContainer>
        </Container>
    );
};

export default Search;

const Container = styled.div``;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 4px;
    background-color: #ffffff;
    padding: 7px 12px;
    gap: 10px;
    height: 35px;
`;

const SearchInput = styled.input`
    width: ${({ width }) => width || "100%"};
`;

const SearchIcon = styled.div`
    width: 18px;
`;
