function reverseNumber() {
    const inputNumber = parseInt(document.getElementById("inputNumber").value);
    const reversedNumber = reverse(inputNumber);
    document.getElementById("result").textContent = `Expected Output: ${reversedNumber}`;
}

function reverse(number) {
    let reversed = 0;
    while (number !== 0) {
        const dg = number % 10;
        reversed = reversed * 10 + dg
        number = Math.floor(number / 10)
    }
    return reversed
}