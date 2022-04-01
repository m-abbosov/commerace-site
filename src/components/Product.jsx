import { Link } from 'react-router-dom'
import styled from "styled-components"
import BagIcon from "../assets/icons/bagw.svg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


export default function Product({data, addBag}) {
    const bagElements = JSON.parse(localStorage.getItem("bags"))?.map(({id}) => id)

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


  return (
    
    <Wrapper type={data.type} >
        <div className='info' data-aos="fade-up">
            <Link to={`/product/${data.id}`} className='productImgContainer'>
                <img className="productImg" src={`http://142.93.229.148/`+ data.image} alt={data.title}/>
            </Link>
            <div className='content'>
                <b>{data.title}</b>
                <p className='model'>{data.model}</p>

                <div className="price">
                    <p>${data.price}</p>
                    <img 
                        src={BagIcon} 
                        onClick = {() => addBag(data)}  
                        alt=''
                        style={{display: bagElements?.includes(data.id) ? "none" : "inline-block"}}
                    />
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

    grid-column: ${({type}) => 
        type === "laptop" ? "span 2" : "span 1" 
    };
    .info{

    
    display: flex;
    flex-direction: column;


    .productImgContainer {
        width: 100%;
        padding: 8px;
        background: #FFFFFF;
        border-radius: 22px;
        height: 232px;

        img {
            display: block;
            margin: auto;
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    .content {
        margin-top: 16px;
        margin-left: 5px;

        b {
            display: block;
            font-weight: 500;
            font-size: 16px;
            margin-bottom: 8px;
            color: #1A1F16;
        }

        .model {
            font-weight: 400;
            font-size: 12px;
            line-height: 19px;
            letter-spacing: -0.02em;
            color: #60695C;
            margin-bottom: 8px;
        }

        .price {
            display: flex;
            align-items: center;
            justify-content: space-between;

            p {
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;

                color: #1A1F16;
            }

            img {
                padding: 9px;
                background: #1A1F16;
                border-radius: 9px;
                cursor: pointer;
            }
        }
    }
    }
`
