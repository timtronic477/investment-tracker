import React, { useState } from "react";
// import FormInput from "./FormInput";

const Form = () => {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [deposit, setDeposit] = useState("");
  const [term, setTerm] = useState("")
  const [rate, setRate] = useState("")
  const [compound, setCompound] = useState("")



  const initialInvestmentHandler = (event) => {
    setInitialInvestment(event.target.value);
  };

  const depositHandler = (event) => {
    setDeposit(event.target.value);
  };

  const termInvestmentHandler = (event) => {
    setTerm(event.target.value)
  }

  const rateHandler = (event) => {
    setRate(event.target.value)
  }

  const compoundHandler = (event) => {
    setCompound(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(initialInvestment, deposit, term, rate, compound);
    setInitialInvestment("");
    setDeposit("");
    setTerm("");
    setRate("");

    // assume rate is monthly
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
          <label>Deposits</label>
          <input
            type="number"
            onChange={depositHandler}
            value={deposit}
            placeholder="Enter an amount"
          />
        </div>
        <div>
          <label>Term </label>
          <input
            type="number"
            onChange={termInvestmentHandler}
            value={term}
            placeholder="How many years"
          />
        </div>
        <div>
          <label>Return Rate </label>
          <input
            type="number"
            onChange={rateHandler}
            value={rate}
            placeholder="Enter a percent"
          />
        </div>
        <div>
          <label>Compounding Frequency</label>
          <input
            type="number"
            onChange={compoundHandler}
            value={compound}
            placeholder="How often yearly"
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
