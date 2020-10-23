import React from 'react'
import Item from './Item/Item'

const Items = ({names, add, remove, scoops}) =>{
    return (
        <div>
            <ul>
                {
                    names.map((name) =>(
                        <Item key={name} name={name} add={add} remove={remove} scoops={scoops} />
                    ))
                }
                
            </ul>
        </div>
    )
}

export default Items
