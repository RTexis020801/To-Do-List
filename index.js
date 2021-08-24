
const $Agregar = document.getElementById("Agregar");
const $Limpiar = document.getElementById("Limpiar");
const $List = document.getElementById("ToDo_list");

const Tareas = [];

let x;

let Boton = function (x) {
    let btn_done = document.createElement("button");
    btn_done.setAttribute("class", "ToDo__button")
    btn_done.setAttribute("onclick", `Eliminar(${x})`);
    btn_done.appendChild(document.createTextNode("Done"));
    return btn_done;
}

let AgregarLi = function () {
    let text = document.getElementById("text").value;
    if (text !== "") {
        let TextNode = document.createTextNode(text);
        x = Tareas.length;
        let btn_done = Boton(x);
        let li = document.createElement("li");
        li.appendChild(TextNode);
        li.appendChild(btn_done);
        li.setAttribute('class', 'ToDo__item');
        if (!Tareas.includes(li.outerHTML, 0)) {
            $List.appendChild(li);
            Tareas.push(li.outerHTML);
        } else {
            console.log("Tarea repetida");
        }
    } else {
        console.log("No has insertado texto");
    }
    document.getElementById("text").value = "";
}

let LimpiarLista = function () {
    let elementos = document.getElementsByClassName("ToDo__item");
    for (let i = 0; i < Tareas.length; i++) {
        console.log(i);
        elementos[0].parentElement.removeChild(elementos[0]);
    }
    while (Tareas.length) { Tareas.pop(); }
    document.getElementById("text").value = "";
}

function Eliminar(x) {
    let elementosbtn = document.getElementsByClassName("ToDo__button")
    let elementos = document.getElementsByClassName("ToDo__item");
    elementos[x].parentElement.removeChild(elementos[x]);
    Tareas.pop(x);
    for (let j = 0; j < Tareas.length; j++) {
        elementosbtn[j].setAttribute("onclick", `Eliminar(${j})`);
    }
}


$Agregar.addEventListener('click', () => {
    AgregarLi();
});

$Limpiar.addEventListener('click', () => {
    LimpiarLista();
});

