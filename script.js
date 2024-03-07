const buttonPrompt = document.querySelector('.button-prompt'); // Здесь .button-prompt - это предполагаемый класс кнопки
const container = document.getElementById("container");
const button = document.querySelector(".button")

function genDivs(v) {
    let e;
    e = document.getElementById("container");
    for (var i = 0; i < v; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let x = 1; x <= v; x++) {
            let cell = document.createElement("div");
            cell.className = "gridsquare";

            cell.addEventListener("mouseenter", function () {
                console.log(1)
                this.style.backgroundColor = "red";
            });

            row.appendChild(cell);
        }
        e.appendChild(row);
    }
}

let inputValue;

function promptValue() {
    do {
        inputValue = prompt("Введите количество квадратов на одну сторону");

        if (inputValue === null) {
            alert("Ввод отменен. Пожалуйста, введите число от 1 до 100.");
        } else if (isNaN(inputValue) || inputValue <= 1 || inputValue > 100) {
            alert("Введите корректное число от 1 до 100.");
        }
    } while (isNaN(inputValue) || inputValue <= 1 || inputValue > 100);

    // После успешного ввода вызывается функция удаления таблицы
    removeTable();
}

function removeTable() {
    // Удаляем все дочерние элементы из родительского элемента
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    genDivs(inputValue);
}

// Пример использования
buttonPrompt.addEventListener('click', promptValue);
button.addEventListener('click', genDivs(10))