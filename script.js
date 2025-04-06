const loanAmount = document.getElementById("loanAmount");
const loanTenure = document.getElementById("loanTenure");
const interestRate = document.getElementById("interestRate");

const loanAmountText = document.getElementById("loanAmountText");
const loanTenureText = document.getElementById("loanTenureText");
const interestRateText = document.getElementById("interestRateText");

const monthlyInstallment = document.getElementById("monthlyInstallment");
const totalRepayment = document.getElementById("totalRepayment");
const totalInterest = document.getElementById("totalInterest");

function formatCurrency(num) {
  return "Rs." + num.toLocaleString();
}

function calculateLoan() {
  const principal = parseFloat(loanAmount.value);
  const tenure = parseInt(loanTenure.value);
  const annualRate = parseFloat(interestRate.value);

  const monthlyRate = annualRate / 100 / 12;
  const months = tenure * 12;

  const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) /
              (Math.pow(1 + monthlyRate, months) - 1);
  const total = emi * months;
  const interest = total - principal;

  monthlyInstallment.textContent = formatCurrency(Math.round(emi));
  totalRepayment.textContent = formatCurrency(Math.round(total));
  totalInterest.textContent = formatCurrency(Math.round(interest));

  loanAmountText.value = formatCurrency(principal);
  loanTenureText.value = tenure + " years";
  interestRateText.value = annualRate + "%";
}

loanAmount.addEventListener("input", calculateLoan);
loanTenure.addEventListener("input", calculateLoan);
interestRate.addEventListener("input", calculateLoan);

window.onload = calculateLoan;
