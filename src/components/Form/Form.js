import React, { useState } from "react";
// import FormInput from "./FormInput";

const Form = () => {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [term, setTerm] = useState("")
  const [rate, setRate] = useState("")



  const initialInvestmentHandler = (event) => {
    setInitialInvestment(event.target.value);
  };

  const monthlyInvestmentHandler = (event) => {
    setMonthlyInvestment(event.target.value);
  };

  const termInvestmentHandler = (event) => {
    setTerm(event.target.value)
  }

  const rateHandler = (event) => {
    setRate(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(initialInvestment, monthlyInvestment);
    setInitialInvestment("");
    setMonthlyInvestment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label>Initial Investment </label>
          <input
            type="number"
            onChange={initialInvestmentHandler}
            value={initialInvestment}
            placeholder="Enter an amount"
          />
        </div>
        <div>
          <label>Monthly Investment </label>
          <input
            type="number"
            onChange={monthlyInvestmentHandler}
            value={monthlyInvestment}
            placeholder="Enter an amount"
          />
        </div>
        <div>
          <label>Term </label>
          <input
            type="number"
            onChange={termInvestmentHandler}
            value={term}
            placeholder="Enter an amount"
          />
        </div>
        <div>
          <label>Return Rate </label>
          <input
            type="number"
            onChange={rateHandler}
            value={rate}
            placeholder="Enter an amount"
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
