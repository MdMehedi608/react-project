import React from 'react';
import classes from './IceCream.module.css';
import Scoop from './Scoop/Scoop';

const IceCream = ({ scoops }) =>{
  console.log(scoops);
    return (
        <div>
            <div className={classes.icecream}>
              <p className={classes.cone}></p>
              {scoops.map((scoop, idx)=> (
                <Scoop key={idx} scoop={scoop} />
              ))}
              
              <div className={classes.cherry}></div>
            </div>
          </div>
    )
}

export default IceCream
