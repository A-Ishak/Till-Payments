
import './App.css';
import React, { Component } from 'react';
import merchants from './data/merchants';
import searchFunctions,{addCustomer,customerSearch,merchantSearch} from './handlers/handleClicks';
import Image from './tillPayments.png';


class App extends Component{
  render(){
  return (

 


    <div>
        <header className="App-header">

        <h1>TILL PAYMENTS</h1>
        
       <div>
       <a href="https://tillpayments.com/">
  <img src={Image} className="tillPayments" title = "Take me to Website" />
</a>
       
       </div>


<div >
  <form>
  <label for="merchID">Merchant Details:</label>
  &nbsp;
  <input type ="text" id="merchID" name="merID"/>
  <button onClick={merchantSearch}>Search ID</button>
  </form>
  <p id="merID"></p>
  

</div>


<div>
  <form>
  <label for="customers">All Customers:</label>
  &nbsp;
  <input type="text" id="customers" name="customerList"/>
  <button onClick={customerSearch}>Search</button>
  </form>
</div>



<div>
    <form>
    <label for="addCustomer">New Customer</label>
    &nbsp;
    <input type ="text" id ="newCustomer" name ="newCustomers"/>
    <button onClick={addCustomer}>Add</button>



    </form>

   
</div>



    
      
</header>
</div>)}}


export default App;



