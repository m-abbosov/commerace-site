import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BagIcon from "../assets/icons/bagw.svg";

export default function Bag({ customStyle, elements }) {
  return (
    <BagContainer style={customStyle}>
      <b className="title">Bag</b>
      <div className="main">
        {elements?.map((element, index) => (
          <BagItem key={index}>
              <img
                className="productImg"
                src={`https://profitmodel-server.herokuapp.com/api/product/${element.id}/photo/${element.photos[0].id}`}
                alt={element.name}
              />
          </BagItem>
        ))}
      </div>
      <div className="bag__btns">
        {localStorage.getItem("bags") && (
          <button
            onClick={() => {
              localStorage.removeItem("bags");
              window.location.reload(false);
            }}
            className="clearBag"
          >
            Clear Bag
          </button>
        )}

        <Link to="/" className="btn">
          <img src={BagIcon} alt="" />
          <p>View Bag</p>
        </Link>
      </div>
    </BagContainer>
  );
}

const BagContainer = styled.div`
  height: 100%;
  width: 100%;
  border-left: 4px solid rgba(26, 31, 22, 0.5);
  padding: 29px 19px 0 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .clearBag {
    display: block;
    margin-bottom: 15px;
    margin-left: auto;
    padding: 4px 8px;
    border: 1px solid #f53434;

    color: #f53434;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: #f53434;
      color: white;
    }
  }

  .title {
    font-weight: 500;
    font-size: 30px;
    color: #1a1f16;
  }

  .main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin: 26px 0 34px 0;
  }
`;

const BagItem = styled.div`
  img {
    background: #ffffff;
    border-radius: 12px;
    width: 65px;
    height: 65px;
    object-fit: contain;
    cursor: pointer;
  }
`;
