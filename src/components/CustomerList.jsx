import "./CustomerList.css";
import CustomerItem from "./CustomerItem";

const CustomerList = ({ customers ,SetCustomers}) => {

    const customerDeleteHandler=(id)=>{
        SetCustomers(customers.filter((customer)=>(customer.id !== id)))
    }
    
  return (
    <ul className="customer-list">
      {customers.map((customer) => (
        <CustomerItem customer={customer} key={customer.id} customerDeleteHandler={customerDeleteHandler}/>
      ))}
    </ul>
  );
};

export default CustomerList;
