function multiply() {
    const id1 = parseInt(document.getElementById("id1").value);
    const id2 = parseInt(document.getElementById("id2").value);
    const mul = id1 * id2
    document.getElementById("result").textContent = `The Result Is : ${mul}`;
}

function divide() {
    const id1 = parseInt(document.getElementById("id1").value);
    const id2 = parseInt(document.getElementById("id2").value);
    if (id2 == 0) {
       document.getElementById("result").textContent = `Cannot divide by Zero`
    }
    else {
        const div = id1 / id2
        document.getElementById("result").textContent = `The Result Is : ${div}`;
    }
}