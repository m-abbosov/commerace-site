import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import styled from "styled-components"
import AOS from "aos";
import "aos/dist/aos.css";

import Bag from '../components/Bag'
import BagIcon from "../assets/icons/bagw.svg"
import Navbar from '../components/Navbar'
import Stars from '../components/Stars'
import API from '../utils/API'

export default function ProductDescripton() {
  const { id } = useParams()
  const [data, setData] = useState([])
  const navigate = useNavigate()
  

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    if(id !== undefined) {
      API.get(`/products/${id}`)
      .then(res => setData(res.data))
    }
  },[id])



  return (
    <Wrapper>
      <Navbar />
      <div className="detail">
        <header>
          <p onClick={() => navigate(-1)}>{"< Back"}</p>
        </header>
        <div className="main">
          <div className="images" data-aos="slide-down" data-aos-delay="200" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <img src={"http://142.93.229.148/" + data.image } alt="" />
              <img src={"http://142.93.229.148/" + data.image } alt="" />
              <img src={"http://142.93.229.148/" + data.image } alt="" />
          </div>
          
          <img data-aos="slide-up" data-aos-delay="200" className='bigImage' src={"http://142.93.229.148/" + data.image } alt="" />          
          
          <div className="content" data-aos-delay="200" data-aos="slide-left">
            <b>{data.title}</b>
            <p className='model'>{data.model}</p>

            <div className="starsContainer">
              <Stars key={15} stars = {data.stars} />
              <p>{data.stars} / 5</p>
            </div>
            <p className='price'>${data.price}</p>
            <p className='description'>{data.description}</p>
          </div>
        </div>
        <footer>
          <button className="btn" >
            <img src={BagIcon} alt="" />
            <p>Add to Bag</p>
          </button>
        </footer>
      </div>
      <Bag customStyle={{marginLeft: "auto"}} elements={JSON.parse(localStorage.getItem("bags"))} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 76px 1fr 345px;
  gap: 30px;
  footer {
    width: 100%;

    button {
      margin-left: auto;
      cursor: pointer;
    }
  }

  header {
    p {
      cursor: pointer;
    }
  }
  .detail {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;

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