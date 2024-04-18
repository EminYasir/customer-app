import React from "react";
import "./CustomerList.css";

const CustomerItem = ({customer,customerDeleteHandler}) => {

    

  return (
    <li className="customer-item">
      <div className="customer-info">
        <img
          src="https://i.pravatar.cc/300"
          alt=""
          className="customer-avatar"
        />
        <span className="customer-name">{customer.customerName}</span>
      </div>
      <button className="delete-button" onClick={()=>customerDeleteHandler(customer.id)}>
        <i className="bi bi-trash3"></i>
      </button>
    </li>
  );
};

export default CustomerItem;
