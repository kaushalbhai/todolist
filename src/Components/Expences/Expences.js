import React from 'react';
import './Expences.css';
import ExpenceIteam from './ExpenceIteam';
// import Card from '../UI./Card';
const Expences =(props) =>{
    return(
        <div  className='expences'>
            {
                props.iteam.map(
                    expance =>(
                        <ExpenceIteam
                            date={expance.date}
                            title={expance.title}
                            amount={expance.amount}/>

                    )
                )
            }
        </div>

    );


};
export default Expences;