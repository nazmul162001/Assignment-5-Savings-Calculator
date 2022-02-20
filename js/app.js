// function for parseInt value
function getValue(setId){
  const getAmount = document.getElementById(setId);
  const getAmountValue = parseInt(getAmount.value);
  return getAmountValue;
}
// function for get value
function getErrValue(err){
  const errHandling = document.getElementById(err).value;
  return errHandling;
}
// Calculate Button Event Handler 
document.getElementById('calculate-btn').addEventListener('click',function(){
  // get Amount value 
  getValue('food-amount');
  getValue('rent-amount');
  getValue('cloth-amount');
  getValue('total-income')
  // get Total Expenses
  const totalExpense = getValue('food-amount') + getValue('rent-amount') + getValue('cloth-amount');
  // Condition check 
  if(getValue('food-amount') < 0 || getValue('rent-amount') < 0 || getValue('cloth-amount') < 0 ||getValue('total-income') < 0){
    alert('Amount Can Not be Negative')
  }
  else if(getErrValue('food-amount') == '' || getErrValue('rent-amount') == '' || getErrValue('cloth-amount') == ''){
    alert('Please input a value');
  }
  else if(getValue('total-income') < totalExpense ){
    alert('You Do Not Have Enough Balance To Expenses')
  }
  else{
    // get total expenses amount 
  const totalExpensesAmount = getValue('food-amount') + getValue('rent-amount') + getValue('cloth-amount');
  // set total expenses amount 
  document.getElementById('total-expenses').innerText = totalExpensesAmount;
    // get my income 
    const totalIncome = document.getElementById('total-income').value;
    // get amount 
    const totalBalance = parseInt(totalIncome) - totalExpensesAmount;
    //  set total amount 
    document.getElementById('total-balance').innerText = totalBalance;
  }
})
// Saving Button Event Handler 
document.getElementById('saving-btn').addEventListener('click', function(){
    // get saving value 
    getValue('saving');
    getValue('total-income');
    // get all input value for errHandling 
    getErrValue('total-income');
    getErrValue('food-amount');
    getErrValue('rent-amount');
    getErrValue('cloth-amount');
    getErrValue('saving');
    // get saving Balance 
    const savingBalance = getValue('total-income') / 100 * getValue('saving');
    // get total balance 
    const getBalanceTotal = document.getElementById('total-balance').innerText;
    const balanceTotal = parseInt(getBalanceTotal);
// Check Condition 
    if(balanceTotal < savingBalance){
      alert('You do not have enough balance to saving')
    }
    else if(getValue('saving') < 0){
      alert('Saving Amount Can not Be Negative');
    }
    else if(getErrValue('saving') == ''){
      alert('Please Input a Value');
    }
    else{
      document.getElementById('saving-balance').innerText = parseInt(savingBalance);
      // remaining balance 
      const remainingAmount = balanceTotal - savingBalance;
      document.getElementById('remaining-balance').innerText = parseInt(remainingAmount);
    }
})