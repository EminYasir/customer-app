
import { useState } from 'react';
import './App.css';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';

function App() {


  const [customers, SetCustomers] = useState([]);

  const addNewCustomer = (newCustomer) => {
    //SetCustomers([...customers, newCustomer]);
    SetCustomers((prev)=>([newCustomer,...prev]))
  };


  return (
    <div className="App">
      <h1>Customer Management System</h1>
      <CustomerForm addNewCustomer={addNewCustomer}/>
      {customers.length===0 ? "There are no customers..." : <CustomerList customers={customers} SetCustomers={SetCustomers}/>}
    </div>
  );
}

export default App;
