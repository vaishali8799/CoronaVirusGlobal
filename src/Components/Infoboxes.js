import React from 'react'
import {Card,CardContent,Typography} from  '@material-ui/core'

const InfoBoxes = ({title,cases,total,className,class1}) => {
    return (
        
        
        <Card className={`info-box ${class1}`}>
           <CardContent>
                
                <Typography color="textSecondary"className={`infobox_cases ${className}`}>
                {title}
                    <h2>+{cases}</h2>
                </Typography>
                <Typography color="textSecondary"className="infobox_total">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
        
    )
}

export default InfoBoxes
