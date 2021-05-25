import React from 'react'
import { Card, CardBody, CardFooter, CardHeader } from 'reactstrap'
import './Controls.css'

const controls = [
 {label:'Salad' , type:'salad'},
 { label: 'Cheese', type: 'cheese'},
 { label: 'Meat', type: 'meat'}
]

const BuildControl = props => {
 return (
  <div className="BuildControl d-flex justify-content-between" >
   <div className="mr-auto ml-5">{props.label}</div>
   <div className="btn-group">
   <button className="btn btn-warning btn-sm m-1">Less</button>
    <button className="btn btn-success btn-sm m-1">More</button>
   </div>
  </div>
 )
}

const Controls = props => {
 return (
  <div className="container ml-md-5" style={{textAlign:"center"}}>
   <Card className="Controls">
    <CardHeader className="CardHeader"><h4>Add Ingredients</h4></CardHeader>
    <CardBody>{
      controls.map(item => {
       return <BuildControl
        label={item.label}
        type={item.type}
       key={item.length}
       />
      })
    }
    </CardBody>
    <CardFooter><h5>Price: BDT</h5></CardFooter>
   </Card>
  </div>
 )
}

export default Controls
