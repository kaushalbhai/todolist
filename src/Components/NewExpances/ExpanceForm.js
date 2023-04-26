
import React, {useState} from "react";
import './ExpanceForm.css'
const ExpanceForm =(props)=>{
    const [enteredTitle ,setEnteredTitle] =useState('');
    const [enteredAmount ,setEnteredAmount] =useState('');
    const [enteredDate ,setEnteredDate] =useState('');
    const titleChangeHandler =(event) =>{
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler =(event) =>{
        setEnteredAmount(event.target.value);

    };
    const dateChangeHandler =(event) =>{
        setEnteredDate(event.target.value);

    };

    const submitHandlear =(event)=>{
        event.preventDefault();

        const expanceData ={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpanceData(expanceData);
        console.log(expanceData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');


    };
    return(
        <form onSubmit={submitHandlear}>
            <div className="new-expance__controls">
                <div className="new-expance__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expance__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount}  min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expance__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} />
                </div>

            </div>
            <div className=".new-expance__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>

    );
};
export default ExpanceForm;