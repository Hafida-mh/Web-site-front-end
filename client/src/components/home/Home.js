import React from 'react'
import '../home/Home.css'
import NavBar from '../navbar/NavBar'
import LogoHome from '../../images/cedre/Logo 2_Plan de travail 1.png'
import ImgBg from '../../images/cedre/slide_Plan de travail 1.png'
import ImgSect2 from '../../images/cedre/mac_Plan de travail 1.png'
import Cercle from '../../images/cedre/nabola 1_Plan de travail 1.png'
import Paper from '../../images/cedre/icon 1_Plan de travail 1.png'
import Brain from '../../images/cedre/icon 2.png'
import Lib from '../../images/cedre/icon 3_Plan de travail 1.png'
import Boule from '../../images/cedre/nabola 3_Plan de travail 1.png'
import Compte from '../../images/cedre/Créez un compte._Plan de travail 1.png'
import Boule4 from '../../images/cedre/nabola 4_Plan de travail 1.png'
import Boule5 from '../../images/cedre/nabola 5_Plan de travail 1.png'
import Footer from '../footer/Footer'
import Slideimg from '../../images/cedre/logo_Plan de travail 1 (4).png'
export default function Home() {
  return (

    <div className='home'>

      <div className='navHome'> <NavBar linkaccueil="#slide" linkdecouvrir="#decouvrir" linkabonnement="#abonnement" linkfooter="#footer"/> </div>

    <div className='slide' id="slide">
        <img className='bgImg' src={ImgBg} />
        <div className='logoSlide'> <img src={Slideimg} className="imgLogo" /></div>
        <div className='slideTitle'>

          <div> <h1> CEDRE QCM </h1>  </div>
          <div className='slideTxt'> <p> Platforme de questions a choix miltiples pour les études medicales.
            Support de preparation pour vos examens et concours.</p></div>

          <div className='btnSlide'> <button> Découvrir </button></div>
        </div>

      </div> 
      


      <div className='section2' id="decouvrir">
        <div className='imgSec2'> <img src={ImgSect2} className="pc" />   <img src={Cercle} className="cercle" /></div>
        <div className='sec2Txt'>
          <div> <h1 className='sec2Title'> Réussissez vos éxamens </h1></div>
          <div>
            <ul>
              <li> Le cedre qcm vous offre l'opportunité de s'entraîner au questions a choix multiples selon votre niveau de façon pratique et simple a utiliser.</li>
              <li> Les question sont proposés selon différent  ressources pour vous aider a mieux cerner vos cours.</li>
              <li> Faites des listes favoris pour revoir les questions les plus importants.</li>
              <li> Chaque réponse et accompagné d'une explication pour une meilleure appréhension des cours.</li>
            </ul>
          </div>
        </div>
      </div>



      <div className='section3' id="sec3">
        <img src={Boule} className="boule" />
        <div className='section3Container'>
          <div className='section3Elem'>
            <div className='section3ElemContainer'>
              <div className='sec3img'>
                <img src={Paper} className="paper" />
              </div>
              <div className='sec3Title'>
                <div> QCM multi sources</div>
              </div>

              <div className='sec3Txt'>
                <p> Différentes sources de QCM sont proposées afin d'optimiser vos chances de réussite. </p>
              </div>
            </div>
          </div>
          <div className='section3Elem'>
            <div className='section3ElemContainer'>
              <div className='sec3img'>
                <img src={Brain} className="brain" />
              </div>
              <div className='sec3Title'>
                <div> Platforme  de réussite </div>
              </div>

              <div className='sec3Txt'>
                <p> Chaque QCM est accompagné d'un time tracking qui calcule votre temps de réponse plus un rapport de performance graphique qui résume vos résultats pour une meilleure préparation pour vos examens. </p>
              </div>
            </div>

          </div>
          <div className='section3Elem'>

            <div className='section3ElemContainer'>
              <div className='sec3img'>
                <img src={Lib} className="paper" />
              </div>
              <div className='sec3Title'>
                <div> Bibliothéque de doucments
                </div>
              </div>

              <div className='sec3Txt'>
                <p> le cedre QCM est désormais votre environnement de travail en dehors de QCM vous trouvez des documents utiles pour la préparation. </p>
              </div>
            </div>
          </div>
        </div>
      </div>







      <div className='section4'>

     
        <div className='sec4Title'>
          <div> Comment utiliser le Cédre QCM ?</div>
        </div>
        <div className='sec4Steps'>
          <img src={ImgBg} className="bgSec4" />
          <div className='sec4StepsContainer'>

            <div className='sec4Item'>
              <div className='sec4Img'>  <img src={Compte} /> </div>
              <div className='sec4TitleItem'>Créez un compte </div>
            </div>

            <div className='sec4Item'>
              <div className='sec4Img'>  <img src={Compte} /> </div>
              <div className='sec4TitleItem'> Éssayez cédre QCM gratuitement </div>
            </div>

            <div className='sec4Item'>
              <div className='sec4Img'>  <img src={Compte} /> </div>
              <div className='sec4TitleItem abonnement'> Réglez votre Abonnement </div>
            </div>


          </div>
        </div>
      </div>



      <div className='section5' id="abonnement">
      <img src={Boule4} className="boul4" />
      <img src={Boule5} className="boul5" />
        <div className='sec5Container'>
          <div className='secTxt5'> Abonnement</div>
          <div className='secContent'>
            <div className='subscrItem' >


              <div className='subscrItemTitle'>

                <div>
                  <div className='title1 fondamentals'> LE CÉDRE FONDAMENTAL</div>
                  <div className='title2  fondamentals'> Tous les modules du cycle pré-clinique</div>
                </div>
                <div className='triangle'> </div>
              </div>




              <div className='prices'>
                <div className='price1'> 1 500 Da/an</div>
                <div className='price2'> 1 200 Da/an</div>
                <div className='line'></div>
              </div>

              <div className='formule'>
                <div className='formuleContent'>
                  <div className='formule1Title'> Formule destinée pour</div>
                  <div className='formuleTxt'> Les étudiants de la premiére, deuxiéme et troisiéme année. </div>
                </div>
                <div className='line'></div>
              </div>



              <div className='optionsFormule'>
                <div className='optionsFormuleContent'>
                  <div className='optionsTitle'> Options</div>
                  <div className='listOptionsContent'>
                    <ul>
                      <li className='listOptions'> Diverses sources de QCM corrigées ;</li>
                      <li className='listOptions'>Révision en mode d'éxamen ;</li>
                      <li className='listOptions'> Statistiques et analyses ;</li>
                      <li className='listOptions'> Favoris ;</li>
                      <li className='listOptions'> Disponibilité sur PC et téléphone.</li>
                    </ul>
                  </div>
                </div>
                <div className='line bottom'></div>
              </div>
            </div>






            <div className='subscrItem' >


              <div className='subscrItemTitle  sub2'>

                <div>
                  <div className='title1'> LE CÉDRE CLINIQUE</div>
                  <div className='title2'> Tous les modules du cycle clinique</div>
                </div>
                <div className='triangle tri2'> </div>
              </div>




              <div className='prices'>
                <div className='price1'> 1 800 Da/an</div>
                <div className='price2'> 1 500 Da/an</div>
                <div className='line'></div>
              </div>

              <div className='formule'>
                <div className='formuleContent'>
                  <div className='formule1Title'> Formule destinée pour</div>
                  <div className='formuleTxt'> Les étudiants de la premiére, deuxiéme et troisiéme année. </div>
                </div>
                <div className='line'></div>
              </div>



              <div className='optionsFormule'>
                <div className='optionsFormuleContent'>
                  <div className='optionsTitle'> Options</div>
                  <div className='listOptionsContent'>
                    <ul>
                      <li className='listOptions'> Diverses sources de QCM corrigées ;</li>
                      <li className='listOptions'>Révision en mode d'éxamen ;</li>
                      <li className='listOptions'> Statistiques et analyses ;</li>
                      <li className='listOptions'> Favoris ;</li>
                      <li className='listOptions'> Disponibilité sur PC et téléphone.</li>
                    </ul>
                  </div>
                </div>
                <div className='line bottom'></div>
              </div>
            </div>




            <div className='subscrItem sub3' >
              <div className='subscrItemTitle sub3'>

                <div>
                  <div className='title1'> LE CÉDRE INTÉGRAL</div>
                  <div className='title2'> Tous les modules du cycle clinique</div>
                </div>
                <div className='triangle tri3'> </div>
              </div>




              <div className='prices'>
                <div className='price1'> 4 000 Da/an</div>
                <div className='price2'> 2 500 Da/an</div>
                <div className='line'></div>
              </div>

              <div className='formule'>
                <div className='formuleContent'>
                  <div className='formule1Title'> Formule destinée pour</div>
                  <div className='formuleTxt'> Les étudiants de la premiére, deuxiéme et troisiéme année. </div>
                </div>
                <div className='line'></div>
              </div>



              <div className='optionsFormule'>
                <div className='optionsFormuleContent'>
                  <div className='optionsTitle'> Options</div>
                  <div className='listOptionsContent'>
                    <ul>
                      <li className='listOptions'> Diverses sources de QCM corrigées ;</li>
                      <li className='listOptions'>Révision en mode d'éxamen ;</li>
                      <li className='listOptions'> Statistiques et analyses ;</li>
                      <li className='listOptions'> Favoris ;</li>
                      <li className='listOptions'> Disponibilité sur PC et téléphone.</li>
                    </ul>
                  </div>
                </div>
                <div className='line bottom'></div>
              </div>
            </div>

          </div>
        </div>
      </div>


<div className="section6"> 
<div className='sect6Title'> Réussissez vos éxamens</div>
<div className='btnSec6'> <button> Je m'inccris </button></div>
</div>



<div id="footer"> <Footer /></div>

    </div>
  )
}
