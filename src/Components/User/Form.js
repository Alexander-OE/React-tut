import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("Hello");
  const [title, setTitle] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     name: "",
  //     title: "",
  //   });
  const handleClick = () => {
    setName("Zangetsu");
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    // #################### One State #################

    // setUserInput({
    //     ...userInput,
    //     name: e.target.value,
    // })
  };

  const titlechngeHandler = (e) => {
    setTitle(e.target.value);
    // ###### One Sate ###########
    // setUserInput({
    //   ...userInput,
    //   title: e.target.value,
    // });

    // setUserInput((prevState) =>{
    //     return {...prevState, title: e.target.value}
    // })
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      enteredName: name,
      enteredtitle: title,
    };

    props.onSaveExpenseData(expenseData);
    setName("");
    setTitle("");
  };

  return (
    <div>
      <h1>Expense List</h1>
      <div>
        <form action="" onSubmit={submitHandler}>
          <label htmlFor="">Anything:</label>
          <input type="text" onChange={nameChangeHandler} value={name} />

          <label htmlFor="">Title</label>
          <input type="text" onChange={titlechngeHandler} value={title} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Form;
