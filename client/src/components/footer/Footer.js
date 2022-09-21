import React from 'react'
import '../footer/Footer.css'
import Facebook from '../../images/icon resaux sociaux/facebook.png'
import Instagram from '../../images/icon resaux sociaux/instgram.png'
import Youtube from '../../images/icon resaux sociaux/youtube.png'
import Linkdin from '../../images/icon resaux sociaux/linkdin.png'
import Logofooter from '../../images/cedre/logo blanc_Plan de travail 1.png'
export default function Footer() {
    return (
        <div className='footer'>


            <div className='footerContent'>

                <div className='footerContainer'>

                    <div className='listItemFooter'>
                        <div> Accueil </div>
                        <div> Découvrir </div>
                        <div> Abonnement </div>
                        <div> Contact </div>
                        <div> Connexion </div>
                    </div>

                    <div className='logoFooter'> <img src={Logofooter} /></div>

                    <div className='newsletter'>
                        <div className='textNewsletter'> Inscrivez-vous à notre newsletter </div>
                        <form>
                            <div className='formContainerFooter'>

                                <div> <input className='inputNewsletter' placeholder='Entrer email' /> </div>
                                <div> <button className='button'> ok </button> </div>

                            </div>
                        </form>

                        <div className='socialMedia'>
                            <div className='socialMediaItem'> <img src={Facebook} /> </div>
                            <div className='socialMediaItem'> <img src={Instagram} /> </div>
                            <div className='socialMediaItem'> <img src={Linkdin} /> </div>
                            <div className='socialMediaItem'> <img src={Youtube} /> </div>
                        </div>
                        
                    </div>
                </div>
                <div className='signature'> © 2021 Cédre QCM. Tous les droits sont réservés. </div>

            </div>

        </div>
    )
}
