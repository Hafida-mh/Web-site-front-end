import React from 'react'
import '../signin/Signin.css'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import Logocedre from '../../images/cedre/Logo 2_Plan de travail 1.png'
import FaceImg from '../../images/icon resaux sociaux/facebook.png'
import Google from '../../images/icon resaux sociaux/Google.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
export default function Signin() {
  return (
    <div className='signin'>
   {/* <div className='navbarcontainer'> <NavBar />  </div>*/}

<div className='sectionLogo'> 
<div className='logoCedre'> 
<Link to="/" > <img src={Logocedre} /> </Link>
</div>
</div>


    <div className='formContainer'>
        <div className='formContent'>
            <form className='ff'>
                <div className='formInner'>

                    <div className='titleForm'>  Se connecter  </div>
                    <div className='buttonsConnexion'> 
                    <div className='btnConnexion face'> 
                    <div> <img src={FaceImg} className='faceimg' /></div>
                    <div> Continuer avec Facebook </div>
                    
                    </div>
                    <div  className='btnConnexion google'> 
                    <div> <img src={Google}  className="googleLogo"/> </div>
                     <div> Sign in </div>
                     
                     </div>
                    </div>
                    <div className='formItems first'>
                        <div className='formItemsTitle'> Pseudo </div>
                        <div> <input className='inputSignup' placeholder='Pseudo' /> </div>
                    </div>

                    <div className='formItems'>
                        <div className='formItemsTitle'> Mot de passe </div>
                        <div> <input className='inputSignup' placeholder='Mot de passe' type="password"/> </div>
                    </div>








                    <div className='condition'>
                       
                        <div className='checkConditions'>
                            <div className='checkbox'> <input type="checkbox" /></div>
                            <div className='check'> Se souvenir de moi</div>
                        </div>
                        <div className='line'> </div>
                    </div>




<div className='formButton'> 
<button className='buttonSignup'> Se connecter </button>
</div>


<div className='links'> 
<div className='link'> Mot de passe oublié </div>
<div className='link'> J'ai déja un compte </div>
</div>
                </div>

            </form>


        </div>
    </div>


<div className='footersignupcontainer'> <Footer /></div>


</div>
  )
}
