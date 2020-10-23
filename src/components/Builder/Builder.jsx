import React from 'react'
import classes from './Builder.module.css'
import Items from './Items/Items'
import Modal from './Model/Model'
import TotalPrice from './TotalPrice/TotalPrice'

const Builder = ({items, price, add, remove, scoops}) =>{
  const names = Object.keys(items);
    return (
        <div>
            <div className={classes.builder}>
              <h3>Build your own Ice Cream Sundae</h3>
              <Items names={names} add={add} remove={remove} scoops={scoops} />
              <TotalPrice price={price} />
              <button type="button" className={[classes.order, 'rounded'].join(' ')}>
                Add to Cart
              </button>
            </div>
            
            <Modal>Hello World</Modal>

        </div>
    )
}

export default Builder
