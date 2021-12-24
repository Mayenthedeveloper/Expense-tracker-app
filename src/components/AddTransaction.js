import React from "react";

const AddTransaction = () => {
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="label">Label</label>
          <input type="text" placeholder="Enter label..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            (<b>-</b>/<b>+</b>)Amount &nbsp; &nbsp; [-expense, +income]
          </label>
          <input type="number" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
