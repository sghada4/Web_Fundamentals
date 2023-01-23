// Print odds 1-20

for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log("****************************************");

// Decreasing Multiples of 3

for (var j = 100; j >= 0; j--) {
    if (j % 3 == 0) {
        console.log(j);
    }
}
console.log("****************************************");

// Print the sequence

for (var x = 4; x >= -3.5; x -= 1.5) {
    console.log(x);
}
console.log("****************************************");

// Sigma

var sum = 0;
for (var count = 1; count <= 100; count++) {
    sum += count;
}
console.log(sum);
console.log("****************************************");

// Factorial

var product = 1;
for (var p = 2; p <= 12; p++) {
    product *= p;
}
console.log(product);
console.log("****************************************");