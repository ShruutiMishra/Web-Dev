let n1 = 4, n2 = 8;
let ans = 1;  // Initialize ans to 1

for (let i = 1; i <= Math.min(n1, n2); i++) {  // Change the loop condition
    if (n1 % i === 0 && n2 % i === 0) {
        ans = i;
    }
}

console.log("The GCD of the two numbers is " + ans);
