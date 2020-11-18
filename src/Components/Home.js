import numeral from 'numeral'
import Table from './Table'
import HomeNav from './HomeNav'
import Worldmap from './Worldmap'
import Graph from './Graph'
import '../App.css'
import {Animated} from "react-animated-css";
import "leaflet/dist/leaflet.css";
import Infoboxes from './Infoboxes'
import React,{useEffect,useState} from 'react';
import {CardContent,Card, FormControl, MenuItem,Select} from '@material-ui/core'

function Home() {
  const [countries, setcountries] = useState([]);
  const [country,setcountry]= useState("worldwide");
  const [Info,setInfo]=useState({});
  const [mapCountries, setMapCountries] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat:30.5595, lng:22.9375 });
  const [mapZoom, setMapZoom] = useState(3);
  const [table,setTable]=useState([]);
  
  const [casesType,setCaseType]=useState("cases");
  //const [casesType2]=useState("cases");
  
 
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(res=>res.json())
    .then(data=>{
      setInfo(data)
    
    })
    }
  , [])
  const dataSort=(data)=>{
    const data1=[...data]
    data1.sort((a,b)  =>{
      if(a.cases>b.cases){
        return -1
      }
      else{
        return 1
      }
    });
    return  data1

  }
  useEffect(() => {
    const getCountry=async()=>{
      fetch("https://disease.sh/v3/covid-19/countries")
      .then(res=>res.json())
      .then(data=>{
        const countries=data.map(country=>({
          name:country.country,
          value:country.countryInfo.iso2,
          flag:country.countryInfo.flag,
        })).filter((country=>country.value!==null));
        let sortedData=dataSort(data);
        setMapCountries(data);
        setTable(sortedData);
        console.log(sortedData)
        setcountries(countries);
        
       
      })
      .catch(err=>console.log(err))
    }
    getCountry();
  }, []);

const onchangeCountry=async(e)=>{
  const eTarget=e.target.value;
  const countryCode=eTarget;
  //setcountry(countryCode);
  /*if selected code is worldwide
  else  fetch*/
  let requestURL
  if(countryCode==="worldwide"){
    requestURL="https://disease.sh/v3/covid-19/all"
  }
  else{
    requestURL=`https://disease.sh/v3/covid-19/countries/${countryCode}`
  }
  await fetch(requestURL)
  .then(res=>res.json())
  .then(data=>{
    setcountry(countryCode);
    /*set  countrycode and pull its data*/
    setInfo(data);
    console.log(data)
    setMapCenter([data.countryInfo.lat,data.countryInfo.long])
    setMapZoom(4);
    
    

  })}
    return (
        <>
        <HomeNav/>
        <div>
          <div className="app">
     
     <div className="left">
     <div  className="app_header">
       <h2>Corona  Tracker</h2>
     <FormControl  className="app_dropdown">
       {/*onchangecountry  is a listener  which changes the  country selected
       from dropdown*/}
         <Select style={{width:'150px'}} value={country} onChange={onchangeCountry}>
         <MenuItem  value="worldwide">Worldwide</MenuItem>
         {countries.map(country=>(
           <MenuItem value={country.value}>{country.name}</MenuItem>
         ))}
         {/*fetch countries  and  then loop them and list in dropdown*/}
         {/*<MenuItem value="worldwide">1</MenuItem>
         <MenuItem value="worldwide">2</MenuItem>
 <MenuItem value="worldwide">3</MenuItem>*/}
       </Select>
     </FormControl>
     </div>
     <Animated animationIn="fadeInUp">
     <div  className="app_stats">
      
       <Infoboxes class1="todayBox"className="today"  title="Today cases" cases={numeral(Info.todayCases).format(0,0)} total={numeral(Info.cases).format("0.0a")}  />
       <Infoboxes class1="recoveredBox"className="recovered" title="Recovered cases" cases={numeral(Info.todayRecovered).format(0,0)} total={numeral(Info.recovered).format("0.0a")}/>
       <Infoboxes class1="deathsBox"className="deaths" title="Deaths  cases" cases={numeral(Info.todayDeaths).format(0,0)} total={numeral(Info.deaths).format("0.0a")}/>
       <Infoboxes class1="activeBox"className="active" title="Active cases" cases={numeral(Info.active).format(0,0)} total={numeral(Info.cases).format("0.0a")}  />
      

     </div>
     </Animated>
     
     <div className="group-buttons">
     <button  style={{backgroundColor:'#3498DB',opacity:'0.8'}} onClick={(e)=>setCaseType("cases")}>Cases</button>
     <button  style={{backgroundColor:'#2ECC71',opacity:'0.8'}} onClick={(e)=>setCaseType("recovered")}>Recovered</button>
     <button  style={{backgroundColor:'#F44336',opacity:'0.8'}}onClick={(e)=>setCaseType("deaths")}>Deaths</button>
     <Worldmap  countries={mapCountries}
         casesType={casesType}
         center={mapCenter}
         zoom={mapZoom}/>
        
    
         </div>
        
     <div className="chart-boxes">
       <Card><CardContent><Graph casesType2="cases"></Graph></CardContent></Card>
       <Card><CardContent><Graph casesType2="recovered" ></Graph></CardContent></Card>
       <Card><CardContent><Graph casesType2="deaths" ></Graph></CardContent></Card>
       </div>
       
     
     </div>
     
       <Card  className="right">
         <CardContent>
           <h3>Worldwide Cases Dashboard</h3>
           <tr>
                   <td>Name</td>
                   <td>Total Cases</td>
               </tr>
           <Table countries={table}/>
           
           
         </CardContent>
         
       </Card>
       
     

     

    
     {/*Header*/}
     {/*logo+dropdown*/}
     {/*infoboxes*/}
     {/*Table*/}
     {/*Graph*/}
     {/*Map*/}
     
   </div>

        </div>
        </>
    )
}

export default Home;
