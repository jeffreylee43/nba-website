import React from "react"
import {NavLink} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import "./Navigation.css"

function NavLinks({navbarOpen, modalOpen, onChildClick}) {
    function handleClick(event){
        navbarOpen = false;
        modalOpen = false;
        onChildClick(event.target.navbarOpen);
        onChildClick(event.target.modalOpen);
    }

    return(
        <>
            <HashLink exact to="/#home" className="navlink" activeClassName="navlink-active" onClick={handleClick}>Home</HashLink>
            <HashLink exact to="/#Atlantic" className="navlink" activeClassName="navlink-active" onClick={handleClick}>Atlantic</HashLink>
            <HashLink exact to="/#Central" className="navlink" activeClassName="navlink-active" onClick={handleClick}>Central</HashLink>
            <HashLink exact to="/#Southeast" className="navlink" activeClassName="navlink-active" onClick={handleClick}>Southeast</HashLink>
            <HashLink exact to="/#Northwest" className="navlink" activeClassName="navlink-active" onClick={handleClick}>Northwest</HashLink>
            <HashLink exact to="/#Pacific" className="navlink" activeClassName="navlink-active" onClick={handleClick}>Pacific</HashLink>
            <HashLink exact to="/#Southwest" className="navlink" activeClassName="navlink-active" onClick={handleClick}>Southwest</HashLink>
        </>
    )
}

export default NavLinks

