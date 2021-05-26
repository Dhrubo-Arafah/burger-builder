import React from 'react'

const Summery = props => {
 const ingredients = props.ingredients.map(item => {
  return (
   <li key={item.name}>
    <span style={{ textTransform: "capitalize" }}>{item.type}: { item.amount}</span>
   </li>
  )
 })
 return (
  <div>
   <ul>
{ingredients}
   </ul>
  </div>
 )
}

export default Summery
