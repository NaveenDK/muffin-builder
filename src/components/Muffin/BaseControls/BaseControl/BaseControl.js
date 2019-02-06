import React from 'react';
import classes from './BaseControl.css';

const baseControl = (props) =>(
  <div className={classes.BaseControl}>
      <div className={classes.Label}>
          {props.label}
      </div>
      <button className={classes.Less}>Less</button>
      <button className={classes.More}>More</button>

  </div>
);

export default baseControl;