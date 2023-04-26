import React ,{useState} from 'react';
import './ExpenceIteam.css';
import ExpenceDate from './ExpenceDate';
// import Card from './UI/Card';


const ExpenceIteam =(props)=> {
    return(
        <div className = 'expence-iteam'>
            <ExpenceDate date ={props.date}/>
            <div className='expence-iteam__description'>
                <h2>{props.title}</h2>
                <div className='expence-iteam__price'>${props.amount}</div>
            </div>
            
        </div>
    );
}
export default ExpenceIteam;