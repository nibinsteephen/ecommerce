import React, { useEffect, useState, useId } from "react";
import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import SmallLoader from "../loaders/SmallLoader";
import Pagination from "./Pagination";

const Table = ({
    isLoading = false,
    paginationData = null,
    data = [],
    clickHandler = (data) => {},
    skelton = [],
    container_width = 750,
    container_height,
    isHeadRequired = true,
    error = false,
    tableTitle = null, // Default table title
    iconSrc = null, // Default icon source
    paginationTitle,
    removePadding = false,
}) => {
    const uuid = useId();

    const [pageParams, setParams] = useSearchParams();

    const starting_count = paginationData?.first_item || 1;

    const setPageFilter = (page = 1) => {
        pageParams.set("page", page);
        setParams(pageParams);
    };

    useEffect(() => {
        if (!pageParams.get("page")) {
            setPageFilter(1);
        }
    }, []);

    const isPreviousDisabled = () => {
        return paginationData?.current_page === 1;
    };

    const isNextDisabled = () => {
        return paginationData?.current_page >= paginationData?.total_pages;
    };

    const width = container_width / 100; // Calculate the percentage of the container width

    if (isLoading) {
        return (
            <LoadingContainer className="center-align">
                <SmallLoader />
            </LoadingContainer>
        );
    }

    return (
        <Wrapper>
            <Container>
                {tableTitle && (
                    <IconHeading>
                        <Icon>
                            {iconSrc && <img src={iconSrc} alt="" />}{" "}
                            {/* Render the icon */}
                        </Icon>
                        <TableTitle>
                            {tableTitle} {/* Render the table title */}
                        </TableTitle>
                    </IconHeading>
                )}
                {error && (
                    <LoadingContainer className="center-align">
                        <span className="title">
                            {typeof error === "string"
                                ? error
                                : "Something went wrong!"}
                        </span>
                    </LoadingContainer>
                )}
                <div className="table-container">
                    {isHeadRequired && data.length > 0 && (
                        <THead width={container_width}>
                            {skelton.map((head, i) => {
                                if (head?.isHidden) return null;
                                return (
                                    <TH
                                        key={uuid + i * i}
                                        width={head.width * width}
                                    >
                                        <span>{head.title}</span>
                                    </TH>
                                );
                            })}
                        </THead>
                    )}
                    <TBody
                        width={container_width}
                        container_height={container_height}
                    >
                        {data?.map((row, index) => (
                            <TRow
                                width={container_width}
                                onClick={(e) => clickHandler(row)}
                                key={uuid + uuid + index}
                            >
                                {skelton.map((field, i) => {
                                    if (field?.isHidden) return null;
                                    return field.slug === "slno" ? (
                                        <TD 
                                            removePadding={removePadding}
                                            key={uuid + i}
                                            width={skelton[0].width * width}
                                        >
                                            <span>
                                                {starting_count + index <= 9
                                                    ? `0${
                                                          starting_count + index
                                                      }`
                                                    : starting_count + index}
                                            </span>
                                        </TD>
                                    ) : (
                                        <TD 
                                            removePadding={removePadding}
                                            key={uuid + i}
                                            width={field.width * width}
                                            onClick={(e) => {
                                                field?.isElement &&
                                                    e.stopPropagation();
                                            }}
                                        >
                                            {field?.isElement ? (
                                                <field.Element
                                                    {...row}
                                                    clickHandler={() =>
                                                        clickHandler(row)
                                                    }
                                                />
                                            ) : (
                                                <span>
                                                    {row[field.slug] || "---"}
                                                </span>
                                            )}
                                        </TD>
                                    );
                                })}
                            </TRow>
                        ))}
                    </TBody>
                </div>
            </Container>
            {paginationData && data.length > 0 && (
                <PaginationContainer>
                    <span className="pages">
                        <>
                            Showing {starting_count} to{" "}
                            {paginationData.total_items} {paginationTitle}
                        </>
                    </span>
                    <Pagination paginationData={paginationData} />
                </PaginationContainer>
            )}
        </Wrapper>
    );
};

export default Table;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

const Container = styled.div`
    /* overflow-x: scroll; */
    width: ${({ width }) => `${width}px`};
    border-radius: 6px;
    min-width: 100%;
    /* background: #fff; */
    padding: 16px 0;
    height: 100%;
    .table-container {
        overflow: scroll;
        overflow-y: scroll;
        border-radius: 16px;
    }
`;
const IconHeading = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
`;
const Icon = styled.div`
    margin-right: 6px;
    width: 18px;
`;
const TableTitle = styled.div`
    font-size: 16px;
    font-family: "DMnsmedium";
    color: #393939;
`;
const THead = styled.div`
    width: ${({ width }) => `${width}px`};
    display: flex;
    flex-wrap: wrap;
    /* background-color: #f8f9ff; */
    border-radius: 16px 16px 0 0;
    justify-content: space-between;
    position: sticky;
    top: 0;
`;
const TH = styled.div`
    width: ${({ width }) => `${width}px`};
    padding: 10px 16px;
    /* width:100% */

    span {
        font-size: 15px;
        color: #6e727a;
        font-family: "DMSansregular";
    }
`;
const TBody = styled.div`
    /* background-color: #f0f3ff; */
    /* width: auto; */
    border-radius: 16px;
    height: ${({ container_height }) =>
        container_height ? container_height : "auto"};
`;
const TRow = styled.div`
    width: ${({ width }) => `${width}px`};
    display: flex;
    flex-wrap: wrap;
    align-items: center stretch;
    border-bottom: 1px solid #e7eaed;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    /* background-color: #f0f3ff; */
    //newly added for full width
    justify-content: space-between;
    

    &:last-child {
        border: none;
    }

    &:hover {
        background-color: #e7eaed53;
    }
`;
const TD = styled.div`
    width: ${({ width }) => `${width}px`};
    padding:${({ removePadding }) => (removePadding ? "0px 0px" : "10px 16px")};
    overflow-x: hidden;
    display: flex;
    align-items: center;
    span {
        color: #212529d2;
        font-size: 14px;
        font-family: "DMSansmedium";
        /* text-align: start; */
        white-space: nowrap;
        overflow: hidden;
    }
`;
const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 14px;
    span.pages {
        color: #6b6b6b;
        font-size: 14px;
        font-family: "DMSansmedium";
    }

    .buttons {
        gap: 12px;

        button {
            padding: 8px 10px;
            border-radius: 8px;
            /* border: 1px solid #f5f7fd; */
            /* background: #f5f7fd; */
            cursor: pointer;

            &.disabled {
                background: none;
                cursor: not-allowed;
            }

            &.next {
                img {
                    rotate: 180deg;
                }
            }
        }
    }
`;
const LoadingContainer = styled.div`
    padding: 32px;
    height: 100%;
    span {
        font-size: 14px;
    }
`;
