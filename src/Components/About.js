import React from 'react'
import HomeNav from './HomeNav'
import {Link} from 'react-router-dom'
import './About.css'
import {Animated} from "react-animated-css";

function About() {
    return (
        <>
        <HomeNav/>
        <div className="container">
            <div className="row">
                <div className="col-md-12 about">
                    <h4>About Us</h4>
                 
                    <div style={{display:'flex'}}>
                        <div className="icon">
                            <Link to="https://www.facebook.com/"><i class="fa fa-facebook" aria-hidden="true"></i></Link></div>
                        <div className="icon"><Link to="https://www.twiter.com/"><i class="fa fa-twitter" aria-hidden="true"></i></Link></div>
                        <div className="icon"><Link to="https://www.gmail.com/"><i class="fa fa-envelope-o" aria-hidden="true"></i></Link></div>
                    </div>
                    <hr/>
                </div>
                </div>
                </div>
                <div className="container">
                <div className="row">
                <div className="col-md-12">
                <Animated animationIn="fadeInLeft"  isVisible={true}> 
                <div className="col-md-12 about-container" style={{textAlign:'center',alignItems:'center'}}>
                    <h4>Are you Official?</h4>
                    <p>No</p>
                </div>
                </Animated>
                <Animated animationIn="fadeInLeft"  isVisible={true}>
                <div className="col-md-12 about-container"style={{textAlign:'center',alignItems:'center'}}>
                    <h4>What are your sources ? How is the data gathered for this project ?</h4>
                    <p>We are using disease.sh API. An open API for disease-related statistics.This API provides a big range of detailed information about multiple viruses.</p>
                </div>
                </Animated>
                <Animated animationIn="fadeInLeft"  isVisible={true}>
                <div className="col-md-12 about-container"style={{textAlign:'center',alignItems:'center'}}>
                    <h4>What is our aim ?</h4>
                    <p>Our aim is to built the COVID-19 global tracking app, aggregating the most comprehensive publicly available data set on the pandemic.We would like to provide resource to millions of users to track the novel coronavirus outbreak as it unfolds around the world.</p>
                </div>
                </Animated>
                </div>
            </div>
            
         
            
        </div>
        </>
    )
}

export default About
