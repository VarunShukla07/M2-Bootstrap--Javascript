function alphabetical() {
    const inputChar = String(document.getElementById("inputChar").value);
    const alphabetical = inputChar.split('').sort().join('');
    document.getElementById("result").textContent = `Expected Output: ${alphabetical}`;
}