const sizes = [10, 3]; // Add any other sizes you'd like here

for (const size of sizes) {
  if (isNaN(size)) {
    console.log("Missing size");
  } else {
    console.log(`\nSize ${size}:`);
    for (let i = 0; i < size; i++) {
      console.log("x".repeat(size));
    }
  }
}