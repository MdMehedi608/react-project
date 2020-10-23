import React, { Component } from 'react'
import Builder from '../../components/Builder/Builder'
import IceCream from '../../components/IceCream/IceCream'
import classes from './IceCreamBuilder.module.css'

export default class IceCreamBuilder extends Component {
    state = {
        items:{},
        scoops: [],
        totalPrice: 0,
    }
    componentDidMount(){
        fetch('https://reactapp-75939.firebaseio.com/Items.json')
        .then(response => response.json())
        .then(responseData =>{
            this.setState({
                items: responseData,
            });
        });
    }
    addScoop = (scoop)=>{
        const {scoops, items} = this.state;
        const scoopData = [...scoops];
        scoopData.push(scoop);
        this.setState((prevState)=>{
            return{
                scoops: scoopData,
                totalPrice: prevState.totalPrice + items[scoop]
            }
        });
    }
    removeScoop = (scoop)=>{
        const {scoops, items} = this.state;
        const scoopData = [...scoops];
        const scoopIndex = scoopData.findIndex(sc=> sc===scoop);
        scoopData.splice(scoopIndex, 1);
        this.setState((prevState)=>{
            return{
                scoops: scoopData,
                totalPrice: prevState.totalPrice - items[scoop]
            }
        });
    }
    render() {
        const {items, totalPrice, scoops} = this.state;
        return (
            <div className={['container', classes.container ].join(' ')}>
                <IceCream scoops={scoops} />
                <Builder items={items} price={totalPrice} add={this.addScoop} remove={this.removeScoop} scoops={scoops} />
            </div>
        )
    }
}
