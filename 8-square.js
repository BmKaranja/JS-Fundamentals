#!/usr/bin/node

const inputs = ["nap", 10, 3];

for (const input of inputs) {
  const size = parseInt(input);
  if (isNaN(size)) {
    console.log("Missing size");
  } else if (size > 0) {
    console.log(`\nSize ${size}:`);
    for (let i = 0; i < size; i++) {
      console.log("X".repeat(size));
    }
  }
}