function divisor() {
    let num = parseInt(prompt("Digite um número : "));

    for (let i = num; i >= 0; i--) {
        if (num % i == 0) {
            document.write(`Divisível por ${i}` + "<br>");
        }
    }
}