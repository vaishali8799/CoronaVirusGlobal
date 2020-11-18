import React,{useState,useEffect} from 'react'
import {Line}  from 'react-chartjs-2'
import  numeral from 'numeral'
/*x-dates
y-no. of cases
format------>  data: [{
    x: 10,
    y: 20
}, {
    x: 15,
    y: 10
}]
take empty  array and  loop through all data and push into empty array*/ 
//here we need  to  take difference to  find new cases

const options={
    legend: {
        display:false,
       
        
    },
    elements:{
        point:{
            radius:0,
        },

    },
    tooltips:{
        mode:"index",
        intersect:false,
        callacks:{
            label:function(tooltipItem,data){
                return numeral(tooltipItem.value.format("+0.0"));
            },
        },
    },
    scales:{
        xAxes:[
            {
                type:"time",
                time:{
                    format:"MM/DD/YY",
                    tooltipFormat:"ll"
                },
            },
        ],
        yAxes:[
            {
                gridLines:{
                    display:true,
                },
                ticks:{
                    callback:function(value,index,values){
                        return numeral(value).format("0a")
                    }
                }
            }
        ]
    }


}
const  buildChartData=(data,casesType2="cases")=>{
    const chartData=[];
    let lastData;
    for(let date in data.cases){
        if(lastData){
            const newData={
                x:date,
                y:data[casesType2][date]-lastData,
            }
            chartData.push(newData);
        }
        lastData=data[casesType2][date]

    }
    return  chartData;

}
const Graph = ({casesType2="cases"}) => {
    const  [data,setdata]=useState({})
    const casesTypeColors = {
        cases: {
          hex: "#3498DB",
          
          multiplier: 800,
        },
        recovered: {
          hex: "#2ECC71",
          
          multiplier: 1200,
        },
        deaths: {
          hex: "#fb4443",
          
          multiplier: 2000,
        },
      };
    
    useEffect(() => {
       const fetchdata=async()=>{
         await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=100")
           .then(res=>res.json())
           .then(data=>{
               
               const  chartData=buildChartData(data,casesType2)
               setdata(chartData)
              

           })}
       
        fetchdata();
    }, [casesType2])
   //data  takes datsets  as objects(basically array of data)
    return (
        <div className="chart">
            <h3>Worldwide {casesType2} Cases </h3>
            <br></br>
            
        
            
            {data?.length>0&&(<Line options={options}data={{datasets:[{
                backgroundColor:casesTypeColors[casesType2].hex,
                hoverBackgroundColor:'yellow',
            borderColor:'rgb(0,0,0)',
            label:casesType2,
           
            
            borderWidth:1,
                data:data}]}}></Line>)}
            
        </div>
    )
}

export default Graph
