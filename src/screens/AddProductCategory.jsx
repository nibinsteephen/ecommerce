import React, { useState } from "react";
import styled from "styled-components";
import Title from "../components/general/Title";
import Progress from "../components/general/Progress";
import MiniTitle from "../components/general/MiniTitle";
import DropdownInput from "../components/general/DropdownInput";
import { category_sections, generateProductOptions } from "../utils/constants";
import { useFormik } from "formik";
import * as Yup from "yup";
import BlueButton from "../components/buttons/BlueButton";
import { useNavigate } from "react-router-dom";
import AddProductButton from "../components/buttons/AddProductButton";

// Yup validation schema
const validationSchema = Yup.object().shape({
    category_id: Yup.string().required("Main category is required"),
    category1: Yup.string().required("Category 1 is required"),
    category2: Yup.string().required("Category 2 is required"),
    category3: Yup.string().required("Category 3 is required"),
});

function AddProductCategory() {
    const [isCategoryAdded, setIsCategoryAdded] = useState(false);
    const [selectedMainCategory, setSelectedMainCategory] = useState("");

    const formik = useFormik({
        initialValues: {
            category_id: "",
            category1: "",
            category2: "",
            category3: "",
        },
        validationSchema,
        onSubmit: (values) => {
            console.log("Form submitted with values: ", values);
            setIsCategoryAdded(true);
        },
    });

    const handleMainCategoryChange = (value) => {
        setSelectedMainCategory(value.id);
        formik.setFieldValue("category_id", value.id);
        formik.setFieldValue("category1", "");
        formik.setFieldValue("category2", "");
        formik.setFieldValue("category3", "");
    };

    const navigate = useNavigate();

    const handleCancel = () => {
        navigate("/products");
    };

    return (
        <>
            {!isCategoryAdded ? (
                <Container>
                    <Content>
                        <Head>
                            <LeftHead>
                                <Title title="Add Products" />
                                <BreadCrumbs>
                                    <a href="/products">Products/</a>
                                    <a href="#">add products</a>
                                </BreadCrumbs>
                            </LeftHead>
                            <RightHead>
                                <Progress />
                            </RightHead>
                        </Head>
                        <form onSubmit={formik.handleSubmit}>
                            <Details>
                                <MiniTitle title="Categories" />
                                <CategoryForm>
                                    <EachInput>
                                        <Label>Select Main Category</Label>
                                        <DropdownInput
                                            name="category_id"
                                            value={formik.values.category_id}
                                            placeholder="Select a category"
                                            displayKey="name"
                                            valueKey="id"
                                            options={category_sections}
                                            onChange={(value) =>
                                                handleMainCategoryChange(value)
                                            }
                                            showSearch={true}
                                            errorMessage={
                                                formik.touched.category_id
                                                    ? formik.errors.category_id
                                                    : ""
                                            }
                                        />
                                    </EachInput>
                                    <>
                                        <EachInput>
                                            <Label>Category 1</Label>
                                            <DropdownInput
                                                name="category1"
                                                value={formik.values.category1}
                                                placeholder="Select category 1"
                                                displayKey="name"
                                                valueKey="value"
                                                options={generateProductOptions(
                                                    selectedMainCategory
                                                )}
                                                onChange={(value) =>
                                                    formik.setFieldValue(
                                                        "category1",
                                                        value.value
                                                    )
                                                }
                                                showSearch={true}
                                                errorMessage={
                                                    formik.touched.category1
                                                        ? formik.errors
                                                              .category1
                                                        : ""
                                                }
                                            />
                                        </EachInput>
                                        <EachInput>
                                            <Label>Category 2</Label>
                                            <DropdownInput
                                                name="category2"
                                                value={formik.values.category2}
                                                placeholder="Select category 2"
                                                displayKey="name"
                                                valueKey="value"
                                                options={generateProductOptions(
                                                    selectedMainCategory
                                                )}
                                                onChange={(value) =>
                                                    formik.setFieldValue(
                                                        "category2",
                                                        value.value
                                                    )
                                                }
                                                showSearch={true}
                                                errorMessage={
                                                    formik.touched.category2
                                                        ? formik.errors
                                                              .category2
                                                        : ""
                                                }
                                            />
                                        </EachInput>
                                        <EachInput>
                                            <Label>Category 3</Label>
                                            <DropdownInput
                                                name="category3"
                                                value={formik.values.category3}
                                                placeholder="Select category 3"
                                                displayKey="name"
                                                valueKey="value"
                                                options={generateProductOptions(
                                                    selectedMainCategory
                                                )}
                                                onChange={(value) =>
                                                    formik.setFieldValue(
                                                        "category3",
                                                        value.value
                                                    )
                                                }
                                                showSearch={true}
                                                errorMessage={
                                                    formik.touched.category3
                                                        ? formik.errors
                                                              .category3
                                                        : ""
                                                }
                                            />
                                        </EachInput>
                                    </>
                                </CategoryForm>
                                <ButtonWrapper>
                                    <BlueButton
                                        name="Cancel"
                                        type="button"
                                        height="38px"
                                        width="150px"
                                        border="ffffff"
                                        background="#FFFFFF"
                                        color="#ADADAD"
                                        onClick={handleCancel}
                                    />
                                    <BlueButton
                                        name="Submit"
                                        type="submit"
                                        height="38px"
                                        width="150px"
                                    ></BlueButton>
                                </ButtonWrapper>
                            </Details>
                        </form>
                    </Content>
                </Container>
            ) : (
                <AddProductDetails>
                    <DetailsHead>
                        <LeftHead>
                            <Title title="Add Products" />
                            <BreadCrumbs>
                                <a href="/products">Products/</a>
                                <a href="#">add products</a>
                            </BreadCrumbs>
                        </LeftHead>
                        <Progress status="secondPhase" />
                    </DetailsHead>
                    <ProductContent>
                        <ListOfProducts>
                            <MiniTitle title="Product 1" />
                            <AddProductButton />
                        </ListOfProducts>
                        <EachProductDetails>
                            <Left>
                                <MiniTitle title="Product Details" />
                            </Left>
                            <Right>
                                <MiniTitle title="Product Cover Photo"/>
                            </Right>
                        </EachProductDetails>
                    </ProductContent>
                </AddProductDetails>
            )}
        </>
    );
}

