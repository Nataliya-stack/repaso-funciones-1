const contarCaracteres = (cadena) => cadena.length;

const inputEl = document.getElementById("input");
const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("resultado");

btnEl.addEventListener("click", () => {
    const texto = inputEl.value.trim();

    if (texto === "") {
        resultEl.textContent = "Error: ¡El campo no puede estar vacío!";
        resultEl.style.color = "red";
        return; 
    }

    const longitud = contarCaracteres(texto);
    resultEl.textContent = `Longitud del texto: ${longitud}`;
    resultEl.style.color = "white";

    inputEl.value = "";
    inputEl.focus();
});
