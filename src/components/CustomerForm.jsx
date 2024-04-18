import React, { useState } from "react";
import "./CustomerForm.css";

const CustomerForm = (props) => {
  const [customerName, setCustomerName] = useState("");
  const [isValid, setIsValid] = useState(false);

  const customerHandler = (e) => {
    const nameValue = e.target.value;
    if (nameValue.trim().length > 0) {
      setIsValid(false);
    }
    setCustomerName(nameValue);
  };

  const addCustomerHandler = (e) => {
    e.preventDefault();
    if (customerName.trim().length === 0) {
        setIsValid(true);
        return;
      }
    const newCustomer = {
      id: Math.random(),
      customerName: customerName,
    };
    props.addNewCustomer(newCustomer);
    setCustomerName("");
  };

  return (
    <div>
      <form className="customerForm" onSubmit={addCustomerHandler}>
        <input
          text="text"
          className="customerInput"
          placeholder="Add a new customer"
          value={customerName}
          onChange={customerHandler}
          style={{backgroundColor: isValid ? "red" : ""}}
        />
        <button>
          <i className="bi bi-plus-lg"></i>
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
