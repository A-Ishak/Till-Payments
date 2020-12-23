import merchants from '../data/merchants';



function merchantSearch(){
    let x = document.getElementById("merchID").value;
    document.getElementById("merID").innerHTML = x;
   function findMerchant(merchants,x){
   
     merchants.find((element) =>{
     return element.id===x;

   })
   return<h1>merchants.id</h1>
  }}

  
  function customerSearch(){
  let y = document.getElementById("customerList").value;
  
  }
  
  function addCustomer(){
    let z = document.getElementById("newCustomers").value;
  
  }

export{ 
 merchantSearch,
 customerSearch,
 addCustomer,
}

