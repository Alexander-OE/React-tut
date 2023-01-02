import Form from "./Form";

const NewExpense = (props) => {

const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
}

    return (  <Form onSaveExpenseData={saveExpenseDataHandler} />);
}
 
export default NewExpense;