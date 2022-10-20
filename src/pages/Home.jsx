import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Bag from '../components/Bag';
import API from '../utils/API';
import Products from './Products';

const Home = () => {
    const [products, setProducts] = useState([])
    const [bag, setBag] = useState(JSON.parse(localStorage.getItem("bags")) || [])
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname === "/") {
          navigate("/login");
        }
        API.get("/product").then((res) => {
            setProducts(res.data.data);
        });
    },[navigate, location])

    const addBag = (data) => {
        setBag([...bag, data])
        localStorage.setItem("bags", JSON.stringify([...bag, data]))
    }

    return (
        <HomeContainer>
            <main>
                <div className="input-box" >
                    <p>Search Item</p>
                    <input type="text" placeholder="Apple Watch, Samsung S21, Macbook Pro, ..." />
                </div>
                <Products elements = {products} addBag ={addBag} />
            </main>
            <Bag elements={bag} />
        </HomeContainer>
    );
}

export default Home;


const HomeContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 345px;
    

    main {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        .input-box {
            margin: 0 auto;
            p {
                font-size: 16px;
                line-height: 19px;
                letter-spacing: -0.02em;

                color: #60695C;
                margin-left: 10px;
                margin-bottom: 8px;
            }

            input {
                width: 507px;
                outline: none;
                border: none;
                padding: 16px 24px;

                background: #FFFFFF;
                box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
                border-radius: 13px;

                font-weight: 500;
                font-size: 16px;
                line-height: 24px;

                color: rgba(26, 31, 22, 0.5);
            }
        }
    }
`