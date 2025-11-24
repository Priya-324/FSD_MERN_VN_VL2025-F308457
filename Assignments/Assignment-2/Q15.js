function totalExpenses(expenses) {
    let total = expenses.reduce((a, b) => a + b, 0);
    console.log("Total money spent:", total);
}
totalExpenses([2000, 1500, 3500, 4000]);