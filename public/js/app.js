let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let sign = document.getElementById("sign");
let operation = document.getElementById("operation");
let reset = document.getElementById("reset");
let resultado = document.getElementById("resultado");

operation.addEventListener("click", () => {
   let output = num1.value + sign.value + num2.value;
    console.log(output);
   calculadora(output);
});

reset.addEventListener("click", () => {
    resetear();
});

const resetear = () => {
    num1.value = "";
    num2.value = "";
    sign.value = "";
    resultado.innerHTML = "";
};

const calculadora = (output) => {
    output = eval(output);
    resultado.innerHTML = output;

};