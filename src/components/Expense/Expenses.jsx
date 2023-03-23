import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear
  })

  // let expenseContent=<p style={{color:'white' , textAlign:'center'}}>No Data Found</p>

  // if(expenseContent.length>0){
  //   let expenseContent=filteredExpenses.map((expense) => <ExpenseItem key={expense.id} title ={expense.title} amount={expense.amount} date={expense.date} />)
  // }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        {/* {expenseContent} */}

        {filteredExpenses.length===0?<p style={{color:'white'}}>No Data Found</p> : filteredExpenses.map((expense) => <ExpenseItem key={expense.id} title ={expense.title} amount={expense.amount} date={expense.date} />)}
      </Card>                                       {/* key  is  most important if you want to render list properly*/}
    </div>
  );
};

export default Expenses;