import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function EditProduct({data}) {
  return (
    <Wrapper to={`/admin/product/${data.id}`} type={data.type}>
        <img src={"http://142.93.229.148/" + data.image} alt="" />
        <div className="text">
            <b>{data.title}</b>
            <p>{data.model}</p>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled(Link)`
    grid-column: ${({type}) => 
        type === "laptop" ? "span 2" : "span 1" 
    };
    display: flex;
    flex-direction: column;
    gap: 16px;
    cursor: pointer;

    img {
        padding: 8px;
        background: #FFFFFF;
        border-radius: 22px;
        height: 232px;
    }

    .text {
        margin-left: 10px;

        b {
            font-weight: 500;
            font-size: 18px;
            line-height: 20px;
            margin-bottom: 8px;
            display: block;

            color: #1A1F16;
        }

        p {
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            letter-spacing: -0.02em;

            color: #60695C;
        }
    }
`