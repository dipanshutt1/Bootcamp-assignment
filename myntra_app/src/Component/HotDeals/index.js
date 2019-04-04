import React,{Component} from 'react';
import images from '../../images';
import {Deal, Deals} from "./style";

export default class Hotdeals extends Component{

    render(){
        const dealImages = images["deals-card-images"]
        return (
            <Deals>
                {dealImages.map((deal,index)=>{
                    return <Deal image={deal.image}><span>{deal.message}</span></Deal>
                })}
            </Deals>
        )
    }
}