import React from "react";
import styled from "styled-components";
import Product from "../components/Product";

export default function Products({ elements, addBag }) {
  return (
    <ProductsContainer>
      {elements?.map((item, index) => {
        return <Product addBag={addBag} data={item} key={index} />;
      })}
    </ProductsContainer>
  );
}

const ProductsContainer = styled.div`
  padding: 42px 40px 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  height: 540px;
  overflow-y: scroll;
  grid-auto-flow: dense;
`;
