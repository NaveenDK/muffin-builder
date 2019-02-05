import React from 'react';
import classes from './Muffin.css';
import MuffinIngredient  from './MuffinIngredient/MuffinIngredient';

const muffin = (props) =>{
    return(
        <div className={classes.Muffin}>
          <MuffinIngredient type="bread-top"/>
          <MuffinIngredient type="cheese"/>
          <MuffinIngredient type="meat"/>
          <MuffinIngredient type="bread-bottom"/>
        </div>
    );
};

export default muffin;