import React from 'react';
import classes from './Muffin.css';
import MuffinIngredient  from './MuffinIngredient/MuffinIngredient';

const muffin = (props) =>{
   
  let transformedIngredients = Object.keys(props.ingredients)
       .map(igKey => {
         
           return[...Array(props.ingredients[igKey])].map((_,i)=>{
              
                return  <MuffinIngredient key={igKey+i} type={igKey}/>
           });
        
       })
       .reduce((arr,el)=>{
           return arr.concat(el)
       },[]);
       
       if(transformedIngredients.length === 0){
            transformedIngredients = <p>Please start adding ingredients</p>
       }
       console.log(transformedIngredients)
    return(
        <div className={classes.Muffin}>
          <MuffinIngredient  type="bread-top"/>
          {transformedIngredients}
          <MuffinIngredient type="bread-bottom"/>
        </div>
    );
};

export default muffin;