import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import Stars from '../components/Stars'
import API from '../utils/API'

export default function AdminDetail() {
  const {detail} = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState([])

  useEffect(() => {
    API.get(`products/${detail}`)
      .then(res => setData(res.data))
  },[detail])

  const deleteProduct = () => {
    API.delete(`products/${detail}`)
      .then(res => navigate("/admin"))
  }

  return (
    <Wrapper>
      <div className="detail">
        <div className="main">
          <div className="images">
            <Fade top big cascade>
              <div className="images">
              <img src={"http://142.93.229.148/" + data.image } alt="" />
              <img src={"http://142.93.229.148/" + data.image } alt="" />
              <img src={"http://142.93.229.148/" + data.image } alt="" />
              </div>
            </Fade>
          </div>
          <Fade top big >
            <img className='bigImage' src={"http://142.93.229.148/" + data.image } alt="" />
          </Fade>
          
          <Fade right big>
          <div className="content">
            <b>{data.title}</b>
            <p className='model'>{data.model}</p>

            <div className="starsContainer">
              <Stars stars = {data.stars} />
              <p>{data.stars} / 5</p>
            </div>
            <p className='price'>${data.price}</p>
            <p className='description'>{data.description}</p>
          </div>
            </Fade>
        </div>
        <Fade bottom cascade>
          <footer>
            <button className="btn" >Edit</button>
            <button className="btn" onClick={deleteProduct} >Delete</button>
          </footer>
        </Fade>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 0 267px;
  footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    button {
      margin-left: auto;
      cursor: pointer;
    }
  }

  .detail {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;

    .bag {
      margin-left: auto;
    }

    .main {
      display: flex;
      align-items: center;
      gap: 16px;

      .images {
        display: flex;
        flex-direction: column;
        gap: 16px;

        img {
          height: 62px;
          width: 60px;
          object-fit: contain;
          padding: 8px;
          background-color: white;
          border-radius: 13px;
          cursor: pointer;
        }
      }

      .bigImage {
        width: 242px;
        height: 302px;
        object-fit: contain;
        padding: 8px;
        background-color: white;
        border-radius: 13px;
        margin-right: 32px;
      }

      .content {
        b {
          font-weight: 700;
          font-size: 44px;
          line-height: 50px;
          display: block;
          margin-bottom: 8px;
          color: #1A1F16;
        }

        .model {
          font-weight: 500;
          font-size: 24.25px;
          line-height: 38px;
          margin-bottom: 8px;

          color: rgba(26, 31, 22, 0.5);
        }

        .price {
          font-weight: 500;
          font-size: 24.25px;
          line-height: 38px;
          color: #1A1F16;
          margin-bottom: 8px;
        }

        .description {
          margin-left: 15px;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;

          color: #1A1F16;
        }
      }

      .starsContainer {
        display: flex;
        align-items: center;
        gap: 25px;

        p {
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: -0.02em;
          color: #12805D;
        }
      }
    }
  }
`
