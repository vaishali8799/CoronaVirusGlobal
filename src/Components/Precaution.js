import React from 'react'
import Minicard from './Reusable/Minicard'
import pic1 from '../images/pic1.jpg'
import pic5 from '../images/pic5.jpg'
import pic3 from '../images/pic3.jpg'
import pic4 from '../images/pic4.jpg'
import HomeNav from './HomeNav'
import './Precaution.css'
import {Animated} from "react-animated-css";

function Precaution() {
    return (
        <>
        <HomeNav/>
        <div>
        <div className="container">
             <div className="row">
         <div className="col-md-12 advice-head">
         <Animated animationIn="fadeInLeftBig" animationInDuration={1000} isVisible={true}>          
         <h3> Coronavirus disease(COVID-19) Advice for public</h3>
         </Animated>
         <h6>Stay aware of the latest COVID-19 information by regularly checking updates from WHO and your national and local public health authorities.</h6>
         <hr></hr>
         </div>
         </div>
         </div>

         <div className="container">
             <div className="row">
                 <div className="col-md-2">
                     
                 </div>
                 <div className="col-md-10">
                 <Animated animationIn="pulse" animationInDelay={1500}  isVisible={true}>
                     <div className="col-md-12 advice-container">
                         <h4>What to do to keep yourself and others safe from COVID-19</h4>
                         <hr/>
                         <div>
                             <p><b>Maintain at least a 1-metre distance between yourself and others</b> to reduce your risk of infection when they cough, sneeze or speak. Maintain an even greater distance between yourself and others when indoors. The further away, the better.</p>
                             <p><b>Make wearing a mask a normal part of being around other people.</b></p>
                         </div>
                     </div>
                     </Animated>
                     <Animated animationIn="pulse"animationInDelay={1500}   isVisible={true}>
                     <div className="col-md-12 advice-container">
                         <h4>Protect yourself and others from COVID-19</h4>
                         <hr/>
                         <p>If COVID-19 is spreading in your community, stay safe by taking some simple precautions, such as physical distancing, wearing a mask, keeping rooms well ventilated, avoiding crowds, cleaning your hands, and coughing into a bent elbow or tissue.</p>
                     </div>
                     </Animated>
                     <Animated animationIn="pulse"animationInDelay={2000}  animationInDuration={3000} isVisible={true}>
                     <div className="col-md-12 advice-container">
                         <h4> Don’t forget the basics of good hygiene</h4>
                         <hr/>
                         <div className="row">
                         <div className="col-md-3">
                             <Minicard title="Wash your hands often" content="Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. " image={pic1}></Minicard>
                             

                         </div>
                         <div className="col-md-3">
                         <Minicard title="Avoid close contact" content="Avoid the 3Cs: spaces that are closed, crowded or involve close contact..If possible, maintain 6 feet between the person who is sick and other household members." image={pic4}></Minicard>
                         </div>
                         <div className="col-md-3">
                         <Minicard title="Cover coughs and sneezes" content="Cover your mouth and nose with a mask when around others.Always cover your mouth and nose with a tissue when you cough or sneeze or use the inside of your elbow and do not spit." image={pic3}></Minicard>
                         </div>
                         <div className="col-md-3">
                         <Minicard title="Clean and disinfect" content="Clean and disinfect surfaces frequently especially those which are regularly touched, such as door handles, faucets and phone screens." image={pic5}></Minicard>
                             
                         </div>
                         </div>
                     </div>
                     </Animated>
                     <div className="col-md-12 advice-container">
                         <h4>What to do if you feel unwell</h4>
                         <hr/>
                         
                             <p><b>Know the full range of symptoms of COVID-19.</b> The most common symptoms of COVID-19 are fever, dry cough, and tiredness. Other symptoms that are less common and may affect some patients include loss of taste or smell, aches and pains, headache, sore throat, nasal congestion, red eyes, diarrhoea, or a skin rash.</p>
                             <p><b>Stay home and self-isolate</b> even if you have minor symptoms such as cough, headache, mild fever, until you recover. Call your health care provider or hotline for advice. Have someone bring you supplies. If you need to leave your house or have someone near you, wear a medical mask to avoid infecting others.</p>
                             <p><b>If you have a fever, cough and difficulty breathing, seek medical attention immediately.</b> Call by telephone first, if you can and follow the directions of your local health authority.</p>
                        
                     </div>

                 </div>
             </div>
         </div>
        </div>
        </>
    )
}

export default Precaution
