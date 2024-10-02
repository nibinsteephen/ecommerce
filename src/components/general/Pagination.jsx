import React from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import PaginationArrow from "./PaginationArrow";

const Pagination = ({ paginationData = {} }) => {
    const [pageParams, setParams] = useSearchParams();

    const setPageParams = (value = 1) => {
        pageParams.set("page", value);
        setParams(pageParams);
    };

    return (
        <PaginationContainer>
            <span>
                showing {paginationData?.current_page} of{" "}
                {paginationData?.total_pages} pages
            </span>
            <ReactPaginate
                pageCount={paginationData?.total_pages}
                forcePage={+(pageParams.get("page") ?? 1) - 1}
                onPageChange={({ selected }) => setPageParams(selected + 1)}
                activeLinkClassName="active-link"
                previousLabel={<PaginationArrow />}
                nextLabel={<PaginationArrow direction="right" />}
                disabledLinkClassName="disabled-link"
                breakLinkClassName="break-link"
                activeClassName={"item active "}
                breakClassName={"item break-me "}
                breakLabel={"..."}
                containerClassName={"pagination"}
                disabledClassName={"disabled-page"}
                nextClassName={"item next"}
            />
        </PaginationContainer>
    );
};

export default Pagination;

const PaginationContainer = styled.section`
    display: flex;
    /* justify-content: right; */
    justify-content: space-between;
    /* padding-top: 12px; */
    span {
        color: #fff;
        font-size: 14px;
    }
    * {
        user-select: none;
    }

    .pagination {
        display: flex;
        /* gap: 12px; */

        li {
            a {
                width: 35px;
                height: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                color: #33447C;
                border-radius: 6px;
                font-family: 'Satoshi-medium';
                /* background: #1b1c1f; */
                /* border: 1px solid #2c2c2c; */
                font-size: 14px;
            }

            &.active a {
                border: 1px solid #D5D7E2;
                color: #FFFFFF !important;
                background: #33447c;
            }
        }
    }

    .item {
        a {
            color: #7c7c7c;
        }
    }

    .break-me {
    }

    .next {
        margin-left: 5px;
        a {
            /* border-radius: 50% !important; */
            /* border: 1px solid #fff; */
        }
    }

    .active {
        a {
            border: 1px solid #e5c586;
            color: #111 !important;
            background: linear-gradient(
                215deg,
                #e5c586 -1.4%,
                #f3dfa9 50.84%,
                #e3bb6b 107.91%
            );
        }
    }

    .pagination-page {
    }

    .previous {
        margin-right: 5px;
        /* background-color: #ececec; */
        border-radius: 6px;
        a {
            /* border-radius: 50% !important; */
            /* border: 1px solid #fff; */
        }
    }
    .previous,
    .next {
        a {
            background: none !important;
            border: none !important;
        }
    }
    .disabled-page {
        background-color: none;
        a {
            cursor: not-allowed !important;
            border: none;
            color: #333333 !important;
        }
    }
`;
