import React from 'react';
import classes from './BaseControls.css';
import BaseControl from './BaseControl/BaseControl';
const controls=[
 { label: 'Salad', type:'salad'},
 { label: 'Bacon', type:'bacon'},
 { label: 'Cheese', type:'cheese'},
 { label: 'Meat', type:'meat'},

];

const baseControls = (props) =>(
 <div className={classes.BaseControls}>
   <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
   {controls.map(ctrl=>(
       <BaseControl 
       key={ctrl.label} 
       label={ctrl.label}  
       added={() => props.ingredientAdded(ctrl.type)}
       removed={()=>props.ingredientRemoved(ctrl.type)}
       disabled ={props.disabled[ctrl.type]}
       />
   ))}
   <button className={classes.OrderButton}
    disabled={!props.purchasable}
    onClick={props.ordered}
   > ORDER NOW</button>
 </div>
);

export default baseControls;