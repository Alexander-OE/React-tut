import Home from "./Components/FristSection/Home";
import Header from "./Components/FristSection/Header";
import NewExpense from "./Components/User/NewExpense";


function App() {
  const expenses = [
    {
      title: "car insurance",
    },
    {
      title: "laptop insurance",
    },
    {
      title: "fan insurance",
    },
  ];


  const onAddExpenseHandler = (expense) =>{
    console.log("In App.js");
    console.log(expense);
  }


  return (
    // PROPS
    <>
    <Header />
      <Home item={expenses[0].title} />
      <Home item={expenses[1].title} />
      <Home item={expenses[2].title} />
      <NewExpense onAddExpense={onAddExpenseHandler}/>
    </>
  );
}

export default App;
