import React ,{useState} from "react";
import NewExpance from "./Components/NewExpances/NewExpance";

import Expences from "./Components/Expences/Expences";
let DUMMY_EXPENSE =[
    {
        id: 'e1',
        title: 'school fee',
        amount: 340,
        date: new Date(2023, 5, 12)
    },
    {
        id: 'e2',
        title: 'Book',
        amount: 440,
        date: new Date(2023, 2, 22)
    },
    {
        id: 'e3',
        title: 'Foods',
        amount: 550,
        date: new Date(2023, 4, 10)
    },
    {
        id: 'e4',
        title: 'Room Rent',
        amount: 3000,
        date: new Date(2023, 6, 11)
    }
];
const MyApp =()=>{
    const[expences ,setExpances] =useState(DUMMY_EXPENSE);
    

    const addExpanceHandlear =(expance) =>{
        const updatedExpance =[expance ,...expences];
        setExpances(updatedExpance);
    }
    return (
        <div>
            <NewExpance onAddExpance ={addExpanceHandlear}/>
            <Expences iteam ={expences}/>
        </div>
    );
};
export default MyApp;