export default AddProductCategory;

const Container = styled.div`
    height: 90%;
    display: flex;
    justify-content: center;
    margin-top: 5%;
`;

const Content = styled.div`
    width: 60%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10%;
`;

const LeftHead = styled.div``;

const Details = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    padding: 30px;
    border-radius: 8px;
    overflow: scroll;
`;

const BreadCrumbs = styled.div`
    a {
        font-size: 14px;
    }
`;

const RightHead = styled.div``;

const CategoryForm = styled.div`
    margin-top: 15px;
    border-top: 1px solid #ebebeb;
    padding-top: 25px;
`;

const EachInput = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 30px;
`;

const Label = styled.label`
    color: #747474;
    display: flex;
    align-items: center;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: end;
`;

const AddProductDetails = styled.div`
    padding: 19px;
    height: 100%;
`;

const DetailsHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ProductContent = styled.div`
    margin-top: 10px;
    height: 90%;
    background-color: #ffffff;
    overflow: scroll;
    padding: 0 25px;
`;

const ListOfProducts = styled.div`
    padding: 30px 0;
    display: flex;
    align-items: center;
    gap: 25px;
    border-bottom: 1px solid #ebebeb;
`;

const EachProductDetails = styled.div`
    width: 100%;
    display: flex;
    height: 75%;
`;

const Left = styled.div`
    margin: 20px 20px 20px 0;
    width: 70%;
    border-right: 1px solid #ebebeb;
    height: 100%;
    overflow: scroll;
`;

const Right = styled.div`
    padding: 20px 0 20px 0px;
    width: 30%;
`;
