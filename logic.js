document.getElementById("calculator").addEventListener("submit", calculation);
function calculation(a) {
  const Inputamount = document.getElementById("loanamount").value;
  const Inputinterest = document.getElementById("loaninterest").value;
  const Inputyears = document.getElementById("numyears").value;
  const total = parseFloat(Inputamount);
  const Interest = parseFloat(Inputinterest) / 100 / 12;
  const Payments = parseFloat(Inputyears) * 12;

  //Monthly
  const x = Math.pow(1 + Interest, Payments);
  const monthly = (total * x * Interest) / (x - 1);
  const Mpayment = monthly.toFixed(2);

  //Interest
  const ToInterest = (monthly * Payments - total).toFixed(2); 
  
  //Total Payment
  const ToPayment = (monthly * Payments).toFixed(2);

  document.getElementById("Mpayment").innerHTML = "₱" + Mpayment; document.getElementById("ToInterest").innerHTML = "₱" + ToInterest; document.getElementById("ToPayment").innerHTML = "₱" + ToPayment;
  
  a.preventDefault();
}
