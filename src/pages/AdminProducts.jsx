import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import API from "../utils/API"
import EditProduct from '../components/adminProduct';

export default function AdminProduct() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    useEffect(() => {
        if(!localStorage.getItem("token")) {
            navigate("/admin")
        }
        else {
            
            API.get("/products")
                .then(res => {
                    setData(res.data)
                })
        }
    },[navigate])

  return (
    <Wrapper>
        <div className="main">
            <div className="admin-btns">
                <Link to="/admin/create" className='create'>Create Product</Link>
                <Link to="/product" onClick={() => localStorage.removeItem("token")} className='create logout'>Log out</Link>
            </div>
            <div className="products">
                {
                    data.map( item => <EditProduct key={item.id} data={item} />)
                }
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;

    display: flex;
    justify-content: center;

    .main {
        width: 905px;
        height: 100%;

        .create {
            display: block;
            text-align: center;
            padding: 8px;
            background-color: #1A1F16;
            font-weight: 500;
            font-size: 16px;
            border-radius: 10px;
            line-height: 24px;
            color: white;
            margin-bottom: 16px;

            &.logout {
                background-color: #5c0d07;
            }
        }

        .admin-btns {
            display: grid;
            grid-template-columns: 4fr 1fr;
            align-items: center;
            gap: 30px;
        }

        .products {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            height: 540px;
            overflow-y: scroll;
            grid-auto-flow: dense;
        }
    }

`