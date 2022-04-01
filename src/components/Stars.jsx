import React from 'react'
import Star from "../assets/icons/Star.svg"
import Star0 from "../assets/icons/Star-0.svg"
import Star05 from "../assets/icons/Star-05.svg"
import styled from 'styled-components'

export default function Stars({stars}) {
    let starsArr = [<img src={Star0} key={0} alt=""/>,<img src={Star0} key="1" alt=""/>,<img src={Star0} key="2" alt=""/>,<img src={Star0} key="3" alt=""/>,<img key={4} src={Star0} alt=""/> ]
    let starsNum = Number(stars)
    
    function renderStar() {
        for(let i = 0; i < 5; i++) {
            if(starsNum > 5) return starsArr = [<img src={Star} alt=""/>,<img src={Star} alt=""/>,<img src={Star} alt=""/>,<img src={Star} alt=""/>,<img src={Star} alt=""/> ]
            else if(starsNum >= 1) starsArr[i] = <img src={Star} key={Math.random()} alt="" />
            else if(starsNum > 0) starsArr[i] = <img src={Star05} key={98} alt="" />

            starsNum = starsNum - 1 
        }

        return starsArr.map(star => star)
    }
  return (
    <Wrapper>
        {/* <Flip cascade> */}
            <div className='stars'>
            {
                renderStar()
            }
            </div>
        {/* </Flip> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    .stars {
        display: flex;
        align-items: center;
        gap: 9.5px;
    }
`
