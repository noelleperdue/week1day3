function calculateSalesTax(companySalesData, taxRates) {
  var resultsObj = {};
      // for (var i in companySalesData)
   {   for (i = 0; i < companySalesData.length; i++) {
  var companyTax = taxRates[companySalesData[i].province];
  var companySales = companySalesData[i].sales.reduce(add, 0);
  function add(a, b) {
  return a + b;
  }    if (!resultsObj[companySalesData[i].name]) {
  resultsObj[companySalesData[i].name] = {
  totalSales: companySales,
  totalTaxes: companySales * companyTax
  }
  } else {
  resultsObj[companySalesData[i].name].totalSales += companySales;
  resultsObj[companySalesData[i].name].totalTaxes += companySales * companyTax;
      }
    }   return resultsObj;
  }