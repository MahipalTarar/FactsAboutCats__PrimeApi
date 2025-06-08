const express = require('express');
const app = express();

const PORT = 8080;

//i am creating this function to check prime number
function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

// i can also use seive of erathonose to optimise my api to get prime number.

// i am creat this route to get number prime or not
//http://localhost:8080/is-prime?number=13 
app.get('/is-prime', (req, res) => {
  const number = parseInt(req.query.number, 10);

// this is to check that numbers are passed 
  if (isNaN(number)) {
    return res.status(400).json({ error: 'Please provide a valid number' });
  }

  const result = isPrime(number);
  res.json({ number: number, isPrime: result });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});




