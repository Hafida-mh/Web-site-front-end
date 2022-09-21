import React from 'react'
import '../navbar/NavBar.css'
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { CloseButton } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import BurgerMenu from '../../images/cedre/reshot-icon-menu-D6U5PY3TJK (1).svg'
import Logo from '../../images/cedre/Logo 1_Plan de travail 1.png'

import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function NavBar(props) {
  const [show, setShow] = useState(false);

  const showResponsiveNav = () => {
    setShow(!show);
  }
  return (
    <div className='navContainer'>



      <div className='navContent'>
        <div className='navItem'>
          <div className='logo'> <img src={Logo} /></div>

          <div className='items'>
            <div className='item'> <a href={props.linkaccueil}> Accueil  </a></div>
            <div className='item'> <a href={props.linkdecouvrir}> Découvrir </a>  </div>
            <div className='item'> <a href={props.linkabonnement}>  Abonnement </a> </div>
            <div className='item'> <a href={props.linkfooter}>  Contact </a> </div>
          </div>
        </div>

        <div className='navButton'>
          <div className='inscription'>  <Link to="/signup" className='linkToClient'>  <div> Inscription </div>  </Link></div>
          <div className='connexion'>  <Link to="/signin" className='linkToConnexion'>  <div>  Connexion  </div> </Link></div>
          <div className='burgerButton' onClick={() => showResponsiveNav() }> <div>  <img src={BurgerMenu} className="burgerMenuSvg"/>  </div></div>
        </div>
      </div>
     
      { show &&
        <div className='navResponsive'>
          <div className='navResponsiveContent'>
          <div className='logo responsive'> <img src={Logo} /></div>
            <div className='itemsResponsive'>
              <div className='item'> Accueil </div>
              <div className='item'> Découvrir </div>
              <div className='item'> Abonnement </div>
              <div className='item'> Contact </div>
            </div>


            <div className='buttonResponsive'>  

            <div className='inscription'> <div> Inscription </div> </div>
          <div className='connexion'> <div>  Connexion  </div></div>
            </div>
          </div>
        </div>
      }


    </div>


  )
}
