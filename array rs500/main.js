const numbers = [100, 200, 300, 400, 500, 600,700,800,900,1000];
const filteredNumbers = numbers.filter(function (number) {
    return number < 500;
});
  
console.log(filteredNumbers);