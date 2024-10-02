import React from "react";
import styled from "styled-components";
import Search from "../components/general/Search";
import BlueButton from "../components/buttons/BlueButton";
import Table from "../components/general/Table";
import ProductTable from "../components/tableColumn/ProductTable";
import { useNavigate } from "react-router-dom";
import Title from "../components/general/Title";

function Products() {
    const productSData = [
        {
            si_no : 1,
            images: "/images/bag-image-1.png",
            product_name: "Jhon Miller Shirt",
            product: 10,
            created_by: "John",
            created_date: "22 Jun 2023",
            status: "active",
        },
        {
            si_no : 2,
            images: "/images/shirt.png",
            product_name: "Jhon Miller Shirt",
            product: 1,
            created_by: "John",
            created_date: "27 Jun 2023",
            status: "in_active",
        },
    ]

    const navigate = useNavigate()
    return (
        <Container>
            <ProductHead>
                <Title title="Products"/>
                <RightHead>
                    <Search inputWidth="170px"/>
                    <BlueButton name="Add Products" image={"/icons/add-icon.svg"} height="35px" onClick={() => {navigate("add-products/category")}}/>
                </RightHead>
            </ProductHead>
            <ProductContent>
                <Table
                    skelton={ProductTable}
                    data={productSData}
                    container_width={1282}
                />
            </ProductContent>
        </Container>
    );
}

export default Products;

const Container = styled.div`
    padding: 19px;
    height: 100%;
`;

const ProductHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10%;
`;

const RightHead = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`
const ProductContent = styled.div`
    height: 90%;
    border-radius: 8px;
    background-color: #ffffff;
`
