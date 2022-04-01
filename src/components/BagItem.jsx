import React, { useState } from 'react'
import styled from "styled-components"
import Stars from "../components/Stars"
import MinusIcon from "../assets/icons/minus.svg"
import PlusIcon from "../assets/icons/plus.svg"

export default function BagItem({element}) {
  const [quantity,  setQuantity] = useState(1)

  return (
    <Wrapper>
        <img className='bag__image' src={`http://142.93.229.148/`   + element.image} alt="" />
        <div className="bag__info">
            <b className='bag__info__title'>{element.title}</b>
            <p className='bag__info__model'>{element.model}</p>
            <p className="bag__info__description">{element.description}</p>
            <div className="bag__info__stars">
              <Stars stars={element.stars} />
              <p>{element.stars} / 5</p>
            </div>


            <div className="bag__info__price-quantitiy">
              <div className="bag__info__price">
                <p>${element.price}</p>
                <p>x</p>
                <p>{quantity}</p>
              </div>
              <div className="bag__info__quantitiy">
                <img onClick={() => setQuantity(quantity - 1)} style={{display: quantity <= 1 ? "none" : "inline-block"}} src={MinusIcon} alt="" />
                <p>{quantity}</p>
                <img onClick={() => setQuantity(quantity + 1)} src={PlusIcon} alt="" />
              </div>
            </div>
        </div>
    </Wrapper>
  )
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

    .bag__info__stars {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 20px;

      p {
        font-weight: 400;
        font-size: 16px;
        letter-spacing: -0.02em;

        color: #12805D;
      }
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