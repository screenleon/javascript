const fs = require('fs');

// const readFileAsArray = function(file, cb) {
//     fs.readFile(file, function(err, data) {
//         if (err) {
//             return cb(err);
//         }

//         const lines = data.toString().trim().split('\n');
//         cb(null, lines);
//     });
// };

// readFileAsArray('./numbers', (err, lines) => {
//     if (err) throw err;

//     const numbers = lines.map(Number);
//     // console.log('numbers:', numbers);
//     const oddNumbers = numbers.filter(number => number % 2 === 1);
//     console.log('odd numbers count:', oddNumbers.length);
// })

const readFileAsArray = function(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, function(err, data) {
            if (err) {
                return reject(err);
            }
    
            const lines = data.toString().trim().split('\n');
            resolve(lines);
        });
    });
};

readFileAsArray('./numbers')
  .then(lines => {
      const numbers = lines.map(Number);
      const oddNumbers = numbers.filter(number => number % 2 === 1);
      console.log('odd numbers count:', oddNumbers.length);
  })
  .catch(console.error);

  async function countOdd () {
      try {
          const lines = await readFileAsArray('./numbers');
          const numbers = lines.map(Number);
          const oddCount = numbers.filter(number => number % 2 === 1).length;
          console.log('odd numbers count:', oddCount);
      } catch(err) {
          console.error(err);
      }
  }

  countOdd();