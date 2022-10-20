import React from 'react'
import { NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {ReactComponent as Dashboard} from "../assets/icons/dashboard.svg"
import {ReactComponent as Bag} from "../assets/icons/bag.svg"
import {ReactComponent as AdminIcon} from "../assets/icons/admin.svg"


export default function Navbar() {
    return (
      <NavbarContainer>
        <NavLink className="nav" id="home" to="/product">
          <Dashboard />
        </NavLink>

        <NavLink className="nav" to="/bags">
          <Bag />
        </NavLink>

        {localStorage.getItem("token") ? (
          <NavLink className="nav" to="/admin">
            <AdminIcon />
          </NavLink>
        ) : (
          <NavLink className="nav" to="/admin">
            <AdminIcon />
          </NavLink>
        )}
      </NavbarContainer>
    );
}

const NavbarContainer = styled.div`
  background-color: white;
  min-height: 100%;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 8px;

  a {
    padding: 10px;
    border-radius: 10px;

    &.active {
      background: #1A1F16;

      svg path {
        fill: white;
      }
    }
  }
`