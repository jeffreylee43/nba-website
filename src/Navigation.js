import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import styled from 'styled-components';
import "./Navigation.css";
import NavLinks from "./Navlinks";

const Navbar = styled.div`
    margin: 0 auto;
    background-color: rgb(50,50,50);
    position: sticky;
    top: 0px;
    padding: 5px 30px;
    z-index: 99999;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        height: 60px;
    }
`

const SubMenu = styled.div`
    display: ${props => (props.hover ? "block" : "none")};
    padding: 100px;
    background-color: black;
    position: fixed;
    z-index: 99999;
`

const StyledHamburger = styled.div`
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`


function Navigation() {
    const [hoverAtlantic, setAtlantic] = useState(false);
    const [hoverCentral, setCentral] = useState(false);
    const [hoverSoutheast, setSoutheast] = useState(false);
    const [hoverNorthwest, setNorthwest] = useState(false);
    const [hoverPacific, setPacific] = useState(false);
    const [hoverSouthwest, setSouthwest] = useState(false);

    return (
        <Navbar>
            <NavLink exact to="/" className="navlink" activeClassName="navlink-active">Home</NavLink>
            <HashLink exact to="/#Atlantic" className="navlink" activeClassName="navlink-active">Atlantic</HashLink>
            <HashLink exact to="/#Central" className="navlink" activeClassName="navlink-active">Central</HashLink>
            <HashLink exact to="/#Southeast" className="navlink" activeClassName="navlink-active">Southeast</HashLink>
            <HashLink exact to="/#Northwest" className="navlink" activeClassName="navlink-active">Northwest</HashLink>
            <HashLink exact to="/#Pacific" className="navlink" activeClassName="navlink-active">Pacific</HashLink>
            <HashLink exact to="/#Southwest" className="navlink" activeClassName="navlink-active">Southwest</HashLink>
            {/* <NavLinks /> */}
        </Navbar>
    )
}

export default Navigation;
