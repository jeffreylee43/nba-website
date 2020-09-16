import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import styled from 'styled-components'
import "./Navigation.css"
import NavLinks from "./Navlinks"

const Navbar = styled.div`
    margin: 0 auto;
    background-color: rgb(50,50,50);
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    padding: 5px 30px;
    z-index: 99999;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      height: 50px;
    }
`

const SubMenu = styled.div`
    display: ${props => (props.hover ? "block" : "none")};
    padding: 100px;
    background-color: black;
    position: fixed;
    z-index: 99999;
`

const Click = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 3vw;

  @media (max-width: 1024px) {
    display: flex;
  }
`

const NavSide = styled.div`
  display: flex;
  height: 82%;
  justify-content: flex-end;
  align-items: center;
  // overflow-y: ${props => (props.open ? "visible" : "scroll")};

  @media (max-width: 1024px) {
    flex-direction: column;
    position: fixed;
    justify-content: flex-start;
    top: 60px;
    padding-top: 10vh;
    background-color:rgb(15,15,15);
    transition: all 0.3s ease-in;
    z-index: 1200;
    width: 100%;
    left: ${props => (props.open ? "-100%" : "0")};

  }
` 

const BurgerIcon = styled.div`
  width: 35px;
  height: 4px;
  background-color: ${props => (props.open ? "white" : "white")};
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  z-index: 10;
  transform: ${props => (props.open ? "rotate(45deg) " : "rotate(0deg)")};


  ::before,
  ::after {
    width: 35px;
    height: 4px;
    background-color: ${props => (props.open ? "white" : "white")};
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;

  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }

`

const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
  
    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    // Return the width so we can use it in our components
    return { width };
}


function Navigation() {
    // const [hoverAtlantic, setAtlantic] = useState(false);
    // const [hoverCentral, setCentral] = useState(false);
    // const [hoverSoutheast, setSoutheast] = useState(false);
    // const [hoverNorthwest, setNorthwest] = useState(false);
    // const [hoverPacific, setPacific] = useState(false);
    // const [hoverSouthwest, setSouthwest] = useState(false);

    const [navbarOpen, setNavbarOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const { width } = useViewport();
    const breakpoint = 768;

    // const [windowOffset, setWindowOffset] = useState(0);
    // const handleScroll = () => {
    //   const position = window.scrollY;
    //   setWindowOffset(position);
    //   console.log(windowOffset);
    // }

    // React.useEffect(() => {
    //   window.addEventListener('scroll', handleScroll);
      
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    
    // }, []);

    // function noScroll() {
    //   document.body.setAttribute('style', `top: -${windowOffset}px; position: fixed;`);
    // }
  
    // function Scroll() {
    //   document.body.style.position = '';
    //   document.body.style.top = '';
    //   window.scrollTo(0, windowOffset);
    // }

    function noScroll() {
      // document.body.setAttribute('style', `position: fixed; top: -${window.scrollY}px`);
      document.body.style.overflow = 'hidden';
    }
  
    function Scroll() {
      // const ScrollPosition = document.body.style.top;
      // document.body.style.position = '';
      // document.body.style.top = '';
      // window.scrollTo(0, parseInt(ScrollPosition || '0') * -1);
      document.body.style.overflow = '';
      
    }

    function handleChildClick(newnavbarOpen, newmodalOpen) {
        setNavbarOpen(newnavbarOpen);
        setModalOpen(newmodalOpen);
    }

    return (
        width > breakpoint ? (
        <Navbar>
            <NavLink exact to="/#home" className="navlink" activeClassName="navlink-active">Home</NavLink>
            <HashLink exact to="/#Atlantic" className="navlink" activeClassName="navlink-active">Atlantic</HashLink>
            <HashLink exact to="/#Central" className="navlink" activeClassName="navlink-active">Central</HashLink>
            <HashLink exact to="/#Southeast" className="navlink" activeClassName="navlink-active">Southeast</HashLink>
            <HashLink exact to="/#Northwest" className="navlink" activeClassName="navlink-active">Northwest</HashLink>
            <HashLink exact to="/#Pacific" className="navlink" activeClassName="navlink-active">Pacific</HashLink>
            <HashLink exact to="/#Southwest" className="navlink" activeClassName="navlink-active">Southwest</HashLink>
        </Navbar>
        ) : (
        <Navbar>
            <Click onClick={() => {setNavbarOpen(!navbarOpen); setModalOpen(!modalOpen);}}>
                {navbarOpen ? <BurgerIcon open /> : <BurgerIcon />}
            </Click>
            {modalOpen ? (noScroll()) : (Scroll())}
            {navbarOpen ? (
                <NavSide>
                    <NavLinks onChildClick={handleChildClick}/>
                </NavSide>
            ) : (
                <NavSide open>
                </NavSide>
            )}
        </Navbar>

        )
    )
}

export default Navigation;
