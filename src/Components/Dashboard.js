import React ,{useState,useEffect}from 'react'
import  numeral  from  'numeral'
import './Dashboard.css'
import {Animated} from "react-animated-css";
import HomeNav from './HomeNav'


const Dashboard = () => {
    const [dashboard,setDashboard]=useState([]);
    useEffect(() => {
        const getCountry=async()=>{
          fetch("https://disease.sh/v3/covid-19/countries")
          .then(res=>res.json())
          .then(data=>{
           setDashboard(data)})
          .catch(err=>console.log(err))
        }
        getCountry();
      }, []);
    return (
      <>
      <HomeNav/>
      <Animated animationIn="fadeInUp" animationOut="fadeOut"animationInDuration={1500} isVisible={true}>
        <div className="table-container">
            <div className="container">
            <div className="col-md-12 advice-head">
         <Animated animationIn="fadeInLeftBig" animationInDuration={1000} isVisible={true}>          
         <h3>Worldwide Country Cases Dashboard (COVID-19)</h3>
         </Animated>
         <h6>Latest data available here. Updated daily.</h6>
         <hr></hr>
         </div>
                <div className="row heading">
                
                <div className="col-md-12 ">
                <div className="row">
                <div className="col-2 cell-head max">Country Name</div>
                <div className="col cell-head max">Confirmed</div>
                <div className="col cell-head max">Active</div>
                <div className="col cell-head max">Recovered</div>
                <div className="col cell-head max">Deceased</div>
                <div className="col cell-head mini">Tested</div>
                <div className="col cell-head mini">Active ratio</div>
                <div className="col cell-head mini">Recovered ratio</div>
                <div className="col cell-head mini">Fatality ratio</div>
                <div className="col cell-head mini">Population</div>
                </div>
                
                {dashboard.map(r=>(
                  <div className="row  ">
                <div className=" col-2 cell max sub">
                  <img src={r.countryInfo.flag} style={{width:'30px',height:'20px'}} alt="flag"></img> {r.country}
                </div>
                <div className=" col max cell">
                  <div className="sub">
                    <div className="red">
                  ⬆ {numeral(r.todayCases).format(0,0)}</div>
                  <br/>{numeral(r.cases).format(0,0)}</div>
                  </div>
                <div className=" col max cell">
                  <div className="sub">{numeral(r.active).format(0,0)}</div>
                  </div>
                <div className=" col max cell">
                  <div className="sub">
                    <div className="green">⬆ {r.todayRecovered}</div><br/>{numeral(r.recovered).format(0,0)}</div>
                    </div>
                <div className="col max cell">
                  <div className="sub">{numeral(r.deaths).format(0,0)}</div>
                </div>
                <div className="col cell mini ">
                  <div className="sub">{numeral(r.tests).format(0,0)}</div>
                </div>
                <div className="col  cell mini">
                  <div className="sub">{((r.active/r.cases)*100).toFixed(1)}%</div>
                </div>
                <div className=" col cell mini">
                  <div className="sub">{((r.recovered/r.cases)*100).toFixed(1)}%</div>
                </div>
                <div className="col cell mini"><div className="sub">{((r.deaths/r.cases)*100).toFixed(1)}%</div>
                </div>
                    
                <div className=" cell col mini"><div className="sub">{numeral(r.population).format("0.0a")}</div>
                </div>
                </div>

                

                
                
                ))}
                
                </div>
                
                

            </div>
            </div>
            </div>
            </Animated>
            </>
            
            
        
    )
}

export default Dashboard
