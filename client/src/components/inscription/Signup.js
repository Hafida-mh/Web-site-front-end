import React from 'react'
import '../inscription/Signup.css'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import Logocedre from '../../images/cedre/Logo 2_Plan de travail 1.png'
import ReCAPTCHA from "react-google-recaptcha"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
export default function Signup() {
    return (
        <div className='signup'>
            {  /* <div className='navbarcontainer'> <NavBar />  </div>*/}
            <div className='sectionLogo'>
                <div className='logoCedre'>
                    <Link to="/" >  <img src={Logocedre} /> </Link>
                </div>
            </div>

            <div className='formContainer'>
                <div className='formContent'>
                    <form className='ff'>
                        <div className='formInner'>
                            <div className='titleForm'>  Je m'inscris </div>
                            <div className='formItems'>
                                <div className='formItemsTitle'> Nom complet </div>
                                <div> <input className='inputSignup' placeholder='Nom complet' /> </div>
                            </div>
                            <div className='formItems'>
                                <div className='formItemsTitle'> Pseudo </div>
                                <div> <input className='inputSignup' placeholder='Pseudo' /> </div>
                            </div>
                            <div className='formInputs'>
                                <div className='formInputsItems'>
                                    <div> Email</div>
                                    <div> <input className='input' placeholder='Email' /> </div>
                                </div>
                                <div className='formInputsItems'>
                                    <div> Confirmer email </div>
                                    <div> <input className='input' placeholder='Confirmer Email' /> </div>
                                </div>
                            </div>

                            <div className='formInputs'>
                                <div className='formInputsItems'>
                                    <div> Password </div>
                                    <div> <input className='input' placeholder='Password' /> </div>
                                </div>
                                <div className='formInputsItems'>
                                    <div> Confirmer password </div>
                                    <div> <input className='input' placeholder='Confirmer password' /> </div>
                                </div>
                            </div>
                            <div className='captchaContainer'>     <ReCAPTCHA sitekey="Your client site key" className='captcha' />   </div>
                            <div className='condition'>
                                <div className='conditionTitle'> Condition d'utilisation</div>
                                <div className='checkConditions'>
                                    <div className='checkbox'> <input type="checkbox" /></div>
                                    <div className='check'> J'ai lu et accepté les <span className='section'> conditions d'utilisation</span></div>
                                </div>
                            </div>
                            <div className='formButton'>
                                <button className='buttonSignup'> Je m'inscris </button>
                            </div>
                            <div className='link'> J'ai déja un compte </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className='footersignupcontainer'> <Footer /></div>
        </div>
    )
}
