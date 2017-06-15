function erwarCurrency(number) {
  return new Intl.NumberFormat().format(number)
}

erwarCurrency(5000);
