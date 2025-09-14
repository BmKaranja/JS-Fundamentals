#!/usr/bin/node

const x = parseInt(process.argv[2]);

if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  let output = '';
  for (let i = 0; i < x; i++) {
    output += 'C is fun\n';
  }
  if (x > 0) console.log(output.trim());
}