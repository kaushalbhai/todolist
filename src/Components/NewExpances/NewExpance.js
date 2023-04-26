import React from "react";
import './NewExpance.css';
import ExpanceForm from "./ExpanceForm";
const NewExpance =(props)=>{

    const saveExpenceDataHandlear =(enteredExpanceData)=>{
       const expanceData ={
          ...enteredExpanceData, 
          id: Math.random().toString()
       }
       props.onAddExpance(expanceData);
       
        console.log(expanceData);
    };
    return (
        <div className="new-expance">
            <ExpanceForm onSaveExpanceData={saveExpenceDataHandlear}/>
            

        </div>

    );

};
export default NewExpance;