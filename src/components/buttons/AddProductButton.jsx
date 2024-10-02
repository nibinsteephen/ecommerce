import React from "react";
import styled from "styled-components";

function AddProductButton() {
    return (
        <Button>
            <div className="addIcon">
                <img src="/icons/blue-add-icon.svg" alt="Add Icon" />
            </div>
            <p>Add Product</p>
        </Button>
    );
}

export default AddProductButton;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 150px;
    border: 2px dashed #007ddc;
    padding: 4px 0;
    border-radius: 8px;
    cursor: pointer;
    .addIcon {
        width: 15px;
    }
    p {
        font-family: "DMSansmedium";
        font-size: 17px;
        color: #007ddc;
    }
`;
