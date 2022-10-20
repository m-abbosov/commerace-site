import React from 'react'
import styled from "styled-components"
import Bag from '../components/Bag'
import BagItem from '../components/BagItem'

export default function Bags() {

  return (
    <Wrapper>
      <div className="mainBag">
        <b className='bagTitle'>Check your Bag Items</b>
        <div className='bag-elemetns'>
          {
            JSON.parse(localStorage.getItem("bags"))?.map((item, index) => <BagItem key={index} element = {item} /> )
          }
        </div>
      </div>
      <Bag elements={JSON.parse(localStorage.getItem("bags"))}/>
    </Wrapper>
  )
}

 const Wrapper  = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 345px;
  gap: 30px;

  .mainBag {
    padding-left: 30px;
    .bagTitle {
      display: block;
      margin-bottom: 20px;
      font-weight: 400;
      font-size: 32.83px;
      line-height: 40px;

      color: #1A1F16;
    }
  }

  .bag-elemetns {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
 `