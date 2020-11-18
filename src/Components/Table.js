import React from 'react'
import  numeral  from  'numeral'
//import  {TableCell,TableBody,TableContainer
//,Paper,TableHead,TableRow,}  from '@material-ui/core'
const Table = ({countries}) => {
    return (
        <div className="table">
            
                
            {countries.map(r=>(
                
                <tr>
                    <td><img src={r.countryInfo.flag}  alt="flag"></img>   {r.country}</td>
                    <td><strong>{numeral(r.cases).format("0,0")}</strong></td>
                </tr>
            ))}
        </div>
        );
        
       

            }
export default Table
