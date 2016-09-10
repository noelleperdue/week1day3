var taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function addSales(allSales){
  var results = {};

   for (var i = 0; i < allSales.length; i++){
    var transaction = allSales[i];
    //calculate total sales for this company, for that transaction
    var totalSales = transaction.sales.reduce(function(sum, current){
    return sum + current;
  }, 0);
    //calculate current total tax
    var taxRate = taxRates[transaction.province];
    var currentTotalTax = totalSales * taxRate;
    //check if we have seen the transaction before
    if (results[transaction.name]) {
      results[transaction.name].newTotalSales += totalSales;
      results[transaction.name].totalTaxes += currentTotalTax;
    } else {
      results[transaction.name] = {
      'newTotalSales': totalSales,
      'totalTaxes': currentTotalTax
      };
    }
   }
   return results;
}

console.log(addSales(companySalesData));