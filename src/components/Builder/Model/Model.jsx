import React from 'react'
import classes from './Model.module.css'

function Model({children}) {
    return (
        <div>
              <div className={classes.backdrop}></div>
              <div className={classes.modalBody}>
                    {children}
              </div>
            </div>
    )
}

export default Model
