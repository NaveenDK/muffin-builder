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
   {controls.map(ctrl=>(
       <BaseControl 
       key={ctrl.label} 
       label={ctrl.label}  
       added={() => props.ingredientAdded(ctrl.type)}
       removed={()=>props.ingredientRemoved(ctrl.type)}
       disabled ={props.disabled[ctrl.type]}
       />
   ))}
 </div>
);

export default baseControls;