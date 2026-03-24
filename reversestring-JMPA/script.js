function reverseString() {
    const input = document.getElementById("inputText").value;
    const resultElement = document.getElementById("result");

    if (!input.trim()) {
        alert("El texto no puede ser vacio");
        return;
    }

    const reversed = input.split("").reverse().join("");
    resultElement.textContent = reversed;
}
