import React, { useState } from 'react'
import styled from "styled-components"
import Carousel from "react-bootstrap/Carousel";

import MinusIcon from "../assets/icons/minus.svg"
import PlusIcon from "../assets/icons/plus.svg"

export default function BagItem({element}) {
  const [quantity, setQuantity] = useState(1)

  return (
    <Wrapper>
      {element.photos.length > 1 ? (
        <Carousel className="bag__image">
          {element.photos.map((item, index) => {
            return (
              <Carousel.Item interval={3000} key={index}>
                <img
                  className="d-block bag__image"
                  src={`https://profitmodel-server.herokuapp.com/api/product/${element.id}/photo/${item.id}`}
                  alt="First slide"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      ) : (
        <img
          className="bag__image"
          src={`https://profitmodel-server.herokuapp.com/api/product/${element.id}/photo/${element.photos[0].id}`}
          alt={element.name}
        />
      )}
      <div className="bag__info">
        <b className="bag__info__title">{element.name}</b>
        <p className="bag__info__model">{element.brand.name}</p>
        <p className="bag__info__description">{element.description}</p>

        <div className="bag__info__price-quantitiy">
          <div className="bag__info__price">
            <p>${element.priceList[0].price}</p>
            <p>x</p>
            <p>{quantity}</p>
            <p>{element.priceList[0].type}</p>
          </div>
          <div className="bag__info__quantitiy">
            <img
              onClick={() => setQuantity(quantity - 1)}
              style={{ display: quantity <= 1 ? "none" : "inline-block" }}
              src={MinusIcon}
              alt=""
            />
            <p>{quantity}</p>
            <img
              onClick={() => setQuantity(quantity + 1)}
              src={PlusIcon}
              alt=""
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper  = styled.div`
    padding: 16px 24px;
    background-color: white;
    border-radius: 21px;
    display: flex;
    align-items: center;
    gap: 20px;


  .bag__info {
    width: 100%;
    .bag__info__title {
      display: block;
      font-weight: 400;
      font-size: 20.25px;
      color: #1A1F16;
      margin-bottom: 8px;
      margin-left: 4px;
    }
    .bag__info__model {
      font-weight: 400;
      font-size: 16px;

      color: #60695C;
      margin-bottom: 16px;
    }

    .bag__info__description{
      font-weight: 400;
      font-size: 14px;
      letter-spacing: -0.02em;
      margin-bottom: 20px;
      color: #1A1F16;
    }

    .bag__info__price-quantitiy {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      p {
        font-weight: 400;
        font-size: 16px;
        color: #1A1F16;
        user-select: none;
      }

      .bag__info__price {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .bag__info__quantitiy {
        display: flex;
        align-items: center;
        gap: 15px;
        p {
          margin: 0;
        }

        img {
          cursor: pointer;
          user-select: none;
        }
      }
    }
  }


  .bag__image {
    width: 203px;
    height: 254px;
    object-fit: contain;
  }
`