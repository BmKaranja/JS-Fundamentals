const count = parseInt(process.argv[2]);

if (isNaN(count)) {
    console.log("Missing number of occurrences");
} else {
    let output = '';
    for (let i = 0; i < count; i++) {
        output += "C is fun\n";
    }
    console.log(output.trim());
}