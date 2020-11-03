import React from 'react';
import IndexRoutes from '../../routes.js';

let NavBar = (props)=> {
    let toggle = ()=> {
        let linksEl = document.querySelector('.narrowLinks');
        if (linksEl.style.display === 'block') {
                  linksEl.style.display = 'none';
              } else {
                  linksEl.style.display = 'block';
              }
    }
    return (
        <nav className="d-flex flex-row justify-content-end align-items-center pr-3">
            <div className="divider">|</div>
            <a href="/">Home</a>
            <div className="divider">|</div>
            <a href="/bill-generator">Bill Generator</a>
        </nav>
       
    )
}
export default NavBar;